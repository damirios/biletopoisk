"use client";

import { FilmItem } from "./MovieItem";
import styles from './styles.module.css';
import { MovieType } from "@/types/MovieTypes";
import { useParamsObj } from "@/hooks/useParamsObj";
import { FiltersParamsTypes } from "@/types/FiltersTypes";
import { filtersTitlesObj } from "@/utils/data";


interface Props {
    isLoading: boolean;
    error: any;
    movies: MovieType[];
}

function getQuery(params: FiltersParamsTypes) {
    let query = '';
    // не знаю, почему TS не может взять тип key - нужен костыль
    let key: keyof typeof params;
    for (key in params) {
        const value = params[key];
        if (value !== null) {
            query += `${filtersTitlesObj[key]}: ${value}`;
        }
    }
    return query;
}

function EmptyMovieList() {
    const params = useParamsObj();

    return <div>
        {`По запросу "${getQuery(params)}" фильмов не найдено`}
    </div>
}

export function MovieList({isLoading, error, movies}: Props) {
    if (isLoading) {
        return <div>...Loading</div>
    }

    if (!movies || error) {
        return <div>Not Found</div>;
    }

    return <div className={`content__film-list ${styles.film_list}`}>
        {movies.length !== 0 ? <ul className={styles.film_list__list}>
            {movies.map((movie) => <FilmItem movie={movie} key={movie.id} />)}
        </ul> : <EmptyMovieList />}
    </div>
}