// import { IPlanet } from '../api/getPlanets';

type SortType = 'ASC' | 'DESC';

type Sort = {
  name: string;
  type: SortType;
};

const HASH_COLUMN_NAME = {
  'Planet Name': {
    name: 'name',
    type: 'string',
  },
  Population: {
    name: 'population',
    type: 'number',
  },
  Diameter: { name: 'diameter', type: 'number' },
};

const sorting = (data: any, sort: Sort) => {
  const column = HASH_COLUMN_NAME[sort.name];

  if (!column) return;

  return data.sort((a: any, b: any) => {
    const propA = column.type === 'string' ? String(a[column.name]) : Number(a[column.name]) || 0;
    const propB = column.type === 'string' ? String(b[column.name]) : Number(b[column.name]) || 0;

    if (sort.type === 'ASC') {
      return propB < propA;
    }

    if (propA > propB) return -1;
    if (propB > propA) return 1;

    return 0;
  });
};

export default sorting;
