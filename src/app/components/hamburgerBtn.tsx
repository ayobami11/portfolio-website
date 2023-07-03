'use client'

import { useAppContext } from '../contexts/app';

import styles from '../styles/hamburgerBtn.module.css';

export default function HamburgerBtn() {

    const { state, dispatch } = useAppContext();

    const toggleHamburgerMenu = (): void => {
        state.isMenuOpen ?
            dispatch({ type: 'CLOSE_MENU' }) :
            dispatch({ type: 'OPEN_MENU' });
    }

    return (
        <button className={`${styles.hamBtn} ${state.isMenuOpen ? styles.menuOpen : ''}`} onClick={toggleHamburgerMenu}>
            <span className={styles.hamLine}></span>
            <span className={styles.hamLine}></span>
            <span className={styles.hamLine}></span>
        </button>
    )
}