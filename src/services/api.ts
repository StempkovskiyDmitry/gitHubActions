import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = 'https://api.github.com/users/StempkovskiyDmitry/';

const api = createApi({
  reducerPath: 'gitHubApi',
  baseQuery: fetchBaseQuery({
    baseUrl,
    headers: { auth: `${process.env.AUTH_TOKEN}` },
  }),
  endpoints: () => ({}),
});

export { api };
