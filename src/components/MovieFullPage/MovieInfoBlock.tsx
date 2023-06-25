import { MovieType } from '@/types/MovieTypes';
import { genres } from '@/utils/data';
import Image from 'next/image';

import styles from './styles.module.css';

const CartCounter = ({className}: {className: string}) => {
    return <div className={className}>
        <button>-</button>
        <span>0</span>
        <button>+</button>
    </div>
}

const SingleParagraph = ({prop, value}: {prop: string, value: string | number}) => {
    return <p className={styles.movie__paragraph}>
        <span>{prop}: </span>{value}
    </p>
}

export const MovieBlock = ({movie}: {movie: MovieType}) => {
    return <div className={styles.movie_block}>
        <div className={styles.movie__image_box}>
            <Image src={movie.posterUrl} alt="movie_poster" width={400} height={500} />
        </div>
        <div className={styles.movie__info}>
            <CartCounter className={styles.movie__counter} />
            <div className={styles.movie__title}>{movie.title}</div>
            <SingleParagraph value={genres[movie.genre]} prop={"Жанр"} />
            <SingleParagraph value={movie.releaseYear} prop={"Год выпуска"} />
            <SingleParagraph value={movie.rating} prop={"Рейтинг"} />
            <SingleParagraph value={movie.director} prop={"Режиссёр"} />
            <div className={styles.movie__description}>
                <p>Описание: </p>
                <div>{movie.description}</div>
            </div>
        </div>
    </div>
}