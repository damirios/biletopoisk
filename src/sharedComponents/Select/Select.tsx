import { FiltersParamsTypes } from "@/types/FiltersTypes";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Portal } from "../Portal/Portal";
import { DropdownMenu } from "./DropdownMenu";
import { SelectOpenButton } from "./SelectOpenButton";

interface SelectPropsType {
    placeholder: string;
    list: {[key in string]: string};
    type: keyof FiltersParamsTypes; // genre, title
}

export function Select({placeholder, list, type}: SelectPropsType) {
    const [isOpen, setIsOpen] = useState(false);
    const rootRef = useRef<HTMLDivElement>(null);

    const router = useRouter();
    const params = useSearchParams();
    const value = params.get(type);

    function openMenu(e: React.MouseEvent<HTMLDivElement>) {
        setIsOpen(true);
    }

    function handleSelectionChange(e: React.MouseEvent<HTMLLIElement>) {
        const value = (e.target as HTMLLIElement).dataset.value;
        if (value !== undefined) {
            if (value === 'none') {
                router.push("/");
            } else {
                router.push(`/?${type}=${value}`);
            }
        }
    }

    useEffect(() => {
        const clickHandler = (e: MouseEvent) => {
            const target = e.target;
            if (target instanceof Node && !rootRef.current?.contains(target)) {
                if (isOpen) {
                    setIsOpen(false);
                }
            }
        }

        window.addEventListener("click", clickHandler);

        return () => {
            window.removeEventListener("click", clickHandler);
        }
    }, [isOpen]);

    return <div ref={rootRef}>
        {/* <GenreContext.Provider value={true}> */}
            <SelectOpenButton placeholder={placeholder} value={value !== null ? list[value] : null} isOpen={isOpen} openMenu={openMenu} />
            {isOpen && <Portal type="dropdowns">
                <DropdownMenu onChange={handleSelectionChange} list={list} parent={rootRef.current} />    
            </Portal>}
        {/* </GenreContext.Provider> */}
    </div>
}