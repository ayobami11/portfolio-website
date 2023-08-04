'use client'

import { useAppContext } from '@/app/contexts/app';

import { AnimatePresence } from 'framer-motion';

import Link from 'next/link';

import HamburgerBtn from '@/app/components/HamburgerBtn';
import HamburgerMenu from '@/app/components/HamburgerMenu';
import ToggleModeSwitch from '@/app/components/ToggleModeSwitch';

import styles from '@/app/styles/header.module.css';

export default function Header() {

    const { state } = useAppContext();

    return (
        <header className={styles.header}>

            <nav className={styles.nav}>
                <ol className={styles.navList}>
                    <li className={styles.navItem}>
                        <Link className={styles.navLink} href="/">Home</Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link className={styles.navLink} href="/#experience">Experience</Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link className={styles.navLink} href="/#work">Work</Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link className={styles.navLink} href="/#contact">Contact</Link>
                    </li>
                </ol>
                <a className={styles.resumeLink} href="" target='_blank' rel='noopener noreferrer' download>Resume</a>
            </nav>

            <HamburgerBtn />

            <ToggleModeSwitch />

            <AnimatePresence>
                {state.isMenuOpen ? <HamburgerMenu /> : null}
            </AnimatePresence>
        </header>
    )
}