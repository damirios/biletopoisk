import { ReactNode } from "react";
import { Container } from "./Container/Container";


export function Content({children}: {children: ReactNode}) {
    return <div className="content">
        <Container>
            <div className="content__row">
                {children}
            </div>
        </Container>
    </div>
}