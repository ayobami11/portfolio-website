import { AppState, AppAction } from "@/app/types/app";

export const initialState: AppState = {
    isMenuOpen: false,
    isDarkMode: false
}

export const reducer = (state: AppState, action: AppAction) => {
    switch (action.type) {
        case 'OPEN_MENU': {
            return {
                ...state,
                isMenuOpen: true
            }
        }

        case 'CLOSE_MENU': {
            return {
                ...state,
                isMenuOpen: false
            }
        }

        case 'SET_MODE': {
            return {
                ...state,
                isDarkMode: action.payload.isDarkMode
            }
        }

        case 'TOGGLE_MODE': {
            return {
                ...state,
                isDarkMode: !state.isDarkMode
            }
        }

        default: {
            return state;
        }
    }
}