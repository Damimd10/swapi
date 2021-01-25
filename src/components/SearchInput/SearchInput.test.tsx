import { fireEvent, render, screen } from '@testing-library/react';
import { PlanetProvider } from '@contexts/Planet';

import SearchInput from './SearchInput';

describe('<SearchInput />', () => {
  beforeEach(() => {
    render(
      <PlanetProvider>
        <SearchInput />
      </PlanetProvider>,
    );
  });

  it('should render the search input', () => {
    expect(screen.getByPlaceholderText('Search')).toBeInTheDocument();
  });

  describe('when type into the search input', () => {
    beforeEach(() => {
      const input = screen.getByPlaceholderText('Search');
      fireEvent.change(input, { target: { value: 'tato' } });
    });

    it('should contain "tatoo" in the input', () => {
      const input = screen.getByPlaceholderText('Search');
      expect(input).toHaveValue('tato');
    });
  });
});
