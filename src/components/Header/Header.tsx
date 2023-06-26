import Link from "next/link";

import { Container } from "../Container/Container";
import styles from "./styles.module.css";
import { CartLink } from "./CartLink";

interface Props {

}

export function Header({}: Props) {
    return <header className={styles.header}>
        <Container className={styles.header__container}>
            <div className={styles.header__row}>
                <Link className={styles.header__logo} href="/">Билетопоиск</Link>
                <CartLink />
            </div>
        </Container>
    </header>
}