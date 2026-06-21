'use client'

import { useTheme } from 'next-themes';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

const spring = {
  type: 'spring',
  stiffness: 700,
  damping: 30,
}

const ToggleModeSwitch = () => {
  const { theme, setTheme } = useTheme();

  const isDark = theme === 'dark';

  const toggleTheme = () => {
    setTheme(isDark ? 'light' : 'dark');
  }

  return (
    <button
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <div
        className={`w-[60px] h-8 relative bg-secondary border border-border flex items-center rounded-full p-1 cursor-pointer overflow-hidden transition-colors duration-300 ${isDark ? 'justify-end' : 'justify-start'}`}
      >
        <Moon className={`absolute left-1.5 w-3.5 h-3.5 text-muted-foreground z-10 transition-all duration-300 ${isDark ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`} />
        <motion.div
          className='w-6 h-6 rounded-full bg-primary shadow-sm z-20'
          layout
          transition={spring}
        />
        <Sun className={`absolute right-1.5 w-3.5 h-3.5 text-muted-foreground z-10 transition-all duration-300 ${isDark ? 'opacity-0 scale-75' : 'opacity-100 scale-100'}`} />
      </div>
    </button>
  );
}

export default ToggleModeSwitch;
