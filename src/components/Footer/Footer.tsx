import Link from "next/link";
import { Container } from "../Container/Container";

import styles from "./styles.module.css";

interface Props {

}

export function Footer({}: Props) {
    return <footer className={styles.footer}>
        <Container className={styles.footer__container}>
            <div className={styles.footer__row}>
                <a className={styles.footer__link} href="#">Вопросы-ответы</a>
                <Link className={styles.footer__link} href="/about">О нас</Link>
            </div>
        </Container>
    </footer>
}