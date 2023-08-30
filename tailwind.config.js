/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      boxShadow: {
        'btn-hover': '3px 3px 0 0 currentColor',
      },
      transitionTimingFunction: {
        'btn-hover': 'cubic-bezier(0.645, 0.045, 0.355, 1)'
      },
      fontFamily: {
        'primary': ['var(--font-josefin-sans)'],
        'secondary': ['var(--font-roboto-slab)']
      },
      colors: {
        //  Primary
        'light-cyan': 'rgb(206, 227, 233)',
        'neon-green': 'rgb(82, 255, 168)',

        // Neutral
        'grayish-blue': 'rgb(78, 93, 115)',

        // Light Theme
        'cream': 'rgb(254, 249, 248)',
        'charcoal': 'rgb(13, 13, 13)',
        'peach': 'rgb(239, 146, 115)',

        // Dark Theme
        'navy': 'rgb(10, 25, 47)',
        'light-navy': 'rgb(17, 34, 64)',
        'light-green': 'rgb(100, 255, 218)',
        'slate': 'rgb(136, 146, 176)',
        'light-slate': 'rgb(168, 178, 209)',
        'lightest-slate': 'rgb(204, 214, 246)'
      }
    },
  },
  plugins: [],
}