import { render, screen } from '@testing-library/react';

import Loading from './Loading';

describe('<Loading />', () => {
  beforeEach(() => {
    render(<Loading />);
  });

  it('should render a button with the custom class names loader and ease-linear', () => {
    expect(screen.queryByTestId('loading')).toHaveClass('loader');
    expect(screen.queryByTestId('loading')).toHaveClass('ease-linear');
  });
});
