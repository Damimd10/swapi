import React, { useEffect, useState } from 'react';

import { useQuery, useQueryClient } from 'react-query';

import Button from '../Button';
import Planet from '../Planet';
import SearchInput from '../SearchInput';

import { usePlanetContext } from '../../contexts/Planet';
import { COLUMNS, DEFAULT_URL, MAX_ITEMS } from '../../utils/constants';
import getPlanets from '../../api/getPlanets';

const Main = () => {
  const queryClient = useQueryClient();
  const { query = '' } = usePlanetContext();

  const [page, setPage] = useState(DEFAULT_URL);

  const { data, refetch } = useQuery(['planets', { page, query }], () => getPlanets(page, query), {
    keepPreviousData: true,
  });

  useEffect(() => {
    if (data?.next) {
      queryClient.prefetchQuery(['planets', { page, query }], () => getPlanets(page));
    }
  }, [data, page, query, queryClient]);

  if (!data) return null;

  const handleNextPage = () => setPage(data.next ?? '');
  const handlePrevPage = () => setPage(data.previous ?? '');

  const isDisabledPrev = !data.previous;
  const isDisabledNext = !data.next;

  const pageValue = new URLSearchParams(`?${page.split('?').pop()}`).get('page') || 1;
  const maxPage = data.count / MAX_ITEMS;

  return (
    <div className="container mx-auto px-4 sm:px-8">
      <div className="py-8">
        <div>
          <h2 className="text-2xl font-semibold leading-tight">Users</h2>
        </div>
        <SearchInput fetch={refetch} />
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
            <table className="min-w-full leading-normal">
              <thead>
                {COLUMNS.map((name) => (
                  <th
                    key="name"
                    className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                  >
                    {name}
                  </th>
                ))}
              </thead>
              <tbody>
                {data.results.map((planet: any) => (
                  <Planet key={planet.name} {...planet} />
                ))}
              </tbody>
            </table>
            <div className="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between">
              <span className="text-xs xs:text-sm text-gray-900">{`Showing ${pageValue} to ${maxPage}  of ${data.count} Entries`}</span>
              <div className="inline-flex mt-2 xs:mt-0">
                <Button disabled={isDisabledPrev} onClick={handlePrevPage}>
                  Prev
                </Button>
                <Button disabled={isDisabledNext} onClick={handleNextPage}>
                  Next
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
