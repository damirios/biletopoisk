"use client";

import { MovieItem } from "./MovieItem";
import styles from './styles.module.css';
import { MovieType } from "@/types/MovieTypes";
import { EmptyMovieList } from "./EmptyMovieList";
import { EmptyCart } from "../Cart/EmptyCart";


interface Props {
    isLoading: boolean;
    error: any;
    movies: MovieType[] | null;
    inCart?: boolean;
}

export function MovieList({isLoading, error, movies, inCart}: Props) {
    if (isLoading) {
        return <div className="loading_small">...Загружаем список</div>
    }

    if (!movies || error) {
        return <div className="error">Не найдено</div>;
    }

    return <div className={`content__film-list ${styles.film_list}`}>
        {movies.length !== 0 ? <ul className={styles.film_list__list}>
            {movies.map((movie) => <MovieItem movie={movie} key={movie.id} deletable={inCart} />)}
        </ul> : inCart ? <EmptyCart /> : <EmptyMovieList />}
    </div>
}