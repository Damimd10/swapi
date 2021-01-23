import React from 'react';

type SortType = 'ASC' | 'DESC';

type ColumnProps = {
  name: string;
  onClick: (name: string) => void;
  sort: boolean | SortType;
};

const SortAscIcon = () => (
  <svg
    className="ml-2 w-6 h-6"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12"
    />
  </svg>
);

const SortDescIcon = () => (
  <svg
    className="ml-2 w-6 h-6"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4"
    />
  </svg>
);

const SORTING = {
  ASC: <SortAscIcon />,
  DESC: <SortDescIcon />,
};

const Column: React.FC<ColumnProps> = ({ name, onClick, sort }) => {
  return (
    <th
      className="cursor-pointer px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
      onClick={() => onClick(name)}
    >
      <div className="flex justify-centent items-center">
        <span>{name}</span>
        {sort ? SORTING[sort as string] : null}
      </div>
    </th>
  );
};

export default Column;
