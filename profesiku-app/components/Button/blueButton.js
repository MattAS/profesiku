import styles from '../../styles/BlueButton.module.scss'
import Link from 'next/link'

export function BlueButton(buttonText) {
    return(
        <Link href='/'><a className={styles.BlueButton}>{buttonText.text}</a></Link>
    )
}