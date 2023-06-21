import { Content } from '@/components/Content'
import { FilmsList } from '@/components/FilmsList/FilmsList'
import { Filters } from '@/components/Filters/Filters'
import { Header } from '@/components/Header/Header'

import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
	return <div>
		<Header />
		<Content>
			<Filters />
			<FilmsList />
		</Content>
	</div>
}
