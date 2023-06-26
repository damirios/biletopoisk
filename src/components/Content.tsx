import { ReactNode } from "react";
import { Container } from "./Container/Container";


export function Content({children, className}: {children: ReactNode, className?: string}) {
    return <div className="content">
        <Container>
            <div className={`content__row ${className || ''}`}>
                {children}
            </div>
        </Container>
    </div>
}