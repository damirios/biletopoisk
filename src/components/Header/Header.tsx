import Link from "next/link";
import { Container } from "../Container/Container";

import styles from "./styles.module.css";

interface Props {

}

export function Header({}: Props) {
    return <header className={styles.header}>
        <Container>
            <div className={styles.header__row}>
                <Link className={styles.header__logo} href="/">Билетопоиск</Link>
                <a href="#" className={styles.header__cart}>
                    <div className={styles.cart__count}>5</div>
                    <div className={styles.cart__icon}>
                        <img src="/assets/svg/cart.svg" alt="cart-icon" />
                    </div>
                </a>
            </div>
        </Container>
    </header>
}