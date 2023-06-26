import { useDebounce } from "@/hooks/useDebounce";
import { useParamsObj } from "@/hooks/useParamsObj";
import { FiltersParamsTypes } from "@/types/FiltersTypes";
import { getQueryString } from "@/utils/getQueryString";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

interface InputProps {
    className: string;
    placeholder: string;
    type: keyof FiltersParamsTypes;
}

export function Input({className, placeholder, type}: InputProps) {
    const params = useParamsObj();
    const router = useRouter();
    const [value, setValue] = useState(params[type] || '');
    const debouncedValue = useDebounce(value, 750);

    useEffect(() => {
        router.push(getQueryString({...params, [type]: debouncedValue}));
    }, [debouncedValue]);

    // чтобы значение инпута обнулилось, при переходе к главной (клик на лого)
    useEffect(() => {
        if (params.title === '') {
            setValue(params.title);
        }
    }, [params.title]);

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setValue(e.target.value);
    }

    return <input type="text" onChange={handleChange} value={value} placeholder={placeholder} className={className} />
}