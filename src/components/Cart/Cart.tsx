import { useSelector } from "react-redux";

import { useGetAllMoviesQuery } from "@/store/services/movieApi";
import { InitialStateType } from "@/store/slices/cartSilce";
import { selectCartModuleAndTicketsAmount } from "@/store/slices/selectors";
import { RootState } from "@/store/store";
import { MovieList } from "../MovieList/MovieList";
import { CartSummary } from "./CartSummary";
import styles from './styles.module.css';

interface CartProps {}

export default function Cart({}: CartProps) {
    const {movieIds, ticketsAmount} = useSelector<RootState, {movieIds: InitialStateType, ticketsAmount: number}>(state => {
        return selectCartModuleAndTicketsAmount(state);
    });
    const {data, isLoading, error} = useGetAllMoviesQuery('');
    const moviesInCart = data?.filter(movie => movieIds[movie.id] !== undefined);
    
    return <div className={styles.cart}>
        <MovieList isLoading={isLoading} error={error} movies={moviesInCart || null} inCart={true} />
        {ticketsAmount !== 0 && <CartSummary ticketsAmount={ticketsAmount} />}
    </div>
}