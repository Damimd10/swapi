import React, { createContext, useContext, useEffect, useState } from 'react';

import getPlanets, { IPlanet } from '@api/getPlanets';

import { constants, filterByValue, sorting } from '@utils';

const { MAX_ITEMS } = constants;

type SortType = 'ASC' | 'DESC';

type Sort = {
  name: string;
  type: SortType;
};

type PlanetContextProps = {
  error: any;
  isLoading: boolean;
  maxPage: number;
  planets: IPlanet[];
  query: string;
  setQuery: (query: string) => void;
  setSort: (sortingObject: Sort) => void;
  sort: Sort;
};

const PlanetContext = createContext<PlanetContextProps>({} as PlanetContextProps);

const hasQuery = (query: string | null) => {
  if (!query) return false;

  return query !== '';
};

const PlanetProvider: React.FC = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [planets, setPlanets] = useState<IPlanet[]>([]);
  const [filteredPlanets, setFilteredPlanets] = useState<IPlanet[] | null>(null);
  const [sort, setSort] = useState<Sort>({} as Sort);
  const [query, setQuery] = useState('');

  useEffect(() => {
    setIsLoading(true);
    (async () => {
      try {
        const response = await getPlanets();
        setPlanets([...planets, ...response]);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const listToFilter = hasQuery(query) ? filteredPlanets : planets;
    const sortingResult = sorting(listToFilter as IPlanet[], sort);

    if (sortingResult) {
      hasQuery(query) ? setFilteredPlanets([...sortingResult]) : setPlanets([...sortingResult]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sort]);

  useEffect(() => {
    if (!hasQuery(query)) return setFilteredPlanets([]);

    const filteredList = filterByValue(planets, query);

    const filteredAndSorted =
      Object.keys(sort).length !== 0 ? sorting(filteredList, sort) || [] : filteredList;

    setFilteredPlanets([...filteredAndSorted]);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  const list = filteredPlanets?.length || [].length > 0 ? filteredPlanets || [] : planets;

  const props: PlanetContextProps = {
    error,
    isLoading,
    maxPage: Math.ceil(list.length / MAX_ITEMS),
    planets: hasQuery(query) ? filteredPlanets || [] : planets,
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
