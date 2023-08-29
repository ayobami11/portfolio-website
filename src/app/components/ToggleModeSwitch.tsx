'use client'

import { useTheme } from 'next-themes';

import { motion } from 'framer-motion';

import { FaSun, FaMoon } from 'react-icons/fa6';

const spring = {
    type: 'spring',
    stiffness: 700,
    damping: 30
}

const ToggleModeSwitch = () => {

    const { theme, setTheme } = useTheme();

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    }

    return (
        <button onClick={toggleTheme}>
            <div className={`w-[75px] h-10 relative bg-charcoal flex justify-start items-center rounded-[3.125em] p-2 cursor-pointer overflow-hidden dark:bg-zinc-400 dark:justify-end`} onClick={toggleTheme}>
                <FaMoon className={`absolute w-4 text-white z-10 opacity-0 translate-x-0 rotate-180 transition-transform dark:opacity-100 dark:-translate-x-11 dark:rotate-0`} />
                <motion.div className='w-7 h-7 rounded-full bg-cream dark:bg-navy' layout transition={spring} />
                <FaSun className={`absolute w-4 text-yellow-400 z-10 translate-x-11 rotate-180 transition-transform dark:opacity-0 dark:-translate-x-11`} />
            </div>
        </button>
    );
}

export default ToggleModeSwitch;