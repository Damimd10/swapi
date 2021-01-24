import React from 'react';

import Column from './Column';

import Loading from '../Loading';
import Planet from '../Planet';
import { COLUMNS } from '../../utils/constants';
import { usePlanetContext } from '../../contexts/Planet';

type SortType = 'ASC' | 'DESC';

type TableProps = {
  page: number;
};

const toggleType = (type: SortType) => {
  if (type === 'ASC') return 'DESC';
  return 'ASC';
};

const Table: React.FC<TableProps> = ({ page }) => {
  const { isLoading, planets, setSort, sort } = usePlanetContext();

  const handleClickColumn = (name: string) => {
    const column = COLUMNS.find((currentColumn) => currentColumn.name === name);

    if (!column || !column.sort) return;

    if (sort.name === name) {
      return setSort({ ...sort, type: toggleType(sort.type) });
    }

    return setSort({ name, type: 'ASC' });
  };

  const columnSorted = (name: string) => (sort.name === name ? sort.type : false);

  const startPage = page === 1 ? 0 : (page - 1) * 10;
  const endPage = page * 10;

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
        {isLoading ? (
          <tr>
            <td align="center" className="p-8" colSpan={5}>
              <Loading />
            </td>
          </tr>
        ) : (
          planets
            .slice(startPage, endPage)
            .map((planet, index) => <Planet key={`${planet.name}-${index}`} {...planet} />)
        )}
      </tbody>
    </table>
  );
};

export default Table;
