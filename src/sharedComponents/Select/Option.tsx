export type OptionType = {
    title: string;
    value: string;
}

export type OptionProps = {
    option: OptionType;
    onClick: (value: OptionType["value"]) => void;
}

export function Option({option, onClick}: OptionProps) {

    const handleClick = (value: OptionType["value"]) => {
        return () => onClick(value);
    }

    return <li onClick={handleClick(option.value)}>
        {option.title}
    </li>
}