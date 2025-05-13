'use client'

import React from 'react';
import Link from 'next/link'; // Import Link for navigation
import { useRouter } from 'next/navigation';
import Styles from './NavBar.module.css';

const NavBar = () => {
    const router = useRouter();

    const handleClick = (page) => {
        router.push(`/pages/${page}`);
    };

    return (
        <nav className={Styles.nav}>
            <ul className={Styles.navList}>
                <li className={Styles.navItem}>
                    <Link href="/pages/home" className={Styles.navLink}>Home</Link>
                </li>
                <li className={Styles.navItem}>
                    <Link href="/pages/projects" className={Styles.navLink}>Projects</Link>
                </li>
                <li className={Styles.navItem}>
                    <Link href="/pages/about" className={Styles.navLink}>About</Link>
                </li>
                <li className={Styles.navItem}>
                    <Link href="/pages/contact" className={Styles.navLink}>Contact</Link>
                </li>
                <li className={Styles.navItem}>
                    <Link href="/pages/resume" className={Styles.navLink}>Resume</Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;