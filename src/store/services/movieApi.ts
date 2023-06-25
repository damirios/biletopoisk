import { MovieType, ReviewType } from "@/types/MovieTypes";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const movieApi = createApi({
    reducerPath: "movieApi",
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:3001/api"}),
    endpoints: (builder) => ({
        getAllMovies: builder.query<MovieType[], void>({query: () => "movies"}),
        getMovieById: builder.query<MovieType, string>({query: (movieId) => `movie?movieId=${movieId}`}),
        getMovieReviews: builder.query<ReviewType[], string>({query: (movieId) => `reviews?movieId=${movieId}`})
    })
});


export const { useGetAllMoviesQuery, useGetMovieByIdQuery, useGetMovieReviewsQuery } = movieApi;