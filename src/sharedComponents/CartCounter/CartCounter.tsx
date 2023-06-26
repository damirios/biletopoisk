import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { cartActions, MAX_ITEM_AMOUNT_IN_CART, MIN_ITEM_AMOUNT_IN_CART } from '@/store/slices/cartSilce';
import { selectMovieTicketsAmount } from '@/store/slices/selectors';
import { RootState } from '@/store/store';
import { Portal } from '../Portal/Portal';
import { DeletionModalWindow } from './DeletionModalWindow';
import styles from './styles.module.css';

interface Props {
    className?: string;
    movieId: string;
    deletable?: boolean;
}

export const CartCounter = ({className, movieId, deletable}: Props) => {
    const amount = useSelector<RootState, number>(state => selectMovieTicketsAmount(state, movieId));
    const dispatch = useDispatch();

    const [isModalOpen, setIsModalOpen] = useState(false);

    function deleteTicket() {
        dispatch(cartActions.delete(movieId));
        setIsModalOpen(false);
    }

    function onDecrementClick() {
        if (amount === MIN_ITEM_AMOUNT_IN_CART && deletable) {
            setIsModalOpen(true);
        } else {
            dispatch(cartActions.decrement(movieId));
        }
    }

    function onIncrementClick() {
        dispatch(cartActions.increment(movieId));
    }

    return <div className={`${className} ${styles.counter_box}`}>
        <div className={styles.counter}>
            <button onClick={onDecrementClick}
                className={`${styles.counter__decrement} ${amount === MIN_ITEM_AMOUNT_IN_CART - 1 ? styles._inactive : ""}`} />
            <span>{amount}</span>
            <button onClick={onIncrementClick} 
                className={`${styles.counter__increment} ${amount === MAX_ITEM_AMOUNT_IN_CART ? styles._inactive : ""}`} />
        </div>
        {deletable && <div onClick={() => setIsModalOpen(true)} className={styles.delete_button}></div>}
        {isModalOpen && <Portal type='modals'><DeletionModalWindow
        deleteTicket={deleteTicket} closeModal={() => setIsModalOpen(false)} /></Portal>}
    </div> 
}