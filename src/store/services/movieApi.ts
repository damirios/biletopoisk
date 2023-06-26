import { CinemaType } from "@/types/FiltersTypes";
import { MovieType, ReviewType } from "@/types/MovieTypes";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const movieApi = createApi({
    reducerPath: "movieApi",
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:3001/api"}),
    endpoints: (builder) => ({
        getAllMovies: builder.query<MovieType[], string>({query: (cinemaId) => `/movies${cinemaId === '' ? '' : `?cinemaId=${cinemaId}`}`}),
        getMovieById: builder.query<MovieType, string>({query: (movieId) => `/movie?movieId=${movieId}`}),
        getMovieReviews: builder.query<ReviewType[], string>({query: (movieId) => `/reviews?movieId=${movieId}`}),
        getAllCinemas: builder.query<CinemaType[], void>({query: () => '/cinemas'})
    })
});


export const { useGetAllMoviesQuery, useGetMovieByIdQuery, 
    useGetMovieReviewsQuery, useGetAllCinemasQuery
} = movieApi;