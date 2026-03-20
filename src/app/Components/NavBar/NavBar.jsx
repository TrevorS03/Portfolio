'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import styles from './NavBar.module.css'

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Hamburger button (mobile) */}
      <button className={styles.menuButton} onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>

      {/* Sidebar */}
      <nav className={`${styles.nav} ${isOpen ? styles.open : ''}`}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link href='/' className={styles.navLink} onClick={() => setIsOpen(false)}>
              Home
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link
              href='/pages/about'
              className={styles.navLink}
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link
              href='/pages/resume'
              className={styles.navLink}
              onClick={() => setIsOpen(false)}
            >
              Resume
            </Link>
          </li>
        </ul>
      </nav>

      {/* Overlay (mobile click outside) */}
      {isOpen && <div className={styles.overlay} onClick={() => setIsOpen(false)} />}
    </>
  )
}

export default NavBar
