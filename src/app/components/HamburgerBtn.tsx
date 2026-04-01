'use client'

import { useAppContext } from '../contexts/app';

export default function HamburgerBtn() {
  const { state, dispatch } = useAppContext();

  const toggleHamburgerMenu = (): void => {
    state.isMenuOpen ?
      dispatch({ type: 'CLOSE_MENU' }) :
      dispatch({ type: 'OPEN_MENU' });
  }

  const open = state.isMenuOpen;

  return (
    <button
      className="inline-flex items-center justify-center w-9 h-9 md:hidden bg-transparent hover:bg-accent rounded-md transition-colors duration-200"
      onClick={toggleHamburgerMenu}
      aria-label={open ? 'Close menu' : 'Open menu'}
    >
      <div className="relative flex flex-col gap-[5px] w-5">
        <span
          className={`block h-[1.5px] w-5 bg-foreground rounded-full transition-all duration-300 origin-center ${
            open ? 'translate-y-[6.5px] rotate-45' : ''
          }`}
        />
        <span
          className={`block h-[1.5px] w-5 bg-foreground rounded-full transition-all duration-300 ${
            open ? 'opacity-0 scale-x-0' : ''
          }`}
        />
        <span
          className={`block h-[1.5px] w-5 bg-foreground rounded-full transition-all duration-300 origin-center ${
            open ? '-translate-y-[6.5px] -rotate-45' : ''
          }`}
        />
      </div>
    </button>
  );
}
