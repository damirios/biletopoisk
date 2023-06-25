import React from "react";
import Image from "next/image";

import { ReviewType } from "@/types/MovieTypes";
import styles from './styles.module.css';

interface ReviewProps {
    review: ReviewType;
}


const SingleReview = ({review}: ReviewProps) => {
    const defaultAvatar = "/assets/svg/default_avatar.svg";

    return (
        <li className={styles.review}>
            <div className={styles.review__avatar_box}>
                <Image src={review.avatar || defaultAvatar} alt={"reviewer_avatar"} width={32} height={32} />
            </div>
            <div className={styles.review__info_box}>
                <div className={styles.reviewer__info}>
                    <div className={styles.reviewer__name}>{review.name}</div>
                    <div className={styles.reviewer__rating}>Оценка: <span>{review.rating}</span></div>
                </div>
                <div className={styles.review__text}>{review.text}</div>
            </div>
        </li>
    )
};

export default SingleReview;
