import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { UserReservations } from '@/components/user/UserReservations';

test('user reservations page shows correct number of reservations', async () => {
  render(<UserReservations userId={1} />);
  const reservationButton = await screen.findByRole('button', {
    name: /purchase more tickets/i,
  });
  expect(reservationButton).toBeInTheDocument();
});
