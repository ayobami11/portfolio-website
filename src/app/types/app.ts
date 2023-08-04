import React from 'react';

export interface AppState {
    isMenuOpen: boolean,
    isDarkMode: boolean
}

export type AppAction = { type: 'OPEN_MENU' }
    | { type: 'CLOSE_MENU' }
    | { type: 'TOGGLE_MODE' }
    | {
        type: 'SET_MODE',
        payload: { isDarkMode: boolean }
    }

export interface AppContextType {
    state: AppState,
    dispatch: React.Dispatch<any>
}