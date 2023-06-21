import styles from "./styles.module.css";

export type  MovieType = {
    id: string;
    title: string;
    posterUrl: string;
    releaseYear: number;
    description: string;
    genre: string;
    rating: number;
    director: string;
    reviewsIds: string[];
}

interface FilmItemProps {
    movie: MovieType;
}

export function FilmItem({movie}: FilmItemProps) {
    return <li className={`${styles.film_list__item} ${styles.film_item}`}>
        <a className={styles.film_item__link} href="#">
            <div className={styles.film_item__poster_box}>
                <img src={movie.posterUrl} alt="movie-poster" />
            </div>
            <div className={styles.film_item__info}>
                <p className={styles.film_item__title}>{movie.title}</p>
                <p className={styles.film_item__genre}>{movie.genre}</p>
            </div>
        </a>
    </li>
}