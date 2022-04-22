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
            'large': '164px',
            'none': '0',
            'sm': '0.125rem',
            DEFAULT: '0.25rem',
            DEFAULT: '4px',
            'md': '0.375rem',
            'lg': '0.5rem',
            'xl': '1.5rem',
            'full': '999px',
        },
    },

    plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
