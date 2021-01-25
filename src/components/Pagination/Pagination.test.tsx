import { fireEvent, render, screen } from '@testing-library/react';

import Pagination from './Pagination';

const defaultProps = {
  currentPage: 1,
  handleNextPage: jest.fn(),
  handlePrevPage: jest.fn(),
  isDisabledNext: false,
  isDisabledPrev: false,
  maxPage: 6,
};

describe('<Pagination />', () => {
  beforeEach(() => {
    render(<Pagination {...defaultProps} />);
  });

  it('should render the text "Showing Page 1 of 6"', () => {
    expect(screen.getByText('Showing Page 1 of 6'));
  });

  it('should render the Previous button', () => {
    expect(screen.getByRole('button', { name: /Prev/i })).toBeInTheDocument();
  });

  it('should render the Next button', () => {
    expect(screen.getByRole('button', { name: /Next/i })).toBeInTheDocument();
  });

  describe('when click on previous button', () => {
    it('should call handlePrevPave function once', () => {
      const prevButton = screen.getByRole('button', { name: /Prev/i });

      fireEvent.click(prevButton);

      expect(defaultProps.handlePrevPage).toHaveBeenCalledTimes(1);
    });
  });

  describe('when click on next button', () => {
    it('should call handleNextPage function once', () => {
      const nextButton = screen.getByRole('button', { name: /Next/i });

      fireEvent.click(nextButton);

      expect(defaultProps.handleNextPage).toHaveBeenCalledTimes(1);
    });
  });
});
