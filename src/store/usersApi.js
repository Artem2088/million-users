import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const usersApi = createApi({
    reducerPath: "usersApi",
    tagTypes: ['Users'],
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/" }),
    endpoints: (build) => ({
      getAllUsers: build.query({
        query: () => `users`,
        providesTags: (result) => result
          ? [
              ...result.map(({ id }) => ({ type: 'Users', id })),
              { type: 'Users', id: 'LIST' },
            ]
          : [{ type: 'Users', id: 'LIST' }],
      }),
      getUser: build.query({
        query: (id) => `users/${id}`,
        invalidatesTags: [{type: 'Users', id: 'Lists'}] 
      }),
    }),
})

export const { useGetAllUsersQuery, useGetUserQuery } = usersApi;