'use client'

import Link from "next/link"

import { motion } from 'framer-motion';

import { useAppContext } from '@/contexts/app';
import ToggleModeSwitch from "@/components/ToggleModeSwitch";

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
            className='fixed bg-orange-400 dark:bg-emerald-400 top-0 z-20 w-full h-screen flex items-center justify-center text-center md:hidden'
            variants={asideVariants}
            initial='initial'
            animate='animate'
            exit='exit'>
            <nav className='max-w-sm'>
                <motion.ul
                    variants={listVariants}
                    initial='closed'
                    animate='open'
                    exit='closed'
                    className='flex flex-col gap-8'
                >
                    <motion.li
                        variants={itemVariants}
                        onClick={closeMenu}
                        className='dark:text-navy'
                    >
                        <Link href="/">Home</Link>
                    </motion.li>
                    <motion.li
                        variants={itemVariants}
                        onClick={closeMenu}
                        className='dark:text-navy'
                    >
                        <Link href="/#experience">Experience</Link>
                    </motion.li>
                    <motion.li
                        variants={itemVariants}
                        onClick={closeMenu}
                        className='dark:text-navy'
                    >
                        <Link href="/#projects">Projects</Link>
                    </motion.li>
                    <motion.li
                        variants={itemVariants}
                        onClick={closeMenu}
                        className='dark:text-navy'
                    >
                        <Link href="/#contact">Contact</Link>
                    </motion.li>
                    <motion.li
                        variants={itemVariants}
                        onClick={closeMenu}
                        className='dark:text-navy'
                    >
                        <motion.a
                            variants={itemVariants}
                            href="/Ayobami_Tunwase_Resume.pdf"
                            target='_blank'
                            rel='noopener noreferrer'
                            download
                            className='bg-transparent rounded border-2 border-current dark:text-navy transition py-2 px-3 outline-none hover:-translate-x-1 hover:-translate-y-1 hover:shadow-btn-hover'
                        >Resume</motion.a>
                    </motion.li>
                    <motion.li variants={itemVariants}>
                        <ToggleModeSwitch />
                    </motion.li>
                </motion.ul>

            </nav>
        </motion.aside>
    )
}