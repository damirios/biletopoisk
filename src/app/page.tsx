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
    const {data, isLoading, error} = useGetAllMoviesQuery();
	const params = useParamsObj();
	const moviesToShow = getFilteredMovies(data, params);

	if (isLoading) {
		return <Content>
			...Loading!
		</Content>
	}

	if (!data || error) {
		return <Content>
			Not Found
		</Content>
	}
	const allGenres = getAllGenresFromMovies(data);

	return <Content>
		<FiltersContext.Provider value={{genres: {none: "Не выбран", ...allGenres}}}>
			<Filters />
			<MovieList movies={moviesToShow || []} isLoading={isLoading} error={error} />
		</FiltersContext.Provider>
	</Content>
}
