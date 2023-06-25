import { MovieType } from "@/types/MovieTypes";
import React from "react";

import { MovieBlock } from "./MovieInfoBlock";
import Reviews from "./Reviews";
import styles from './styles.module.css';

interface MovieFullPageProps {
    movie: MovieType;
}

const MovieFullPage = ({movie}: MovieFullPageProps) => {
    return <div className={styles.movie_page}>
        <MovieBlock movie={movie} />
        <Reviews movieId={movie.id} />
    </div>
};

export default MovieFullPage;
