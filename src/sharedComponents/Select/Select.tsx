import { useParamsObj } from "@/hooks/useParamsObj";
import { FiltersParamsTypes } from "@/types/FiltersTypes";
import { getQueryString } from "@/utils/getQueryString";
import { useRouter } from "next/navigation";
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
    const params = useParamsObj();
    const value = params[type];

    function openMenu(e: React.MouseEvent<HTMLDivElement>) {
        setIsOpen(true);
    }

    function handleSelectionChange(e: React.MouseEvent<HTMLLIElement>) {
        const curValue = (e.target as HTMLLIElement).dataset.value;

        if (curValue !== undefined) {
            if (curValue === 'none') {
                router.push(getQueryString({ ...params, [type]: null}));
            } else {
                router.push(getQueryString({...params, [type]: curValue}));
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
        <SelectOpenButton placeholder={placeholder} value={value !== null ? list[value] : null} isOpen={isOpen} openMenu={openMenu} />
        {isOpen && <Portal type="dropdowns">
            <DropdownMenu onChange={handleSelectionChange} list={list} parent={rootRef.current} />    
        </Portal>}
    </div>
}