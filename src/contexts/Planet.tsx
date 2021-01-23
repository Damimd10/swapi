import React, { createContext, useContext, useState } from 'react';

type PlanetContextProps = {
  query: string;
  setQuery: (query: string) => void;
};

const PlanetContext = createContext<PlanetContextProps>({} as PlanetContextProps);

const PlanetProvider: React.FC = ({ children }) => {
  const [query, setQuery] = useState('');

  const props: PlanetContextProps = {
    query,
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
