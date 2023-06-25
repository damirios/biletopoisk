import { MovieType } from '@/types/MovieTypes';
import { genres, GenresType } from './data';

export function getAllGenresFromMovies(movies: MovieType[]) {
    let genresObj: GenresType = {};
    for (let movie of movies) {
        if (genresObj[movie.genre] === undefined) {
            genresObj[movie.genre] = genres[movie.genre];
        }
    }

    return genresObj;
}