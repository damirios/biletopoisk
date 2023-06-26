import Link from "next/link";
import Image from 'next/image';

import { MovieType } from "@/types/MovieTypes";
import { genres } from "@/utils/data";
import styles from "./styles.module.css";
import { CartCounter } from "@/sharedComponents/CartCounter/CartCounter";

interface MovieItemProps {
    movie: MovieType;
    deletable?: boolean;
}

export function MovieItem({movie, deletable}: MovieItemProps) {
    return <li className={`${styles.film_list__item || ''} ${styles.film_item}`}>
        <CartCounter className={styles.film_item__counter} movieId={movie.id} deletable={deletable} />
            <div className={styles.film_item__poster_box}>
                <Image src={movie.posterUrl} width={100} height={120} alt='movie-poster' />
            </div>
            <div className={styles.film_item__info}>
                <Link className={styles.film_item__link} href={`/movie/${movie.id}`}>
                    <p className={styles.film_item__title}>{movie.title}</p>
                </Link>
                <p className={styles.film_item__genre}>{genres[movie.genre]}</p>
            </div>
    </li>
}