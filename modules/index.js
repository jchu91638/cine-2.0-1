import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import navActiveReducer from "./reducer.nav";

/*  */
import {
  api_trendingAllDay,
  api_discoverMoviesGenres,
} from "../services/services.home";
import { api_movieDetail } from "../services/services.detail";

export const store = configureStore({
  reducer: {
    [api_trendingAllDay.reducerPath]: api_trendingAllDay.reducer,
    [api_discoverMoviesGenres.reducerPath]: api_discoverMoviesGenres.reducer,
    navActivate: navActiveReducer,
    [api_movieDetail.reducerPath]: api_movieDetail.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(api_trendingAllDay.middleware)
      .concat(api_discoverMoviesGenres.middleware)
      .concat(api_movieDetail.middleware),
});

setupListeners(store.dispatch);
