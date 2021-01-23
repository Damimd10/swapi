import React, { createContext, useContext, useState } from 'react';

type SortType = 'ASC' | 'DESC';

type Sort = {
  name: string;
  type: SortType;
};

type PlanetContextProps = {
  query: string;
  setQuery: (query: string) => void;
  setSort: any;
  sort: Sort;
};

const PlanetContext = createContext<PlanetContextProps>({} as PlanetContextProps);

const PlanetProvider: React.FC = ({ children }) => {
  const [sort, setSort] = useState<Sort>({} as Sort);
  const [query, setQuery] = useState('');

  const props: PlanetContextProps = {
    query,
    setQuery,
    setSort,
    sort,
  };

  return <PlanetContext.Provider value={props}>{children}</PlanetContext.Provider>;
};

const usePlanetContext = () => {
  const context = useContext(PlanetContext);

  if (context === undefined) {
    throw new Error('usePlanetContext must be used within a PlanetProvider');
  }

  return context;
};

export { PlanetProvider, usePlanetContext };
