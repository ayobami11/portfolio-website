'use client'

import Link from 'next/link';

import { useAppContext } from '@/contexts/app';

import HamburgerBtn from '@/components/HamburgerBtn';
import ToggleModeSwitch from '@/components/ToggleModeSwitch';


export default function Header() {

    const { state } = useAppContext();

    return (
        <header className='backdrop-blur-sm fixed py-6 px-[5%] px top-0 w-full z-30'>
            <div className='flex justify-between items-center max-w-6xl mx-auto'>

                <a
                    href="https://www.github.com/ayobami11"
                    target='_blank'
                    rel='noopener noreferrer'
                    className={`whitespace-nowrap font-bold tracking-wider text-2xl text-charcoal hover:text-peach ${!state.isMenuOpen ? 'dark:text-slate' : ''} dark:hover:text-light-green transition duration-300 ease-btn-hover`}
                >&lt;ayobami11 /&gt;</a>

                <div className='flex gap-16 items-center'>
                    <nav className='hidden md:flex md:justify-end md:items-center md:gap-[calc(1.25em+2vw)]'>
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
                        <a
                            href="/Ayobami_Tunwase_Resume.pdf"
                            target='_blank'
                            rel='noopener noreferrer'
                            className='bg-transparent rounded border-2 border-current text-peach transition py-2 px-3 outline-none hover:-translate-x-1 hover:-translate-y-1 hover:shadow-btn-hover dark:text-light-green'
                        >Resume</a>
                    </nav>

                    <HamburgerBtn />

                    <div className='hidden md:block'>
                        <ToggleModeSwitch />
                    </div>
                </div>
            </div>
        </header>
    )
}