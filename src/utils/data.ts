export type GenresKeys = "action" | "comedy" | "fantasy" | "horror" | "none";
export type GenresValues = "Боевик" | "Комедия" | "Фэнтези" | "Ужасы" | "Не выбран";
export type GenresType = {[key in GenresKeys]?: GenresValues};

export const genres: GenresType = {
    "action": "Боевик",
    "comedy": "Комедия",
    "fantasy": "Фэнтези",
    "horror": "Ужасы"
};

export const filtersTitlesObj = {
    title: 'Название',
    genre: "Жанр"
};