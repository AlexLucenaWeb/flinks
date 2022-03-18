const colors = require('tailwindcss/colors');

const flinks_colors = {
       'yellow': {
              DEFAULT: '#F6C020',
            },
       'white': {
              DEFAULT: '#FFFFFF',
       },
       'purple': {
              DEFAULT: '000001',
       }
}

module.exports = {  
    content: [   
          "./pages/**/*.{js,ts,jsx,tsx}",   
          "./components/**/*.{js,ts,jsx,tsx}",  
           ],
    theme: {
              colors: {
                     transparent: 'transparent',
                     current: 'currentColor',
                     yellow: flinks_colors.yellow,
                     black: '#000000',
              },
              screens: {
                     xs: '475px',
                     sm: '640px',
                     md: '768px',
                     lg: '1024px',
                     xl: '1280px',
                     '1xl': '1380px',
                     '2xl': '1536px',
                     '3xl': '1980px',
                 },
           extend: {
           },
           },  
    plugins: [],
}