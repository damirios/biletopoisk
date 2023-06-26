import { CinemaType } from "@/types/FiltersTypes";

export function getAllCinemasObj(cinemas: CinemaType[] | undefined) {
    if (cinemas === undefined) {
        return {};
    }

    let cinemasObj: {[id in string]: string} = {};
    for (let cinema of cinemas) {
        cinemasObj[cinema.id] = cinema.name;
    }

    return cinemasObj;
}