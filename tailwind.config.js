/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        container: {
            center: true,
        },
        extend: {
            colors: {
                primary: '#EEE6DD',
                secondary: '#D8C3AA',
                tertiary: '#D8C5AB',
                main: '#9E682A',

                nursery: '#4F3717',
            },
            borderRadius: {
                smooth: '4px',
            },
        },
    },
    plugins: [],
};
