/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
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
      }
    },
  },
  plugins: [require('tailwind-scrollbar')({ nocompatible: true })],
}
