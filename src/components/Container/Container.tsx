import { ReactNode } from "react";

import styles from "./styles.module.css";

export function Container({children, className}: {className?: string, children: ReactNode}) {
    return <div className={`${styles.container} ${className || ''}`}>
        {children}
    </div>
}