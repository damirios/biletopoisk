import { useParamsObj } from "@/hooks/useParamsObj";
import { FiltersParamsTypes } from "@/types/FiltersTypes";
import { filtersTitlesObj, genres, GenresValues } from "@/utils/data";

function getQuery(params: FiltersParamsTypes) {
    let query = '';
    // не знаю, почему TS не может взять тип key - нужен костыль
    let key: keyof typeof params;
    for (key in params) {
        let value = params[key];
        if (value !== null) {
            if (query.length !== 0) {
                query += ', ';
            }
            
            query += `${filtersTitlesObj[key]}: "${value}"`;
        }
    }
    return query;
}

export function EmptyMovieList() {
    const params = useParamsObj();

    return <div>
        {`По запросу "${getQuery(params)}" фильмов не найдено`}
    </div>
}