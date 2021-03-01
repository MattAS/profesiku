import Link from 'next/link'
import styles from '../../styles/categorySlideBox.module.scss'

export function CategorySlideBox() {
    return (
        <div className={styles.categorySlideBox_container}>
            <h1>Seek legal advice or solve a dispute.</h1>
            <p>Discover the lawyer for you</p>
        </div>
    )
}