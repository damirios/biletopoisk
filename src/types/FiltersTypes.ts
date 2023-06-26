export type FiltersParamsTypes = {
    genre: string | null;
    title: string | null;
    cinema: string | null;
};

export type CinemaType = {
    id: string;
    name: string;
    movieIds: string[];
};