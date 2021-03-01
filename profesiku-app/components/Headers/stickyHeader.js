import styles from '../../styles/StickyHeader.module.scss'
import Link from 'next/link'

export function StickyHeader() {
    return (
        <div className={styles.stickyHeaderContainer}>
            <div className={styles.stickyHeaderContainer_logo_items}>
                <div className={styles.stickyHeaderContainer_logo_items_logo}>
                    <svg className={styles.stickyHeaderContainer_logo_items_logo_pic} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="853.63" height="110.752" viewBox="0 0 853.63 197.752">
                    <defs>
                        <linearGradient id="linear-gradient" x1="1.071" y1="0.721" x2="0.055" y2="0.195" gradientUnits="objectBoundingBox">
                        <stop offset="0.28" stop-color="#7d6dbf"/>
                        <stop offset="0.47" stop-color="#816dc2"/>
                        <stop offset="0.64" stop-color="#8b6dcd"/>
                        <stop offset="0.8" stop-color="#9e6dde"/>
                        <stop offset="0.95" stop-color="#b66df6"/>
                        </linearGradient>
                        <linearGradient id="linear-gradient-2" x1="0.278" y1="0.885" x2="0.785" y2="0.006" gradientUnits="objectBoundingBox">
                        <stop offset="0" stop-color="#816dc4"/>
                        <stop offset="0.5" stop-color="#8d60cb"/>
                        <stop offset="0.81" stop-color="#b66df6"/>
                        </linearGradient>
                        <linearGradient id="linear-gradient-3" x1="0.501" y1="1" x2="0.501" gradientUnits="objectBoundingBox">
                        <stop offset="0" stop-color="#6f6fdb"/>
                        <stop offset="0.6" stop-color="#816dc4"/>
                        </linearGradient>
                    </defs>
                    <g id="Layer_2" data-name="Layer 2" transform="translate(0 0.022)">
                        <g id="Layer_1" data-name="Layer 1">
                        <path id="Path_1" data-name="Path 1" d="M27.44,109.74a24.6,24.6,0,0,0,0,49.2H72.85v-49.2Z" fill="url(#linear-gradient)"/>
                        <path id="Path_2" data-name="Path 2" d="M116.37,109.74H86.09V78.52a31.21,31.21,0,0,1,30.28-31.17V2.86A77.57,77.57,0,0,0,86.09,151.44V158h28.39v-.07c.62,0,1.26,0,1.89.05Z" fill="#b66df6"/>
                        <path id="Path_3" data-name="Path 3" d="M75.69,161.78H27.44a27.438,27.438,0,1,1,0-54.875l48.25.005Zm-48.25-49.2a21.76,21.76,0,1,0,0,43.52H70V112.58Z" fill="#3d3d3d"/>
                        <path id="Path_4" data-name="Path 4" d="M117.31,2.84a77.58,77.58,0,0,0-31.22,148.6V158h28.39v-.07c.94,0,1.88.07,2.83.07a77.578,77.578,0,1,0,0-155.155Zm0,106.9H86.09V78.52a31.22,31.22,0,1,1,31.22,31.22Z" fill="url(#linear-gradient-2)"/>
                        <path id="Path_5" data-name="Path 5" d="M117.31,160.83H83.25v-7.57a80.42,80.42,0,1,1,34.06,7.57Zm-5.67-5.78h2.94c1,0,1.86.07,2.73.07a74.75,74.75,0,1,0-30.07-6.32l1.69.74v5.58h22.71Zm5.67-42.47H83.25V78.52a34.06,34.06,0,1,1,34.06,34.06Zm-28.38-5.67h28.38A28.39,28.39,0,1,0,88.93,78.523Z" fill="#3d3d3d"/>
                        <path id="Path_6" data-name="Path 6" d="M39.74,79.47v99.94h0c.5,8.61,10,15.48,21.71,15.48h2.84C76,194.89,85.55,188,86,179.41h0v-85" fill="url(#linear-gradient-3)"/>
                        <path id="Path_7" data-name="Path 7" d="M64.33,197.73H61.49c-12,0-22-6.61-24.14-15.48h-.41V79.47h5.67v99.77c.41,7.07,8.87,12.81,18.87,12.81h2.84c10,0,18.47-5.74,18.88-12.81V94.5h5.68v87.8h-.45C86.34,191.12,76.33,197.73,64.33,197.73Z" fill="#3d3d3d"/>
                        <path id="Path_8" data-name="Path 8" d="M117.31,112.58H83.25V78.52a34.06,34.06,0,1,1,34.06,34.06Zm-28.38-5.67h28.38A28.39,28.39,0,1,0,88.93,78.523Z" fill="#3d3d3d"/>
                        <path id="Path_9" data-name="Path 9" d="M255.4,106.51v36.07H242V53.75h15.19q11.16,0,16.86,1.55a22.73,22.73,0,0,1,10.13,5.87A25.29,25.29,0,0,1,291.82,80q0,12.19-8.17,19.33t-22,7.14Zm0-12.43h5q18.46,0,18.46-14.21,0-13.75-19-13.75H255.4Z" fill="#3d3d3d"/>
                        <path id="Path_10" data-name="Path 10" d="M335.72,104.72l27.5,37.86h-16.4l-25.37-36.36H319v36.36H305.6V53.75h15.7q17.61,0,25.43,6.62,8.64,7.37,8.63,19.44A25.24,25.24,0,0,1,350,96a24.08,24.08,0,0,1-14.28,8.72ZM319,94.54h4.26q19,0,19-14.55,0-13.65-18.52-13.64H319Z" fill="#3d3d3d"/>
                        <path id="Path_11" data-name="Path 11" d="M371.59,97.77q0-18.17,13.32-31.2a43.82,43.82,0,0,1,31.86-13A43,43,0,0,1,448.3,66.69a43,43,0,0,1,13.21,31.58,42.3,42.3,0,0,1-13.26,31.48,44.4,44.4,0,0,1-32.15,13q-16.65,0-29.91-11.53Q371.6,118.44,371.59,97.77Zm13.09.17q0,14.27,9.59,23.45t22,9.19a30.94,30.94,0,0,0,22.84-9.36,31.67,31.67,0,0,0,9.3-23.06q0-13.75-9.19-23.06a32.07,32.07,0,0,0-45.29,0,31,31,0,0,0-9.25,22.84Z" fill="#3d3d3d"/>
                        <path id="Path_12" data-name="Path 12" d="M524.19,66.35h-31V87.69H523.1v12.6H493.24v42.29h-13.4V53.75h44.35Z" fill="#3d3d3d"/>
                        <path id="Path_13" data-name="Path 13" d="M588.75,66.35H553.13V87.69h34.58v12.6H553.13V130h35.62v12.6h-49V53.75h49Z" fill="#3d3d3d"/>
                        <path id="Path_14" data-name="Path 14" d="M655.73,68l-10.52,6.24q-3-5.13-5.62-6.68a15.038,15.038,0,0,0-16.19,1.28,9.47,9.47,0,0,0-3.56,7.57q0,6.28,9.35,10.13l8.57,3.51q10.47,4.23,15.31,10.33a23.26,23.26,0,0,1,4.85,15q0,11.85-7.91,19.59a27.12,27.12,0,0,1-19.76,7.8q-11.19,0-18.49-6.63t-9-18.65L616,114.56q.88,7.56,3.12,10.46,4,5.56,11.69,5.57a13.59,13.59,0,0,0,10.08-4.06,14.08,14.08,0,0,0,4-10.3,14.6,14.6,0,0,0-.69-4.6,11.851,11.851,0,0,0-2.17-3.84,17.47,17.47,0,0,0-3.82-3.28,37.068,37.068,0,0,0-5.56-2.93l-8.3-3.45q-17.66-7.45-17.65-21.82a20.69,20.69,0,0,1,7.41-16.2q7.39-6.57,18.42-6.57Q647.38,53.54,655.73,68Z" fill="#3d3d3d"/>
                        <path id="Path_15" data-name="Path 15" d="M688.45,53.75v88.83H675V53.75Z" fill="#3d3d3d"/>
                        <path id="Path_16" data-name="Path 16" d="M723.2,89.19l34.58-35.44h17.89L735.51,94l40.39,48.61H758l-32-39.52-2.76,2.76v36.76H709.79V53.75H723.2Z" fill="#3d3d3d"/>
                        <path id="Path_17" data-name="Path 17" d="M801.27,53.75v53.51q0,11.44,3.74,16.74,5.58,7.65,15.71,7.65T836.48,124q3.74-5.13,3.74-16.74V53.75h13.41v57.19q0,14-8.75,23.13a33.84,33.84,0,0,1-48.27,0q-8.75-9.09-8.74-23.13V53.75Z" fill="#3d3d3d"/>
                        </g>
                    </g>
                    </svg>

                </div>
                <div className={styles.stickyHeaderContainer_logo_items_menuItem}>
                    <Link href ="/"><a className={styles.stickyHeaderContainer_logo_items_menuItem_item}>How it Works</a></Link>
                    <Link href ="/"><a className={styles.stickyHeaderContainer_logo_items_menuItem_item}>Projects </a></Link>
                    <Link href ="/"><a className={styles.stickyHeaderContainer_logo_items_menuItem_item}>Make a Team</a></Link>
                </div>
            </div>
            <div className={styles.stickyHeaderContainer_menuIcons}>
                <div className={`${styles.stickyHeaderContainer_menuIcons_search} ${styles.stickyHeaderContainer_menuIcons_svg}`}>
                    <svg width="110px" height="110px" viewBox="0 0 110 110" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                        <title>Search ICN</title>
                        <desc>Created with Sketch.</desc>
                        <g id="Search-ICN" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <circle id="Oval" fill="#7B6ECC" cx="55" cy="55" r="55"></circle>
                            <g transform="translate(28.000000, 28.000000)" fill="#FFFFFF">
                                <path d="M23,46 C10.2974508,46 0,35.7025492 0,23 C0,10.2974508 10.2974508,0 23,0 C35.7025492,0 46,10.2974508 46,23 C46,35.7025492 35.7025492,46 23,46 Z M23,36.9069767 C30.6806112,36.9069767 36.9069767,30.6806112 36.9069767,23 C36.9069767,15.3193888 30.6806112,9.09302326 23,9.09302326 C15.3193888,9.09302326 9.09302326,15.3193888 9.09302326,23 C9.09302326,30.6806112 15.3193888,36.9069767 23,36.9069767 Z" id="Combined-Shape"></path>
                                <path d="M39.9145342,33.3579194 L52.6420806,46.0854658 C54.4526398,47.896025 54.4526398,50.8315214 52.6420806,52.6420806 C50.8315214,54.4526398 47.896025,54.4526398 46.0854658,52.6420806 L33.3579194,39.9145342 C31.5473602,38.103975 31.5473602,35.1684786 33.3579194,33.3579194 C35.1684786,31.5473602 38.103975,31.5473602 39.9145342,33.3579194 Z" id="Rectangle"></path>
                            </g>
                        </g>
                    </svg>
                </div>
                <div className={`${styles.stickyHeaderContainer_menuIcons_globe} ${styles.stickyHeaderContainer_menuIcons_svg}`}>
                    <svg className = {styles.stickyHeaderContainer_menuIcons_globe_icon} width="86px" height="86px" viewBox="0 0 86 86" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                        <title>Languages ICN</title>
                        <desc>Created with Sketch.</desc>
                        <g id="Symbols:-Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <g id="Languages-ICN" fill="#3D3D3D" fill-rule="nonzero">
                                <g>
                                    <path d="M43,86 C19.2517558,86 0,66.7482442 0,43 C0,19.2517558 19.2517558,0 43,0 C66.7482442,0 86,19.2517558 86,43 C86,66.7482442 66.7482442,86 43,86 Z M43,78.6808511 C62.7059899,78.6808511 78.6808511,62.7059899 78.6808511,43 C78.6808511,23.2940101 62.7059899,7.31914894 43,7.31914894 C23.2940101,7.31914894 7.31914894,23.2940101 7.31914894,43 C7.31914894,62.7059899 23.2940101,78.6808511 43,78.6808511 Z" id="Oval"></path>
                                    <path d="M43,86 C31.0123946,86 22.8723404,66.554315 22.8723404,43 C22.8723404,19.445685 31.0123946,0 43,0 C54.9876054,0 63.1276596,19.445685 63.1276596,43 C63.1276596,66.554315 54.9876054,86 43,86 Z M43,78.6808511 C49.2025391,78.6808511 55.8085106,62.8999192 55.8085106,43 C55.8085106,23.1000808 49.2025391,7.31914894 43,7.31914894 C36.7974609,7.31914894 30.1914894,23.1000808 30.1914894,43 C30.1914894,62.8999192 36.7974609,78.6808511 43,78.6808511 Z" id="Oval"></path>
                                    <polygon id="Line" points="85.0851064 39.3404255 85.0851064 46.6595745 0.914893617 46.6595745 0.914893617 39.3404255"></polygon>
                                </g>
                            </g>
                        </g>
                    </svg>
                    <svg className={styles.stickyHeaderContainer_menuIcons_globe_arrow} width="18px" height="10px" viewBox="0 0 18 10" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                        <title>Path 2</title>
                        <g id="Welcome" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <g id="Desktop-HD:-Chat" transform="translate(-1241.000000, -92.000000)" fill="#3D3D3D" fill-rule="nonzero">
                                <g id="Login-&amp;-Sign-Up" transform="translate(1146.000000, 69.000000)">
                                    <g id="Languages" transform="translate(61.000000, 14.000000)">
                                        <polygon id="Path-2" points="43 15.125 50.1 9.8 51.9 12.2 43 18.875 34.1 12.2 35.9 9.8 43 15.125"></polygon>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </svg>
                </div>
                <div className={`${styles.stickyHeaderContainer_menuIcons_profile} ${styles.stickyHeaderContainer_menuIcons_svg}`}>
                    <svg className={styles.stickyHeaderContainer_menuIcons_profile_hamburger} width="25px" height="19px" viewBox="0 0 25 19" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                        <title>Log In Drop Down</title>
                        <desc>Created with Sketch.</desc>
                        <g id="Log-In-Drop-Down" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <g fill="#3D3D3D" id="Rectangle">
                                <rect x="0" y="0" width="25" height="3" rx="1.5"></rect>
                                <rect x="0" y="8" width="25" height="3" rx="1.5"></rect>
                                <rect x="0" y="16" width="25" height="3" rx="1.5"></rect>
                            </g>
                        </g>
                    </svg>
                    <svg className = {`${styles.stickyHeaderContainer_menuIcons_profile_user}`} width="34px" height="34px" viewBox="0 0 34 34" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                        <title>Unknown User ICN</title>
                        <desc>Created with Sketch.</desc>
                        <g id="Unknown-User-ICN" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <g>
                                <circle id="Oval" fill="#7B6ECC" cx="17" cy="17" r="17"></circle>
                                <g id="Unkown-User-Art" transform="translate(5.000000, 6.000000)" fill="#FFFFFF">
                                    <path d="M0.332279111,18.7399303 C1.59935997,15.4469742 6.34246283,13 12,13 C17.6575372,13 22.40064,15.4469742 23.6677209,18.7399303 C21.15972,22.5131138 16.8702817,25 12,25 C7.12971832,25 2.84028004,22.5131138 0.332277675,18.739934 Z" id="Combined-Shape"></path>
                                    <circle id="Oval" cx="12" cy="8" r="8"></circle>
                                </g>
                            </g>
                        </g>
                    </svg>
                </div>
            </div>
        </div>
    )
}
