/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'primary': {
          DEFAULT: '#4A148C', // dark purple
          light: '#B39DDB', // light purple for dark mode text
        },
        'background': {
          light: '#FFFFFF', // white for light mode
          dark: '#121212', // black for dark mode
        },
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(to right, #4A148C, #7B1FA2)',
        'gradient-secondary': 'linear-gradient(to right, #B39DDB, #9575CD)',
        'gradient-cta': 'linear-gradient(135deg, #4A148C 0%, #7B1FA2 100%)',
        'gradient-hero': 'linear-gradient(165deg, #4A148C 0%, #B39DDB 100%)',
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: 0, transform: "translateY(10px)" },
          "100%": { opacity: 1, transform: "translateY(0)" }
        },
        "fade-in-up": {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" }
        },
        "slide-in-right": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" }
        }
      },
      animation: {
        "fade-in": "fade-in 0.5s ease-out",
        "fade-in-up": "fade-in-up 0.5s ease-out",
        "slide-in-right": "slide-in-right 0.3s ease-out"
      }
    },
  },
  plugins: [
    require('tailwindcss-animate')
  ],
}
