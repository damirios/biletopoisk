import { useGetAllCinemasQuery } from "@/store/services/movieApi";
import { FiltersParamsTypes } from "@/types/FiltersTypes";
import { getAllCinemasObj } from "@/utils/getAllCinemasObj";
import { Select } from "../Select/Select";

interface SelectServerProps {
    placeholder: string;
    type: keyof FiltersParamsTypes;
}

export function SelectServer({placeholder, type}: SelectServerProps) {
    const cinemasResponse = useGetAllCinemasQuery();
    const cinemasObj = getAllCinemasObj(cinemasResponse.data);

    if (cinemasResponse.isLoading) {
        return <div className="loading_small">
            ...Загружаем данные о кинотеатрах
        </div>
    }

    if (!cinemasResponse.data || cinemasResponse.error) {
        return <div>
            Error
        </div>
    }

    return <Select list={{none: "Не выбран", ...cinemasObj}} type={type} placeholder={placeholder} />
}