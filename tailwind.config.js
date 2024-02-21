/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}',
    ],
    darkMode:'class',
    theme: {
        screens: {
            sm: '480px',
            md: '768px',
            lg: '976px',
            xl: '1440px',
        },
        fontFamily: {
            body:['Poppins', 'sans-serif']
        },
        animation: {
            blob: 'blob 7s infinite',
            bounce: 'bounce 3s infinite',
            blink : 'blink 6s ease-in infinite'
        },
        keyframes: {
            blob: {
                '0%': {
                    transform: 'translate(0px, 0px) scale(1) ',
                },
                '33%': {
                    transform: 'translate(30px, -50px) scale(1.1)',
                },
                '66%': {
                    transform: 'translate(-20px, 20px) scale(0.9)',
                },
                '100%': {
                    transform: 'tranlate(0px, 0px) scale(1)',
          
                },
            },
            bounce :{
                '0%':{ transform: 'translate(0px, 0px) scale(1, 1)', },
                '25%': { transform: 'scale(0.9, 1.1)', },
                '50%': { transform: 'scale(1.1, 0.9)', },
                '75%': { transform: 'scale(0.95, 1.05)'
                }
            },
            blink:{
                '0%': {height: 0},
                '90%': {height: 0},
                '92%': {height: '100%'},
                '95%': {
                    height: 0
                },
                '97%': {
                    height: 100},
                '100%': {
                    height: 0
                } }
        },
 
        plugins: [ ('@tailwindcss/aspect-ratio'),],
    }
}