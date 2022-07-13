import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

import {IArgumentUsers, IUsers} from "../../models/IUsers";
import {IPositions} from "../../models/IPositions";
import {IToken} from "../../models/IToken";


export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://frontend-test-assignment-api.abz.agency/api/v1/",
  }),
  tagTypes:["Users"],
  endpoints(build) {
    return {
      getUsers: build.query<IUsers, IArgumentUsers>({
        query: ({page, count}) => `users?page=${page}&count=${count}`,
        providesTags:result => ["Users"],
      }),
      getPositions: build.query<IPositions, null>({
        query: () => "positions",
      }),
      getToken: build.query<IToken, null>({
        query: () => "token",
      }),
      createUser: build.mutation({
        query: ({user, token}) => ({
          url: "users",
          method: "POST",
          body: user,
          headers: {
            "Token": token,
          },
        }),
        invalidatesTags:["Users"],
      }),
    };
  },
});

export const {
  useGetUsersQuery,
  useGetTokenQuery,
  useGetPositionsQuery,
  useCreateUserMutation,
} = usersApi;