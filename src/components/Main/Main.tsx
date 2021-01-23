import React, { useEffect, useState } from 'react';

import { useQuery } from 'react-query';

import Pagination from '../Pagination';
import SearchInput from '../SearchInput';
import Table from '../Table';

import { usePlanetContext } from '../../contexts/Planet';
import { DEFAULT_URL, MAX_ITEMS, START_PAGE } from '../../utils/constants';
import sorting from '../../utils/sorting';
import getPlanets, { IPlanet } from '../../api/getPlanets';

const Main = () => {
  const { query = '', sort } = usePlanetContext();
  const [page, setPage] = useState(START_PAGE);
  const [planets, setPlanets] = useState<IPlanet[]>([]);

  const [url, setUrl] = useState(DEFAULT_URL);

  const { data, refetch } = useQuery(['planets', { url, query }], () => getPlanets(url, query));

  useEffect(() => {
    if (!data) return;

    setPlanets([...planets, ...data.results]);

    if (data?.next) {
      setUrl(data.next);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  useEffect(() => {
    const r = sorting(planets, sort);
    setPlanets(r);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sort]);

  if (!data || data.next) return null;

  const MAX_PAGE = data.count / MAX_ITEMS;

  const handleNextPage = () => {
    if (page >= MAX_PAGE) return;

    setPage(page + 1);
  };

  const handlePrevPage = () => {
    if (page <= 1) return;

    setPage(page - 1);
  };

  const isDisabledPrev = page === START_PAGE;
  const isDisabledNext = page === MAX_PAGE;

  const calculateStart = () => {
    if (page === 1) return 0;

    return (page - 1) * MAX_ITEMS;
  };

  console.log('HERE', planets);

  // const planetsToShow = planets.slice(calculateStart(), page * MAX_ITEMS);

  return (
    <div className="container mx-auto px-4 sm:px-8">
      <div className="py-8">
        <div>
          <h2 className="text-2xl font-semibold leading-tight">Planets</h2>
        </div>
        <SearchInput fetch={refetch} />
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
            <Table data={planets.slice(calculateStart(), page * MAX_ITEMS)} />
            <Pagination
              currentPage={page}
              handleNextPage={handleNextPage}
              handlePrevPage={handlePrevPage}
              isDisabledNext={isDisabledNext}
              isDisabledPrev={isDisabledPrev}
              maxPage={MAX_PAGE}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
