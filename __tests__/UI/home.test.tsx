import { cleanup, render, screen } from '@testing-library/react';

import Home from '@/pages';
afterEach(() => cleanup());
test('page has correct heading', () => {
  render(<Home />);
  const heading = screen.getByRole('heading', {
    name: 'Welcome to Popular Concert Venue',
  });
  expect(heading).toBeInTheDocument();
});
test('page has a correct image', () => {
  render(<Home />);

  const image = screen.getByAltText(
    'Concert goer with hands in the shape of a heart'
  );
  expect(image).toBeInTheDocument();
});
