import { Action } from '#models';

import { api } from '../../api';

const eventApi = api.injectEndpoints({
  endpoints: build => ({
    getEvents: build.query<Action[], void>({
      query: () => ({
        url: 'events',
      }),
    }),
  }),
  overrideExisting: true,
});

export const { useGetEventsQuery } = eventApi;
