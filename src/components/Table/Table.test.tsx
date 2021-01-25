import { render, screen } from '@testing-library/react';

import { PlanetProvider } from '@contexts/Planet';
import Table from './Table';

describe('<Table />', () => {
  beforeEach(() => {
    render(
      <PlanetProvider>
        <Table page={1} />
      </PlanetProvider>,
    );
  });

  it('should render the columns', () => {
    expect(screen.getByText('Planet Name')).toBeInTheDocument();
    expect(screen.getByText('Population')).toBeInTheDocument();
    expect(screen.getByText('Diameter')).toBeInTheDocument();
    expect(screen.getByText('Gravity')).toBeInTheDocument();
    expect(screen.getByText('Climate')).toBeInTheDocument();
  });

  it('should render the loading status', () => {
    expect(screen.getByTestId('loading')).toBeInTheDocument();
  });
});
