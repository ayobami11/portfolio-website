'use client'

import Link from 'next/link';

import { AnimatePresence } from 'framer-motion';

import { useAppContext } from '@/contexts/app';

import HamburgerBtn from '@/components/HamburgerBtn';
import HamburgerMenu from '@/components/HamburgerMenu';
import ToggleModeSwitch from '@/components/ToggleModeSwitch';


export default function Header() {

    const { state } = useAppContext();

    return (
        <header className='font-secondary backdrop-blur-sm fixed py-6 px-[5%] px top-0 w-full z-20'>
            <div className='flex justify-between items-center max-w-6xl mx-auto'>

                <a
                    href="https://www.github.com/ayobami11"
                    target='_blank'
                    rel='noopener noreferrer'
                    className='font-tertiary font-bold text-2xl text-light-navy dark:text-lightest-slate dark:hover:text-light-green transition duration-300 ease-btn-hover'
                >&lt;ayobami11 /&gt;</a>

                <nav className='hidden md:flex md:justify-end md:items-center gap-[calc(2.5em+2vw)]'>
                    <ul className='contents'>
                        <li>
                            <Link scroll={false} className='text-charcoal hover:text-peach dark:text-slate dark:hover:text-light-green' href="#about">About</Link>
                        </li>
                        <li>
                            <Link scroll={false} className='text-charcoal hover:text-peach dark:text-slate dark:hover:text-light-green' href="#projects">Projects</Link>
                        </li>
                        <li>
                            <Link scroll={false} className='text-charcoal hover:text-peach dark:text-slate dark:hover:text-light-green' href="#contact">Contact</Link>
                        </li>
                    </ul>
                    {/* fix transform transition not working properly */}
                    <a className='bg-transparent rounded border-2 border-current text-peach transition py-2 px-3 outline-none hover:-translate-x-1 hover:-translate-y-1 hover:shadow-btn-hover dark:text-light-green' href="" target='_blank' rel='noopener noreferrer' download>Resume</a>
                </nav>

                <HamburgerBtn />

                <ToggleModeSwitch />

                <AnimatePresence>
                    {state.isMenuOpen ? <HamburgerMenu /> : null}
                </AnimatePresence>
            </div>
        </header>
    )
}