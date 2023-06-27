const plugin = require('tailwindcss/plugin')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // that is animation class
      animation: {
        "fade-in-bottom": 'fade-in-bottom 0.5s forwards ',
        "big-fade-in-bottom": 'big-fade-in-bottom 1.5s forwards ',
        "mini-fade-in-bottom": 'mini-fade-in-bottom 1s forwards ',
        "mini-fade-in-top": 'mini-fade-in-top 0.2s forwards ',
      },
      // that is actual animation
      keyframes: {
        "fade-in-bottom": {
          '0%': { opacity:"0",transform:'translateY(50px)'  },
          '100%': { opacity:"1",transform:'translateY(0px)'},
        },
        "big-fade-in-bottom": {
          '0%': { opacity:"0",transform:'translateY(50px)'  },
          "80%":{ opacity:"0.7"  },
          '100%': { opacity:"1",transform:'translateY(0px)'},
        },
        "mini-fade-in-bottom": {
          '0%': { opacity:"0",transform:'translateY(5px)'  },
          '100%': { opacity:"1",transform:'translateY(0px)'},
        },
        "mini-fade-in-top": {
          '0%': { opacity:"0",transform:'translateY(-20px)'  },
          '100%': { opacity:"1",transform:'translateY(0px)'},
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors:{
        "navy":"#0a192f", 
        "light-navy":"#112240", 
        "lightest-navy":"#233554", 
        "slate":"#8892b0", 
        "light-slate":"#a8b2d1", 
        "lightest-slate":"#ccd6f6", 
        "whitish":"#e6f1ff", 
        "greenish-blue":"#64ffda", 
      },
      boxShadow:{
        'navy-shdow':'0 10px 30px -10px rgba(2,12,27,0.7);'
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
        {
          "animation-delay": (value) => {
            return {
              "animation-delay": value,
            };
          },
        },
        {
          values: theme("transitionDelay"),
        }
      );
    }), 
  ],
}
