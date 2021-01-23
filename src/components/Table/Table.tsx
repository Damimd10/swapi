import React from 'react';

import Column from './Column';

import Planet from '../Planet';
import { COLUMNS } from '../../utils/constants';
import { IPlanet } from '../../api/getPlanets';
import { usePlanetContext } from '../../contexts/Planet';

type TableProps = {
  data: IPlanet[];
};

type SortType = 'ASC' | 'DESC';

const toggleType = (type: SortType) => {
  if (type === 'ASC') return 'DESC';
  return 'ASC';
};

const Table: React.FC<TableProps> = ({ data }) => {
  const { setSort, sort } = usePlanetContext();

  const handleClickColumn = (name: string) => {
    const column = COLUMNS.find((currentColumn) => currentColumn.name === name);

    if (!column || !column.sort) return;

    if (sort.name === name) {
      return setSort({ ...sort, type: toggleType(sort.type) });
    }

    return setSort({ name, type: 'ASC' });
  };

  const columnSorted = (name: string) => (sort.name === name ? sort.type : false);

  return (
    <table className="min-w-full leading-normal">
      <thead>
        {COLUMNS.map(({ name, sort = false }, index) => (
          <Column
            key={`${name}-${index}`}
            name={name}
            onClick={handleClickColumn}
            sort={sort && columnSorted(name)}
          />
        ))}
      </thead>
      <tbody>
        {data.map((planet, index) => (
          <Planet key={`${planet.name}-${index}`} {...planet} />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
