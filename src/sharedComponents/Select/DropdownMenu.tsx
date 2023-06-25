import { MouseEvent } from "react";
import cssstyles from "./styles.module.css";


interface DropdownMenuProps {
    parent: HTMLDivElement | null;
    list: {[key in string]: string};
    onChange: (e: MouseEvent<HTMLLIElement>) => void;
}

export function DropdownMenu({parent, list, onChange}: DropdownMenuProps) {
    if (parent === null) {
        return null;
    }

    const {height, y, x, width} = parent.getBoundingClientRect();
    const styles = {
        top: y + height + 4, 
        width,
        left: x
    }

    return <div className={cssstyles.dropdown__box} style={{position: "absolute", ...styles}}>
        <ul className={cssstyles.dropdown__list}>
            {Object.keys(list).map(value => (
                <li key={value} onClick={onChange} data-value={value} className={cssstyles.dropdown__item}>{list[value]}</li>
            ))}
        </ul>
    </div>
}