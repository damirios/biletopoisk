import { useDebounce } from "@/hooks/useDebounce";
import { useParamsObj } from "@/hooks/useParamsObj";
import { FiltersParamsTypes } from "@/types/FiltersTypes";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

interface InputProps {
    className: string;
    placeholder: string;
    type: keyof FiltersParamsTypes;
}

function getQueryString(params: FiltersParamsTypes) {
    // есть оба query параметра
    if (params.genre && params.title) {
        return `/?genre=${params.genre}&title=${params.title}`;
    }
    // есть только genre
    if (params.genre) {
        return `/?genre=${params.genre}`;
    }
    // есть только title
    if (params.title) {
        return `/?title=${params.title}`;
    }

    return '/';
}

export function Input({className, placeholder, type}: InputProps) {
    const params = useParamsObj();
    const router = useRouter();

    const [value, setValue] = useState(params[type] || '');
    const debouncedValue = useDebounce(value, 750);

    useEffect(() => {
        router.push(getQueryString({...params, [type]: debouncedValue}));
    }, [debouncedValue]);

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setValue(e.target.value);
    }

    return <input type="text" onChange={handleChange} value={value} placeholder={placeholder} className={className} />
}