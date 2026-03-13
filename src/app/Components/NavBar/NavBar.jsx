'use client'

import React from 'react'
import Link from 'next/link'
import styles from './NavBar.module.css'

const NavBar = () => {
  return (
    <nav className={styles.nav}>
      {' '}
      {/* Use semantic <nav> */}
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link href='/' className={styles.navLink}>
            Home
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href='/about' className={styles.navLink}>
            About
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href='/resume' className={styles.navLink}>
            Resume
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
