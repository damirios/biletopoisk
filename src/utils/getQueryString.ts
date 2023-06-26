import { FiltersParamsTypes } from "@/types/FiltersTypes";

export function getQueryString(params: FiltersParamsTypes) {
    let queryString = '';
    
    let paramKey: keyof typeof params;
    for (paramKey in params) {
        if (params[paramKey] === null || params[paramKey]?.length === 0) {
            continue;
        }

        if (queryString.length === 0) {
            queryString += `/?${paramKey}=${params[paramKey]}`;
        } else {
            queryString += `&${paramKey}=${params[paramKey]}`;
        }
    }

    return queryString.length === 0 ? '/' : queryString;
}