import React, { createContext, useContext, useState } from 'react';

type PlanetContextProps = {
  activeFilter: string;
  query: string;
  setActiveFilter: (filter: string) => void;
  setQuery: (query: string) => void;
};

const PlanetContext = createContext<PlanetContextProps>({} as PlanetContextProps);

const PlanetProvider: React.FC = ({ children }) => {
  const [query, setQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('');

  const props: PlanetContextProps = {
    activeFilter,
    query,
    setActiveFilter,
    setQuery,
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
