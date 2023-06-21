"use client";

import { useState } from "react";

import { FilmItem } from "./FilmItem";
import type {MovieType} from "./FilmItem";
import styles from './styles.module.css';


interface Props {

}

const API_URL = "http://localhost:3001/api";

export function FilmsList({}: Props) {

    const [movies, setMovies] = useState<MovieType[]>([]);

    fetch(API_URL + "/movies")
    .then(result => result.json())
    .then(moviesList => setMovies(moviesList));

    return <div className={`content__film-list ${styles.film_list}`}>
        {movies.length !== 0 ? <ul className={styles.film_list__list}>
            {movies.map((movie) => <FilmItem movie={movie} key={movie.id} />)}
        </ul> : "...Loading"}
    </div>
}