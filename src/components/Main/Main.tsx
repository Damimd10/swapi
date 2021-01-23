import React, { useEffect, useMemo, useState } from 'react';

import { useQuery, useQueryClient } from 'react-query';

import Filters from '../Filters';
import Pagination from '../Pagination';
import SearchInput from '../SearchInput';
import Table from '../Table';

import { usePlanetContext } from '../../contexts/Planet';
import { DEFAULT_URL, MAX_ITEMS } from '../../utils/constants';
import {
  sortByDiameterASC,
  sortByDiameterDESC,
  sortByNameASC,
  sortByNameDESC,
  sortByPopulationASC,
  sortByPopulationDESC,
} from '../../utils/sorting';
import getPlanets from '../../api/getPlanets';

const SORT_HASH = {
  'name-asc': sortByNameASC,
  'name-desc': sortByNameDESC,
  'population-asc': sortByPopulationASC,
  'population-desc': sortByPopulationDESC,
  'diameter-asc': sortByDiameterASC,
  'diameter-desc': sortByDiameterDESC,
};

const Main = () => {
  const queryClient = useQueryClient();
  const { activeFilter, query = '' } = usePlanetContext();

  const [page, setPage] = useState(DEFAULT_URL);

  const { data, refetch } = useQuery(['planets', { page, query }], () => getPlanets(page, query), {
    keepPreviousData: true,
  });

  useEffect(() => {
    if (data?.next) {
      queryClient.prefetchQuery(['planets', { page, query }], () => getPlanets(page));
    }
  }, [data, page, query, queryClient]);

  const planets = useMemo(() => {
    if (!activeFilter || activeFilter === '') return data?.results;

    return SORT_HASH[activeFilter](data?.results);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeFilter]);

  if (!data) return null;

  const handleNextPage = () => setPage(data.next ?? '');
  const handlePrevPage = () => setPage(data.previous ?? '');

  const isDisabledPrev = !data.previous;
  const isDisabledNext = !data.next;

  const currentPage = Number(new URLSearchParams(`?${page.split('?').pop()}`).get('page')) || 1;
  const maxPage = data.count / MAX_ITEMS;

  return (
    <div className="container mx-auto px-4 sm:px-8">
      <div className="py-8">
        <div>
          <h2 className="text-2xl font-semibold leading-tight">Planets</h2>
        </div>
        <SearchInput fetch={refetch} />
        <Filters />
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
            <Table data={planets} />
            <Pagination
              currentPage={currentPage}
              handleNextPage={handleNextPage}
              handlePrevPage={handlePrevPage}
              isDisabledNext={isDisabledNext}
              isDisabledPrev={isDisabledPrev}
              maxPage={maxPage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
