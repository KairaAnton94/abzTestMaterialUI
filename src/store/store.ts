import {configureStore} from "@reduxjs/toolkit";

import {usersApi} from "./api/usersApi";
import homeReducer from "./reducers/homeReducer";

export const store = configureStore({
  reducer: {
    [usersApi.reducerPath]: usersApi.reducer,
    homeReducer,
  },
  //для кеширования
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware(({
      serializableCheck: false,
    })).concat([
      usersApi.middleware,
    ]),
});


export type TypeRootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

