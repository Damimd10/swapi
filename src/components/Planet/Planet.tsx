import { FC } from 'react';

import numeral from 'numeral';

const Planet: FC<any> = ({ climate, diameter, gravity, name, population }) => (
  <tr>
    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
      <div className="flex items-center">
        <div className="ml-3">
          <p className="text-gray-900 whitespace-no-wrap">{name}</p>
        </div>
      </div>
    </td>
    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
      <p className="text-gray-900 whitespace-no-wrap">{numeral(population).format('0,0')}</p>
    </td>
    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
      <p className="text-gray-900 whitespace-no-wrap">{numeral(diameter).format('0,0')}m</p>
    </td>
    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
      <p className="text-gray-900 whitespace-no-wrap">{gravity}</p>
    </td>
    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
      {climate.split(',').map((value: string) => (
        <span
          key="value"
          className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
        >
          <span
            aria-hidden
            className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
          ></span>
          <span className="relative">{value}</span>
        </span>
      ))}
    </td>
  </tr>
);

export default Planet;
