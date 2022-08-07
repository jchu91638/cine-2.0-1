import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import navActiveReducer from "./reducer.nav";
import popUpReducer from './reducer.popUp';

/*  */
import {
  api_trendingAllDay,
  api_discoverMoviesGenres,
} from "../services/services.home";
import { api_movieDetail, api_seriesDetail } from "../services/services.detail";

export const store = configureStore({
  reducer: {
    [api_trendingAllDay.reducerPath]: api_trendingAllDay.reducer,
    [api_discoverMoviesGenres.reducerPath]: api_discoverMoviesGenres.reducer,
    navActivate: navActiveReducer,
    popUp : popUpReducer,
    [api_movieDetail.reducerPath]: api_movieDetail.reducer,
    [api_seriesDetail.reducerPath] : api_seriesDetail.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(api_trendingAllDay.middleware)
      .concat(api_discoverMoviesGenres.middleware)
      .concat(api_movieDetail.middleware)
      .concat(api_seriesDetail.middleware)
});

setupListeners(store.dispatch);
