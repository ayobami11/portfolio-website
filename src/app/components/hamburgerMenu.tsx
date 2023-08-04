'use client'

import Link from "next/link"

import { motion } from 'framer-motion';

import { useAppContext } from '@/app/contexts/app';

import styles from '@/app/styles/hamburgerMenu.module.css';

const asideVariants = {
    initial: { height: 0 },
    animate: { height: '100vh' },
    exit: {
        height: 0,
        transition: {
            delay: 1,
            duration: 0.3
        }
    }
}

const listVariants = {
    closed: {
        transition: {
            staggerChildren: 0.2,
            staggerDirection: -1
        }
    },
    open: {
        transition: {
            staggerChildren: 0.2,
            staggerDirection: 1
        }
    }
}

const itemVariants = {
    closed: { opacity: 0 },
    open: { opacity: 1 },
}

export default function HamburgerMenu() {

    const { dispatch } = useAppContext();

    const closeMenu = () => {
        dispatch({ type: 'CLOSE_MENU' });
    }

    return (
        <motion.aside
            className={styles.menu}
            variants={asideVariants}
            initial='initial'
            animate='animate'
            exit='exit'>
            <nav>
                <motion.ul
                    variants={listVariants}
                    initial='closed'
                    animate='open'
                    exit='closed'
                >
                    <motion.li
                        variants={itemVariants}
                        onClick={closeMenu}
                    >
                        <Link href="/">Home</Link>
                    </motion.li>
                    <motion.li
                        variants={itemVariants}
                        onClick={closeMenu}
                    >
                        <Link href="/#experience">Experience</Link>
                    </motion.li>
                    <motion.li
                        variants={itemVariants}
                        onClick={closeMenu}
                    >
                        <Link href="/#work">Work</Link>
                    </motion.li>
                    <motion.li
                        variants={itemVariants}
                        onClick={closeMenu}
                    >
                        <Link href="/#contact">Contact</Link>
                    </motion.li>
                    <motion.li
                        variants={itemVariants}
                        onClick={closeMenu}
                    >
                        <motion.a
                            variants={itemVariants}
                            href=""
                            target='_blank'
                            rel='noopener noreferrer'
                            download
                        >
                            Resume
                        </motion.a>
                    </motion.li>
                </motion.ul>
            </nav>
        </motion.aside>
    )
}