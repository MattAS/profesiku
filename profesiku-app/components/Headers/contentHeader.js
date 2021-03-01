import Link from 'next/link'
import styles from '../../styles/ContentHeader.module.scss'

export function ContentHeader() {
    return (
         <div className={styles.contentHeader}>
             <div className={styles.contentHeader_menu}>
                <Link href="/"><a className={styles.contentHeader_menu_menuItems}>Web Dev.</a></Link>
                <Link href="/"><a className={styles.contentHeader_menu_menuItems}>Mobile Dev.</a></Link>
                <Link href="/"><a className={styles.contentHeader_menu_menuItems}>Design</a></Link>
                <Link href="/"><a className={styles.contentHeader_menu_menuItems}>Tutoring</a></Link>
                <Link href="/"><a className={styles.contentHeader_menu_menuItems}>Data Science & Analytics</a></Link>
                <Link href="/"><a className={styles.contentHeader_menu_menuItems}>Accounting</a></Link>
                <Link href="/"><a className={styles.contentHeader_menu_menuItems}>Legal</a></Link>
             </div>
             <div className={styles.contentHeader_categories}>
                 <div className={styles.contentHeader_categories_icon_container}>
                    <svg className={styles.contentHeader_categories_icon_container_icon} width="22px" height="22px" viewBox="0 0 22 22" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                        <title>Categories ICN</title>
                        <g id="Welcome" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <g id="Desktop-HD:-How-it-Works" transform="translate(-1187.000000, -171.000000)" fill="#3D3D3D" fill-rule="nonzero">
                                <g id="Categories-Bar" transform="translate(52.000000, 149.000000)">
                                    <g id="See-all-Categories" transform="translate(1110.000000, 9.000000)">
                                        <g id="Categories-ICN" transform="translate(25.000000, 13.000000)">
                                            <path d="M3,2 C2.44771525,2 2,2.44771525 2,3 L2,7 C2,7.55228475 2.44771525,8 3,8 L7,8 C7.55228475,8 8,7.55228475 8,7 L8,3 C8,2.44771525 7.55228475,2 7,2 L3,2 Z M3,0 L7,0 C8.65685425,0 10,1.34314575 10,3 L10,7 C10,8.65685425 8.65685425,10 7,10 L3,10 C1.34314575,10 0,8.65685425 0,7 L0,3 C0,1.34314575 1.34314575,0 3,0 Z" id="Rectangle"></path>
                                            <path d="M15,2 C14.4477153,2 14,2.44771525 14,3 L14,7 C14,7.55228475 14.4477153,8 15,8 L19,8 C19.5522847,8 20,7.55228475 20,7 L20,3 C20,2.44771525 19.5522847,2 19,2 L15,2 Z M15,0 L19,0 C20.6568542,0 22,1.34314575 22,3 L22,7 C22,8.65685425 20.6568542,10 19,10 L15,10 C13.3431458,10 12,8.65685425 12,7 L12,3 C12,1.34314575 13.3431458,0 15,0 Z" id="Rectangle"></path>
                                            <path d="M3,14 C2.44771525,14 2,14.4477153 2,15 L2,19 C2,19.5522847 2.44771525,20 3,20 L7,20 C7.55228475,20 8,19.5522847 8,19 L8,15 C8,14.4477153 7.55228475,14 7,14 L3,14 Z M3,12 L7,12 C8.65685425,12 10,13.3431458 10,15 L10,19 C10,20.6568542 8.65685425,22 7,22 L3,22 C1.34314575,22 0,20.6568542 0,19 L0,15 C0,13.3431458 1.34314575,12 3,12 Z" id="Rectangle"></path>
                                            <path d="M15,14 C14.4477153,14 14,14.4477153 14,15 L14,19 C14,19.5522847 14.4477153,20 15,20 L19,20 C19.5522847,20 20,19.5522847 20,19 L20,15 C20,14.4477153 19.5522847,14 19,14 L15,14 Z M15,12 L19,12 C20.6568542,12 22,13.3431458 22,15 L22,19 C22,20.6568542 20.6568542,22 19,22 L15,22 C13.3431458,22 12,20.6568542 12,19 L12,15 C12,13.3431458 13.3431458,12 15,12 Z" id="Rectangle"></path>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </svg>
                    <Link href="/"><a className={styles.contentHeader_categories_icon_container_seeall}>See All Categories</a></Link>
                   </div>
             </div>

         </div>
    )
}