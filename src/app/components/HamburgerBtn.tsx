'use client'

import { useAppContext } from '../contexts/app';

export default function HamburgerBtn() {

    const { state, dispatch } = useAppContext();

    const toggleHamburgerMenu = (): void => {
        state.isMenuOpen ?
            dispatch({ type: 'CLOSE_MENU' }) :
            dispatch({ type: 'OPEN_MENU' });
    }

    return (
        <button className="relative group md:hidden" onClick={toggleHamburgerMenu}>
            <div className="relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all bg-slate-700 ring-0 ring-gray-300 hover:ring-8 group-focus:ring-4 ring-opacity-30 duration-200 shadow-md">
                <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
                    <div className={`${state.isMenuOpen ? 'bg-orange-200' : 'bg-peach'} dark:bg-light-green h-[2px] w-7 transform transition-all duration-300 origin-left ${state.isMenuOpen ? 'translate-x-10' : ''} `} />
                    <div className={`${state.isMenuOpen ? 'bg-orange-200' : 'bg-peach'} dark:bg-light-green h-[2px] w-7 rounded transform transition-all duration-300 delay-75 ${state.isMenuOpen ? 'translate-x-10' : ''}`} />
                    <div className={`${state.isMenuOpen ? 'bg-orange-200' : 'bg-peach'} dark:bg-light-green h-[2px] w-7 transform transition-all duration-300 origin-left delay-150 ${state.isMenuOpen ? 'translate-x-10' : ''}`} />

                    <div className={`absolute items-center justify-between transform transition-all duration-500 top-2.5 -translate-x-10y flex w-0 ${state.isMenuOpen ? 'w-12 translate-x-0' : ''}`}>
                        <div className={`absolute ${state.isMenuOpen ? 'bg-orange-200' : 'bg-peach'} dark:bg-light-green h-[2px] w-5 transform transition-all duration-500 rotate-0 delay-300 ${state.isMenuOpen ? 'rotate-45' : ''}`} />
                        <div className={`absolute ${state.isMenuOpen ? 'bg-orange-200' : 'bg-peach'} dark:bg-light-green h-[2px] w-5 transform transition-all duration-500 -rotate-0 delay-300 ${state.isMenuOpen ? '-rotate-45' : ''}`} />
                    </div>
                </div>
            </div>
        </button>
    )
}