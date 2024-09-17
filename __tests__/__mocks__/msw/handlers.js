import { http, HttpResponse } from 'msw';
import { readFakeData } from '../fakeData';
import { fakeUserReservations } from '../fakeData/userReservations';
import { userShowFakeData } from '../fakeData/userShow';

export const handlers = [
  http.get('http://localhost:3000/api/shows/:showId', async ({ params }) => {
    console.log('params', params);

    // const { fakeShows } = await readFakeData();
    const { showId } = params;
    // index / showId = 0 has seats available in fake data
    // index / showId = 1 has NO seats available
    return HttpResponse.json({ show: userShowFakeData[Number(showId)] });
  }),
  http.get(
    'http://localhost:3000/api/users/:userId/reservations',
    async ({ params, request, cookies }) => {
      const { userId } = params;
      if (userId === '1') {
        return HttpResponse.json({
          userReservations: fakeUserReservations,
        });
      } else if (userId === '0') {
        return HttpResponse.json({
          userReservations: [],
        });
      }
    }
  ),
];
