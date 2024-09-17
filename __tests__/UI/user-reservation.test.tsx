import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { UserReservations } from '@/components/user/UserReservations';

test('user reservations page shows  purchase more button if user has at least one reservation', async () => {
  render(<UserReservations userId={1} />);
  const purchaseMore = await screen.findByRole('button', {
    name: /purchase more tickets/i,
  });
  expect(purchaseMore).toBeInTheDocument();
});

test('user reservations page shows purchase button if user has no reservations', async () => {
  render(<UserReservations userId={0} />);
  const reservationButton = await screen.findByRole('button', {
    name: /purchase tickets/i,
  });
  const purchaseMore = screen.queryByRole('button', {
    name: /purchase more tickets/i,
  });
  expect(purchaseMore).not.toBeInTheDocument();
  expect(reservationButton).toBeInTheDocument();
});
