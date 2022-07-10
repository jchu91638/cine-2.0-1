import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import navActiveReducer from './reducer.nav';

/*  */
import { api_trendingAllDay, api_discoverMoviesGenres } from "../services/services.home";

export const store = configureStore({
    reducer : {
        [api_trendingAllDay.reducerPath] : api_trendingAllDay.reducer,
        [api_discoverMoviesGenres.reducerPath] : api_discoverMoviesGenres.reducer,
        navActivate : navActiveReducer,
        
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(api_trendingAllDay.middleware).concat(api_discoverMoviesGenres.middleware),
});

setupListeners(store.dispatch)