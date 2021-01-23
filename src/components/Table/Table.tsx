import React from 'react';

import { IPlanet } from '../../api/getPlanets';
import Planet from '../Planet';
import { COLUMNS } from '../../utils/constants';

type TableProps = {
  data: IPlanet[];
};

const Table: React.FC<TableProps> = ({ data }) => (
  <table className="min-w-full leading-normal">
    <thead>
      {COLUMNS.map((name, index) => (
        <th
          key={`${name}-${index}`}
          className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
        >
          {name}
        </th>
      ))}
    </thead>
    <tbody>
      {data.map((planet, index) => (
        <Planet key={`${planet.name}-${index}`} {...planet} />
      ))}
    </tbody>
  </table>
);

export default Table;
