'use client';

import { createContext, ReactNode, useCallback, useContext, useState } from "react";
import Image from 'next/image';

import styles from './styles.module.css';

interface AccordionProps {
    listIterating?: {[textHeader in string]: string};
    listSimple?: string[];
    pageTitle?: string;
}


type AccordionContextType = {
    switchGroup: (value: string) => void;
    activeGroup: string | null;
} | null;
const AccordionContext = createContext<AccordionContextType>(null);

export function Accordion({listIterating, listSimple, pageTitle}: AccordionProps) {
    const [activeGroup, setActiveGroup] = useState<string | null>(null);
    const switchGroup = useCallback((title: string) => {
        setActiveGroup(activeGroup === title ? null : title);
    }, [activeGroup]);

    return <div className={styles.accordion}>
        <AccordionContext.Provider value={{activeGroup, switchGroup}}>
            {pageTitle && <h1 className={styles.title}>{pageTitle}</h1>}
            {listSimple && listSimple.map((text, index) => <Accordion.Group key={index} title={text} />)}
            {listIterating && Object.keys(listIterating).map(title => {
                return <Accordion.Group key={title} title={title}>
                    <Accordion.Item text={listIterating[title]} />
                </Accordion.Group>
            })}
        </AccordionContext.Provider>
    </div>;
}

interface GroupProps {
    children?: ReactNode;
    title: string;
}

Accordion.Group = function Group({children, title}: GroupProps) {
    const contextObj = useContext(AccordionContext);

    function handleClick() {
        if (contextObj?.switchGroup) {
            contextObj.switchGroup(title);
        }
    }

    const isActive = contextObj?.activeGroup === title;

    return <div className={styles.group}>
        <div onClick={handleClick} className={styles.group__title_box}>
            <h1 className={styles.group__title}>{title}</h1>
            <div>
                <Image className={`${styles.group__icon} ${isActive ? styles._active : ''}`} 
                src={'/assets/svg/arrow_dark.svg'} alt="arrow" width={32} height={32} />
            </div>
        </div>
        {children && isActive && <div>{children}</div>}
    </div>
}

interface ItemProps {
    text: string;
}

Accordion.Item = function Item({text}: ItemProps) {
    return <div className={styles.item}>
        {text}
    </div>
}