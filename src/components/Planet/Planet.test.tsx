import { render, screen } from '@testing-library/react';

import Planet from './Planet';

const defaultProps = {
  climate: 'Arid',
  diameter: '98',
  gravity: '1.5 standard',
  name: 'Tatooine',
  population: '200000',
};

describe('<Planet />', () => {
  beforeEach(() => {
    render(
      <table>
        <Planet {...defaultProps} />
      </table>,
    );
  });

  it('should render the name of the planet', () => {
    expect(screen.getByText('Tatooine')).toBeInTheDocument();
  });

  it('should render the population formatted', () => {
    expect(screen.getByText('200,000')).toBeInTheDocument();
  });

  it('should render the diameter formatted', () => {
    expect(screen.getByText('98m')).toBeInTheDocument();
  });

  it('should render the climate', () => {
    expect(screen.getByText('Arid')).toBeInTheDocument();
  });
});
