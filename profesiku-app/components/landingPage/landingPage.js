import styles from '../../styles/LandingPage.module.scss'
import {BlueButton} from '../Button/blueButton'
import {RedButton} from '../Button/redButton'
import Link from 'next/link'

export function LandingPage() {
    return (
        <div className={styles.landingPageContainer}>
            <h1 className={styles.landingPageContainer_title}>Looking for quality work <br/> or a part-time job?</h1>
            <p className={styles.landingPageContainer_sub}>You're just one click away:</p>

            <div className={styles.landingPageContainer_buttons}>
                <div className={styles.landingPageContainer_buttons_blueButton}>
                    <BlueButton text="Become A Freelancer" />
                </div>
                <div className={styles.landingPageContainer_buttons_redButton}>
                    <RedButton text ="Hire A Freelancer" />
                </div>
            </div>
        </div>
    )
}