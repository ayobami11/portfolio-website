'use client'

import { AnimatePresence } from 'framer-motion';

import { useAppContext } from '@/contexts/app';

import HamburgerMenu from '@/components/HamburgerMenu';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

export default function Main() {

    const { state } = useAppContext();

    return (
        <main className='pt-24'>
            <AnimatePresence>
                {state.isMenuOpen ? <HamburgerMenu /> : null}
            </AnimatePresence>

            <Hero />
            <About />
            <Projects />
            <Contact />

            <p className='text-center p-6'>Design inspired by <a
                href="https://www.brittanychiang.com/"
                target='_blank'
                rel='noopener noreferrer'
                className='hover:text-peach dark:hover:text-light-green underline underline-offset-1'
            >Brittany Chiang</a>.</p>
        </main>
    )
}