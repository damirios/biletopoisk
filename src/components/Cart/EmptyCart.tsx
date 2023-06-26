import styles from './styles.module.css';

export function EmptyCart() {
    return <div className={styles.cart__empty}>
        Корзина пуста
    </div>
}