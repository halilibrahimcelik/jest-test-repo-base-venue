import { http, HttpResponse } from 'msw';
import { readFakeData } from '../fakeData';

export const handlers = [
  http.get('http://localhost:3000/api/shows/:showId', async ({ params }) => {
    const { fakeShows } = await readFakeData();
    const { showId } = params;

    // index / showId = 0 has seats available in fake data
    // index / showId = 1 has NO seats available
    return HttpResponse.json({ show: fakeShows[Number(showId)] });
  }),
];
