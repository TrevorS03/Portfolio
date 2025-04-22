import React from 'react';
import Styles from './NavBar.module.css';

const NavBar = () => {
    return (
        <nav className={Styles.nav}>
            <ul className={Styles.navList}>
                <li className={Styles.navItem}><a href="#home" className={Styles.navLink}>Home</a></li>
                <li className={Styles.navItem}><a href="#projects" className={Styles.navLink}>Projects</a></li>
                <li className={Styles.navItem}><a href="#about" className={Styles.navLink}>About</a></li>
                <li className={Styles.navItem}><a href="#contact" className={Styles.navLink}>Contact</a></li>
            </ul>
        </nav>
    );
};

export default NavBar;
