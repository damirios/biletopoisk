import { genres } from "@/utils/data";

export type MovieType = {
    id: string;
    title: string;
    posterUrl: string;
    releaseYear: number;
    description: string;
    genre: keyof typeof genres;
    rating: number;
    director: string;
    reviewsIds: string[];
};

export type ReviewType = {
    id: string;
    name: string;
    rating: number;
    text: string;
    avatar?: string;
};