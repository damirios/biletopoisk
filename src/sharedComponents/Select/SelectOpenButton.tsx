import { MouseEvent } from "react";
import Image from 'next/image';

import styles from "./styles.module.css";

interface Props {
    placeholder: string;
    value: string | null;
    isOpen: boolean;
    openMenu: (e: MouseEvent<HTMLDivElement>) => void;
}

export function SelectOpenButton({placeholder, isOpen, openMenu, value}: Props) {
    return <div className={`${styles.select_button} ${isOpen ? styles.active : ''}`} onClick={openMenu}>
        {value || <span>{placeholder}</span>}
        <Image className={isOpen ? styles.rotate : ""} src="/assets/svg/select_arrow.svg" alt="arrow" width={20} height={20} />
    </div>
}