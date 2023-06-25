import { MovieType } from "@/types/MovieTypes";
import { genres } from "@/utils/data";
import Link from "next/link";
import styles from "./styles.module.css";

interface MovieItemProps {
    movie: MovieType;
}

export function FilmItem({movie}: MovieItemProps) {

    return <li className={`${styles.film_list__item} ${styles.film_item}`}>
        <Link className={styles.film_item__link} href={`/movie/${movie.id}`}>
            <div className={styles.film_item__poster_box}>
                <img src={movie.posterUrl} alt="movie-poster" />
            </div>
            <div className={styles.film_item__info}>
                <p className={styles.film_item__title}>{movie.title}</p>
                <p className={styles.film_item__genre}>{genres[movie.genre]}</p>
            </div>
        </Link>
    </li>
}