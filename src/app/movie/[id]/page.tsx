'use client';

import { Content } from "@/components/Content";
import MovieFullPage from "@/components/MovieFullPage/MovieFullPage";
import { useGetMovieByIdQuery } from "@/store/services/movieApi";

interface MovieProps {
    params: {id: string};
}

export default function Movie({params}: MovieProps) {
    const {data, isLoading, error} = useGetMovieByIdQuery(params.id);

    if (isLoading) {
        return <Content><div className="loading">...Загружаем страницу фильма</div></Content>
    }

    if (!data || error) {
        return <div className="error">Произошла ошибка!</div>;
    }
    
    return <Content>
        <MovieFullPage movie={data} />
    </Content>
}