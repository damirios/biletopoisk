import Link from "next/link";
import Image from "next/image";
import { useSelector } from "react-redux";

import { selectAllTicketsAmount } from "@/store/slices/selectors";
import { RootState } from "@/store/store";
import styles from "./styles.module.css";

export function CartLink() {
    const allTicketsAmount = useSelector<RootState, number>(state => selectAllTicketsAmount(state));

    return <Link href="/cart" className={styles.header__cart}>
        <div className={styles.cart__count}>{allTicketsAmount}</div>
        <div className={styles.cart__icon}>
            <Image src="/assets/svg/cart.svg" alt="cart-icon" width={32} height={32} />
        </div>
    </Link>
}