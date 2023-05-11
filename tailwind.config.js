/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        //Primary
        p_cyan: 'hsl(180, 66%, 49%)',
        p_dark_violet: 'hsl(257, 27%, 26%)',

        //Secondary
        p_red: 'hsl(0, 87%, 67%)',

        // Neutral
        p_gray: 'hsl(0, 0%, 75%)',
        p_grayish_violet: 'hsl(257, 7%, 63%)',
        p_very_dark_blue: 'hsl(255, 11%, 22%)',
        p_very_dark_violet: 'hsl(260, 8%, 14%)',

      },

      backgroundImage: {
        'bg-desk': "url(src/assets/images/bg-boost-desktop.svg)",
        'bg-mobile': "url(src/assets/images/bg-boost-mobile.svg)",
      }
    },

    screens: {
      'sm': '375px',
      // => @media (min-width: 640px) { ... }

      'md': '640px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1440px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },

    fontFamily:{
      'poppins': ['Poppins', 'sans-serif'],
    },
  },
  plugins: [],
}
