import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const usersApi = createApi({
    reducerPath: "usersApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/" }),
    endpoints: (build) => ({
      getAllUsers: build.query({
        query: () => `users`,
      }),
    }),
})

export const { useGetAllUsersQuery } = usersApi;