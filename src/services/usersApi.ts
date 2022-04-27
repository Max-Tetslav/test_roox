import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IUser } from 'models/storeTypes';

export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com',
  }),
  endpoints: (builder) => ({
    getUsersList: builder.query<IUser[], string>({
      query: () => `/users`,
    }),
  }),
});

export default usersApi;
