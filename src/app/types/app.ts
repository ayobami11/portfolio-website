export interface AppState {
    isMenuOpen: boolean,
}

export type AppAction = {
    type: 'OPEN_MENU'
} | {
    type: 'CLOSE_MENU'
}

export interface AppContextType {
    state: AppState,
    dispatch: React.Dispatch<any>
}