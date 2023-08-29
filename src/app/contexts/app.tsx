'use client'

import { createContext, useContext, useReducer } from 'react';

import { ThemeProvider } from 'next-themes';

import { reducer, initialState } from '../reducers/app';
import { AppContextType } from '../types/app';

const AppContext = createContext<AppContextType | null>(null);

export const AppContextWrapper = ({ children }: { children: React.ReactNode }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <AppContext.Provider value={{ state, dispatch }}>
            <ThemeProvider attribute='class' enableSystem>
                {children}
            </ThemeProvider>
        </AppContext.Provider>
    )
}

export const useAppContext = () => {
    const context = useContext(AppContext);

    if (context === null) {
        throw new Error('AppContext does not have a valid value');
    }

    return context;
}