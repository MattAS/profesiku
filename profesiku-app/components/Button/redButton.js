import styles from '../../styles/RedButton.module.scss'
import Link from 'next/link'

export function RedButton(buttonText) {
    return(
        <Link href='/'><a className={styles.RedButton}>{buttonText.text}</a></Link>
    )
}