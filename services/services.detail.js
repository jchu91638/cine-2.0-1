import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_KEY } from "../constants/common";
import { MOVIE_DETAIL } from "../constants/apiLinks";

export const api_movieDetail = createApi({
    reducerPath : "movieDetail",
    baseQuery : fetchBaseQuery({ baseUrl : MOVIE_DETAIL}),
    endpoints : (builder) => ({
        getMovieDetail : builder.query({
            query : (movieId) => `${movieId}?api_key=${API_KEY}&append_to_response=videos,releases,content_ratings`
        })
    })
})

export const { useGetMovieDetailQuery } = api_movieDetail;