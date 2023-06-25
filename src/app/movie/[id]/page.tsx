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
        return <Content>...Loading</Content>
    }

    if (!data || error) {
        return <div>Not Found</div>;
    }
    
    return <Content>
        <MovieFullPage movie={data} />
    </Content>
}