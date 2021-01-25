import { fireEvent, render, screen } from '@testing-library/react';

import Column from './Column';

const defaultProps = {
  name: 'Custom Column',
  onClick: jest.fn(),
  sort: false,
};

describe('<Column />', () => {
  let rerender: any;

  beforeEach(() => {
    ({ rerender } = render(<Column {...defaultProps} />));
  });

  it('should render the column name', () => {
    expect(screen.getByText('Custom Column')).toBeInTheDocument();
  });

  describe('when click on the column', () => {
    beforeEach(() => {
      fireEvent.click(screen.getByText('Custom Column'));
    });

    it('should call to onClick prop once with the name', () => {
      expect(defaultProps.onClick).toHaveBeenCalledTimes(1);
      expect(defaultProps.onClick).toHaveBeenCalledWith('Custom Column');
    });
  });

  describe('when the sort type is "ASC"', () => {
    beforeEach(() => {
      rerender(<Column {...defaultProps} sort="ASC" />);
    });

    it('should render the ASC sort icon', () => {
      expect(screen.getByTestId('asc-icon')).toBeInTheDocument();
    });
  });

  describe('when the sort type is "DESC"', () => {
    beforeEach(() => {
      rerender(<Column {...defaultProps} sort="DESC" />);
    });

    it('should render the DESC sort icon', () => {
      expect(screen.getByTestId('desc-icon')).toBeInTheDocument();
    });
  });
});
