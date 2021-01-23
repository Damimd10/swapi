import React from 'react';

import Button from '../Button';

type PaginationProps = {
  currentPage: number;
  handleNextPage: () => void;
  handlePrevPage: () => void;
  isDisabledNext: boolean;
  isDisabledPrev: boolean;
  maxPage: number;
};

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  handleNextPage,
  handlePrevPage,
  isDisabledNext = false,
  isDisabledPrev = false,
  maxPage,
}) => (
  <div className="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between">
    <span className="text-xs xs:text-sm text-gray-900">{`Showing Page ${currentPage} of ${maxPage}`}</span>
    <div className="inline-flex mt-2 xs:mt-0">
      <Button disabled={isDisabledPrev} onClick={handlePrevPage}>
        Prev
      </Button>
      <Button disabled={isDisabledNext} onClick={handleNextPage}>
        Next
      </Button>
    </div>
  </div>
);

export default Pagination;
