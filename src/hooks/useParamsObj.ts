import { useSearchParams } from "next/navigation";

export function useParamsObj() {
    const params = useSearchParams();
    const genre = params.get("genre");
    const title = params.get("title");
    return {genre, title};
}