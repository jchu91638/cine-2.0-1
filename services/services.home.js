import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_KEY } from "../constants/common";
import { TRENDING_ALL_DAY, DISCOVER_MOVIES_GENRES } from "../constants/apiLinks";

export const api_trendingAllDay = createApi({
  reducerPath: "trendingAllDay",
  baseQuery: fetchBaseQuery({ baseUrl: TRENDING_ALL_DAY }),
  endpoints: (builder) => ({
    getTrendingAllDay: builder.query({
      query: () => ``,
    }),
  }),
});

export const api_discoverMoviesGenres  = createApi({
  reducerPath: "discoverMoviesGenres",
  baseQuery : fetchBaseQuery({ baseUrl : DISCOVER_MOVIES_GENRES}),
  endpoints : (builder) => ({
    getDiscoverMoviesGenres : builder.query({
      query: (genreId) => `movie?api_key=${API_KEY}&with_genres=${genreId}`
    })
  })
})

export const { useGetTrendingAllDayQuery } = api_trendingAllDay;
export const { useGetDiscoverMoviesGenresQuery } = api_discoverMoviesGenres;
