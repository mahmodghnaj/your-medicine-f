/** @type {import('tailwindcss').Config} */

const withOpacity = (name) => {
  return ({ opacityValue }) => {
    if (opacityValue === undefined)
      return `rgb(var(${name}))`
    return `rgba(var(${name}),${opacityValue})`

  }
}

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        'base-white': withOpacity('--color-base-white'),
        'base-black': withOpacity('--color-base-black'),
        'base-background': withOpacity('--color-base-background'),
        'base-background-opacity': withOpacity('--color-base-background-opacity'),
        'base-transparent': withOpacity('--color-base-transparent'),
        ////////////////////
        'primary-100': withOpacity('--color-primary-100'),
        'primary-200': withOpacity('--color-primary-200'),
        'primary-300': withOpacity('--color-primary-300'),
        'primary-400': withOpacity('--color-primary-400'),
        'primary-500': withOpacity('--color-primary-500'),
        'primary-550': withOpacity('--color-primary-550'),
        'primary-600': withOpacity('--color-primary-600'),
        'primary-700': withOpacity('--color-primary-700'),
        'primary-800': withOpacity('--color-primary-800'),
        'primary-900': withOpacity('--color-primary-900'),
        //////////////////////////
        'grays-100': withOpacity('--color-grays-100'),
        'grays-200': withOpacity('--color-grays-200'),
        'grays-300': withOpacity('--color-grays-300'),
        'grays-400': withOpacity('--color-grays-400'),
        'grays-500': withOpacity('--color-grays-500'),
        'grays-600': withOpacity('--color-grays-600'),
        'grays-700': withOpacity('--color-grays-700'),
        'grays-800': withOpacity('--color-grays-800'),
        'grays-900': withOpacity('--color-grays-900'),
        ///////////////////////////////////////
        'success-100': withOpacity('--color-success-100'),
        'success-200': withOpacity('--color-success-200'),
        'success-300': withOpacity('-color-success-300'),
        'success-400': withOpacity('--color-success-400'),
        'success-500': withOpacity('--color-success-500'),
        'success-600': withOpacity('--color-success-600'),
        'success-700': withOpacity('--color-success-700'),
        'success-800': withOpacity('--color-success-800'),
        'success-900': withOpacity('--color-success-900'),
        /////////////////////////////////////////
        'warning-100': withOpacity('--color-warning-100'),
        'warning-200': withOpacity('--color-warning-200'),
        'warning-300': withOpacity('--color-warning-300'),
        'warning-400': withOpacity('--color-warning-400'),
        'warning-500': withOpacity('--color-warning-500'),
        'warning-600': withOpacity('--color-warning-600'),
        'warning-700': withOpacity('--color-warning-700'),
        'warning-800': withOpacity('--color-warning-800'),
        'warning-900': withOpacity('--color-warning-900'),
        /////////////////////////////////////////
        'danger-100': withOpacity('--color-danger-100'),
        'danger-200': withOpacity('--color-danger-200'),
        'danger-300': withOpacity('--color-danger-300'),
        'danger-400': withOpacity('--color-danger-400'),
        'danger-500': withOpacity('--color-danger-500'),
        'danger-600': withOpacity('--color-danger-600'),
        'danger-700': withOpacity('--color-danger-700'),
        'danger-800': withOpacity('--color-danger-800'),
        'danger-900': withOpacity('--color-danger-900'),
      },
      boxShadow: {
        sm: '0px 4px 8px -2px rgb(var(--color-base-black)) , 0px 2px 4px -2px rgb(var(--color-base-black))',
        md: '0px 4px 6px -2px rgba(var(--color-base-black)) , 0px 12px 16px -4px rgba(var(--color-base-black))',
        lg: '0px 20px 24px -4px rgb(var(--color-base-black)) , 0px 8px 8px -4px rgb(var(--color-base-black))',
        xl: '0px 24px 48px -12px rgb(var(--color-base-black))',

        //////////////////////////////////////////
        primary: '0px 0px 0px 2px rgb(var(--color-primary-600,0.25)) , 0px 1px 3px 0px rgb(var(--color-base-black, 0.1))  , 0px 1px 2px 0px rgb(var(--color-base-black,0.06)) ',
        grey: '0px 0px 0px 2px rgb(var(--color-grays-600)) , 0px 1px 3px 0px rgb(var(--color-base-black))  , 0px 1px 2px 0px rgb(var(--color-base-black)) ',
        success: '0px 0px 0px 2px rgb(var(--color-success-600)) , 0px 1px 3px 0px rgb(var(--color-base-black))  , 0px 1px 2px 0px rgb(var(--color-base-black)) ',
        warning: '0px 0px 0px 2px rgb(var(--color-warning-600)) , 0px 1px 3px 0px rgb(var(--color-base-black))  , 0px 1px 2px 0px rgb(var(--color-base-black)) ',
        danger: '0px 0px 0px 2px rgb(var(--color-danger-600)) , 0px 1px 3px 0px rgb(var(--color-base-black))  , 0px 1px 2px 0px rgb(var(--color-base-black))',
      },
      blur: {
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '40px'
      },
      borderRadius: {
        sm: '4px',
        md: '8px',
        lg: '12px',
        xl: '16px'

      },
      spacing: {
        '0.25': '2px',
        '0.5': '4px',
        '1': '8px',
        '1.5': '12px',
        '2': '16px',
        '3': '24px',
        '4': '32px',
        '5': '40px',
        '6': '48px',
        '7': '56px',
        '8': '64px',
        '9': '72px',
        '10': '80px',
        '12': "96px",
        '14': '112px',
        '16': '128px',
        '18': '144px',
        '20': '160px',
        '25': '200px',
        '30': '240px',
        '40': "320px",
        '50': '400px'
      },
      fontSize: {
        'xs': ['10px', {
          // lineHeight: '1.6px',
          // letterSpacing: 'auto',
        }],
        'sm': ['12px', {
          // lineHeight: '1.6px',
          // letterSpacing: 'auto',
        }],
        'md': ['14px', {
          // lineHeight: '1.6px',
          // letterSpacing: 'auto',
        }],
        'lg': ['16px', {
          // lineHeight: '1.6px',
          // letterSpacing: 'auto',
        }],
      },
      fontWeight: {
        'light': '300',
        'regular': '400',
        'bold': '500',
        'semibold': '600',

      }
    },
  },
  plugins: [],

}
