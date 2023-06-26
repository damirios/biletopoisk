'use client';

import { Content } from '@/components/Content'
import { MovieList } from '@/components/MovieList/MovieList'
import { Filters } from '@/components/Filters/Filters'
import { useGetAllMoviesQuery } from '@/store/services/movieApi';
import { getAllGenresFromMovies } from '../utils/getAllGenresFromMovies';
import { createContext } from 'react';
import { GenresType } from '@/utils/data';
import { useParamsObj } from '@/hooks/useParamsObj';
import { MovieType } from '@/types/MovieTypes';
import { FiltersParamsTypes } from '@/types/FiltersTypes';

export const FiltersContext = createContext<{genres: GenresType}>({genres: {}});

function getFilteredMovies(allMovies: MovieType[] | undefined, params: FiltersParamsTypes): MovieType[] | null {
	if (allMovies) {
		const moviesToShow = allMovies.filter(movie => {
			if (params.genre !== null && movie.genre !== params.genre) {
				return false;
			}
			if (params.title !== null && !movie.title.toLowerCase().includes(params.title.trim().toLowerCase())) {
				return false;
			}

			return true;
		});

		return moviesToShow;
	} else {
		return null;
	}
}

export default function Home() {
	const params = useParamsObj();
	const cinemaId = params.cinema === null ? '' : params.cinema;
    const moviesResponse = useGetAllMoviesQuery(cinemaId);
	const moviesToShow = getFilteredMovies(moviesResponse.data, params);

	if (moviesResponse.isLoading) {
		return <Content>
			<div className='loading'>...Загружаем страницу</div>
		</Content>
	}

	if (!moviesResponse.data || moviesResponse.error) {
		return <Content>
			<div className='error'>Не найдена</div>
		</Content>
	}
	const allGenres = getAllGenresFromMovies(moviesResponse.data);

	return <Content>
		<FiltersContext.Provider value={{genres: {none: "Не выбран", ...allGenres}}}>
			<Filters />
			<MovieList movies={moviesToShow} isLoading={moviesResponse.isLoading} error={moviesResponse.error} />
		</FiltersContext.Provider>
	</Content>
}
