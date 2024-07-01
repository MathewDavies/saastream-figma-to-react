/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Outfit', 'sans-serif'],
      
    },
    fontSize: {
      
      xs: '1.05rem', // footer subscribe, button text
      sm: '1.3rem', // footer
      base: '1.43rem', // 23 - diverse text, plans and billing text, billing button text
      '3xl': '1.8rem', // subtitle, faq text (29)
      '3xla': '2.1rem', // (34)
      '3xlb': '2.4rem', //  (39)
      '4xl': '3.12rem', // quote, (51)

      '5xlsm': '4rem', 
      '5xl': '4.875rem', //78
      'hero_sm': '5.0rem',
      'hero': '8.5rem',
    },
   
    extend: { 
      colors: {
        lightGrey: "#D2D2D2",
        mediumGrey: "#878787",
        cardBGGrey: "#4D4D4D",
        cardBGDarkGrey: "#1B1B1B",      
        accentBlue: "#1154FF",      
        accentBlueLight: "#386ffc",      
        modalBackground: "rgba(0,0,0, 0.5)",      
    },
    blur: {
      '4xl': '96px',
    },
    backgroundImage: theme => ({
      'gradient-one': 'linear-gradient(180deg, #f22fb0, rgba(255, 255, 255, 0), #7061a3)',
      
      'gradient-two': 'linear-gradient(180deg, #428eff,  rgba(17,84,255, 0.44))',
      
      'gradient-three': 'linear-gradient(180deg, #7d40ff, rgba(255, 255, 255, 0), #7230ff)',
      'gradient-radial': 'radial-gradient(circle, #ff7e5f, #feb47b, #6a82fb, #fc5c7d)',

    }),
    keyframes: {
      'fade-in': {
        '0%': { opacity: '0' },
        '100%': { opacity: '1' },
      },
      'slide-in-from-left': {
        '0%': { transform: 'translateX(-100%)', opacity: '0' },
        '100%': { transform: 'translateX(0)', opacity: '1' },
      },
      'slide-in-from-right': {
        '0%': { transform: 'translateX(100%)', opacity: '0' },
        '100%': { transform: 'translateX(0)', opacity: '1' },
      },
    },
    animation: {
      'fade-in': 'fade-in 2s ease-in-out forwards',
      'slide-in-from-left': 'slide-in-from-left 1s ease-out forwards',
      'slide-in-from-right': 'slide-in-from-right 1s ease-out forwards',
    },
    screens: {
      sm_mob: "375px",
      md_mob: '414px',
      lg_mob: '601px',
      sm_t:  '769px',
      md_t:  '962px' ,
      lg_t:   '1200px' ,
      sm_d:  '1366px' ,
      md_d:  '1440px' ,
    },
  },
  },
  plugins: [],
}

