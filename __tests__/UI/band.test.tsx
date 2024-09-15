import { render, screen } from '@testing-library/react';
import BandPage from '@/pages/bands/[bandId]';
import { readFakeData } from '../__mocks__/fakeData';
test('band component displays correctly band information', async () => {
  const { fakeBands } = await readFakeData();
  render(<BandPage band={fakeBands[0]} error={null} />);

  const heading = screen.getByRole('heading', {
    name: /the wandering bunnies/i,
  });
  expect(heading).toBeInTheDocument();
});

test('band component displays error message when band data is null', async () => {
  render(<BandPage band={null} error='Band not found' />);

  const error = screen.getByRole('heading', {
    name: /Could not retrieve band data: Band not found/i,
  });
  expect(error).toBeInTheDocument();
});

test('band component displays loading spinner when band data is null', async () => {
  render(<BandPage band={null} error={null} />);

  const spinner = screen.getByRole('alert');
  expect(spinner).toBeInTheDocument();
});
