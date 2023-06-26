import { aboutUsParagraphs } from '@/utils/data';
import styles from './styles.module.css';

export function AboutUsComponent() {
    return <div>
        <h1 className={styles.title}>О нас</h1>
        {aboutUsParagraphs.map((para, index) => {
            return <p key={index} className={styles.paragraph}>{para}</p>
        })}
    </div>
}