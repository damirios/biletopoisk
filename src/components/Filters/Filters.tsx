"use client";

import { Input } from '@/sharedComponents/Input/Input';
import { Select } from '@/sharedComponents/Select/Select';
import { SelectServer } from '@/sharedComponents/SelectWithServerList/SelectServer';
import { GenresType } from '@/utils/data';
import { useContext } from 'react';
import { FiltersContext } from '../Main/PageWithContext';
import styles from './styles.module.css';

interface FiltersUIProps {
    filters: {
        genres: GenresType;
    },
}

function FiltersUI({filters}: FiltersUIProps) {
    return <div className={`content__filters ${styles.filters}`}>
        <div className={styles.filters__title}>Фильтр поиска</div>
        <form action="" className={`${styles.filters__form} ${styles.form}`}>
            <div className={styles.form__group}>
                <label className={styles.form__label}>Название</label>
                <Input type="title" className={styles.form__input} placeholder='Введите название' />
            </div>
            <div className={styles.form__group}>
                <label className={styles.form__label}>Жанр</label>
                <Select type="genre" list={filters.genres} placeholder="Выберите жанр" />
            </div>
            <div className={styles.form__group}>
                <label className={styles.form__label}>Кинотеатр</label>
                <SelectServer type="cinema" placeholder="Выберите кинотеатр" />
            </div>
        </form>
    </div>
}

export function Filters() {
    const filters = useContext(FiltersContext);

    return <FiltersUI filters={filters} />
}