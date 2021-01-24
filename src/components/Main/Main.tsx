import React, { useState } from 'react';

import Pagination from '../Pagination';
import SearchInput from '../SearchInput';
import Table from '../Table';

import { usePlanetContext } from '../../contexts/Planet';
import { START_PAGE } from '../../utils/constants';

const Main = () => {
  const { maxPage } = usePlanetContext();
  const [page, setPage] = useState(START_PAGE);

  const handleNextPage = () => {
    if (page >= maxPage) return;

    setPage(page + 1);
  };

  const handlePrevPage = () => {
    if (page <= 1) return;

    setPage(page - 1);
  };

  const isDisabledPrev = page === START_PAGE;
  const isDisabledNext = page === maxPage;

  /* const calculateStart = () => {
    if (page === 1) return 0;

    return (page - 1) * MAX_ITEMS;
  }; */

  return (
    <div className="container mx-auto px-4 sm:px-8">
      <div className="py-8">
        <div>
          <h2 className="text-2xl font-semibold leading-tight">Planets</h2>
        </div>
        <SearchInput />
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
            <Table page={page} />
            <Pagination
              currentPage={page}
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
