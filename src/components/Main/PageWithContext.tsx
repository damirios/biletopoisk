import { GenresType } from "@/utils/data";
import { createContext, ReactNode } from "react";

interface Props {
    children: ReactNode;
    contextValue: {genres: GenresType};
}

export const FiltersContext = createContext<{genres: GenresType}>({genres: {}});

export function PageWithContext({contextValue, children}: Props) {
    return <FiltersContext.Provider value={contextValue}>
        {children}
    </FiltersContext.Provider>
}