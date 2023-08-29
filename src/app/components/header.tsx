'use client'

import { useAppContext } from '@/app/contexts/app';

import { AnimatePresence } from 'framer-motion';

import Link from 'next/link';

import HamburgerBtn from '@/app/components/HamburgerBtn';
import HamburgerMenu from '@/app/components/HamburgerMenu';
import ToggleModeSwitch from '@/app/components/ToggleModeSwitch';


export default function Header() {

    const { state } = useAppContext();

    return (
        <header className='bg-gray-100/50 dark:bg-gray-900/50 backdrop-blur-sm backdrop-grayscale-[.3] fixed py-6 px-[5%] px top-0 w-full z-20 flex flex-row-reverse justify-between items-center'>

            <nav className='hidden md:flex md:justify-end md:items-center gap-[calc(2.5em+2vw)]'>
                <ul className='contents'>
                    <li>
                        <Link className='text-charcoal hover:text-peach dark:text-slate dark:hover:text-light-green' href="/">Home</Link>
                    </li>
                    <li>
                        <Link className='text-charcoal hover:text-peach dark:text-slate dark:hover:text-light-green' href="/#experience">Experience</Link>
                    </li>
                    <li>
                        <Link className='text-charcoal hover:text-peach dark:text-slate dark:hover:text-light-green' href="/#work">Work</Link>
                    </li>
                    <li>
                        <Link className='text-charcoal hover:text-peach dark:text-slate dark:hover:text-light-green' href="/#contact">Contact</Link>
                    </li>
                </ul>
                {/* fix transform transition not working properly */}
                <a className='bg-transparent rounded border-2 border-current text-peach transition duration-300 ease-btn-hover p-2 outline-none hover:-translate-x-1 hover:-translate-y-1 hover:shadow-btn-hover dark:text-light-green' href="" target='_blank' rel='noopener noreferrer' download>Resume</a>
            </nav>

            <HamburgerBtn />

            <ToggleModeSwitch />

            <AnimatePresence>
                {state.isMenuOpen ? <HamburgerMenu /> : null}
            </AnimatePresence>
        </header>
    )
}