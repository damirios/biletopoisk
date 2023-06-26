import { useEffect, useRef } from 'react';
import styles from './styles.module.css';

interface Props {
    closeModal: () => void;
    deleteTicket: () => void;
}

export function DeletionModalWindow({closeModal, deleteTicket}: Props) {
    const confirmBoxRef = useRef<HTMLDivElement>(null);
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const clickHandler = (e: MouseEvent) => {
            e.stopPropagation();
            const target = e.target;
            if (target instanceof Node && !confirmBoxRef.current?.contains(target) && modalRef.current?.contains(target)) {
                closeModal();
            }
        }

        window.addEventListener('click', clickHandler);

        return () => window.removeEventListener('click', clickHandler);
    }, [closeModal]);

    return <div ref={modalRef} className={styles.deletion__modal}>
        <div ref={confirmBoxRef} className={styles.deletion__confirm_box}>
            <div className={styles.deletion__confirm_top}>
                <p>Удаление билета</p>
                <button onClick={closeModal} className={styles.delete_button} />
            </div>
            <div className={styles.deletion__message}>
                Вы уверены, что хотите удалить билет?
            </div>
            <div className={styles.deletion__controls}>
                <button onClick={deleteTicket} className={styles.deletion__delete_button}>Да</button>
                <button onClick={closeModal} className={styles.deletion__remain_button}>Нет</button>
            </div>
        </div>
    </div>
}