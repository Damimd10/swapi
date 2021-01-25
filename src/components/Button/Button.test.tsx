import { render, screen } from '@testing-library/react';

import Button from './Button';

describe('<Button />', () => {
  beforeEach(() => {
    render(<Button>Custom Button</Button>);
  });

  it('should render one button with the title "Custom Button"', () => {
    expect(screen.getByText('Custom Button')).toBeInTheDocument();
  });
});
