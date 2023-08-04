'use client'

import { useState, useEffect } from 'react';

import { motion } from 'framer-motion';

import { useAppContext } from '@/app/contexts/app';

import { FaSun, FaMoon } from 'react-icons/fa6';

import styles from '@/app/styles/toggleModeSwitch.module.css';

const spring = {
    type: 'spring',
    stiffness: 700,
    damping: 30
}

const ToggleModeSwitch = () => {

    const { dispatch } = useAppContext();

    useEffect(() => {
        const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

        dispatch({ type: 'SET_MODE', payload: { isDarkMode: prefersDarkMode } });
    }, [dispatch]);

    const toggleMode = () => dispatch({ type: 'TOGGLE_MODE' });

    return (
        <div className={styles.switch} onClick={toggleMode}>
            <FaMoon className={`${styles.icon} ${styles.moonIcon}`} />
            <motion.div className={styles.handle} layout transition={spring} />
            <FaSun className={`${styles.icon} ${styles.sunIcon}`} />
        </div>
    );
}

export default ToggleModeSwitch;