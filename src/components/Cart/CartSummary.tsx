import styles from './styles.module.css';

export function CartSummary({ticketsAmount}: {ticketsAmount: number}) {
    return <div className={styles.cart__summary}>
        <div>Итого билетов</div>
        <div>{ticketsAmount}</div>
    </div>
}