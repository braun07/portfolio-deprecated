const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    darkMode: 'class',
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './vendor/laravel/jetstream/**/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Nunito', ...defaultTheme.fontFamily.sans],
                body: ['Montserrat']
                
            },
            spacing: {
                '444': '28rem',
            },
        },
        borderRadius: {
            'large': '10.25rem',
            'none': '0',
            'sm': '0.125rem',
            DEFAULT: '0.25rem',
            DEFAULT: '4px',
            'md': '0.375rem',
            'lg': '0.5rem',
            'lx': '1.0rem',
            'xl': '1.5rem',
            '1xl': '2rem',
            '2xl': '3rem',
            '3xl': '4.5rem',
            'full': '63rem',
        },
    },

    plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
