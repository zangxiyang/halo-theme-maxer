module.exports = {
    content: [
        `components/**/*.{vue,js}`,
        'components/*/*.vue',
        `layouts/**/*.vue`,
        `pages/**/*.vue`,
        `composables/**/*.{js,ts}`,
        `plugins/**/*.{js,ts}`,
        `App.{js,ts,vue}`,
        `app.{js,ts,vue}`
    ],
    theme: {
        extend: {
            color:{
                'maxer': '#425AEF'
            },
            textColor: {
                'maxer': '#425aef'
            },
            borderColor: {
                'maxer': '#425aef'
            },
            height: {
                'banner': '370px',
                '2.8': '2.8rem',
                '3.2': '3.2rem',
                '68': '17rem'
            },
            width: {
                '1140': '1140px',
            },
            minHeight: {
                '24': '6rem'

            },
            minWidth: {
                '1300': '1300px',
                '10': '10rem'
            },
            colors: {
                'footer-gray': '#f7f8fa'
            },
            screens: {
                'max-md': {'max': '767px'}
            }
        },
        zIndex: {
            '1': 1,
            '0': 0,
            '10': 10,
            '20': 20,
            '30': 30,
            '40': 40,
            '50': 50,
            '25': 25,
            '75': 75,
            '100': 100,
            'auto': 'auto',
        },
    },
    plugins: [
        // require('daisyui')
    ]
}
