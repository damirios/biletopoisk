import { useGetMovieReviewsQuery } from "@/store/services/movieApi";
import React from "react";
import SingleReview from "./SingleReview";

import styles from './styles.module.css';

export const Reviews = ({movieId}: {movieId: string}) => {
    const {data, isLoading, error} = useGetMovieReviewsQuery(movieId);
    
    if (isLoading) {
        return <div className="loading_small">...Загружаем отзывы</div>
    }    

    if (!data || error) {
        return <div className="error">Не найдено</div>
    }

    return (
        <div className={styles.reviews}>
            <ul className={styles.reviews__list}>
                {data.map(review => <SingleReview key={review.id} review={review} />)}
            </ul>
        </div>
    )
};

export default Reviews;
