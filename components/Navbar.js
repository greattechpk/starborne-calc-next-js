import React from 'react'
import Link from 'next/link'
import styles from '../styles/Navbar.module.scss'
export default function Navbar() {
    return (
        <div className={styles.navbar}>
            <img className={styles.navimg} src='/Starborne_Logo.webp'/>
            <nav className={styles.navmenu}>
                <Link href=''><a  className={styles.navitem}>Home</a></Link>
                <Link href=''><a  className={styles.navitem}>About</a></Link>
                <Link href=''><a  className={styles.navitem}>GitHub</a></Link>
            </nav>
        </div>

    )
}



