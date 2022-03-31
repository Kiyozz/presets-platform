module.exports = {
  mode: 'jit',
  content: ['./resources/views/**/*.{edge,js,css}'],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Poppins, sans-serif',
      },
      colors: {
        primary: {
          400: '#809BCE',
          500: '#001B2E',
          600: '#FBFEF9',
          700: '#7F9172',
          800: '#517664',
        },
        body: {
          400: '#001B2E',
          500: '#FBFEF9',
          600: '#291720',
          700: '#001B2E',
          800: '#001B2E',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'base',
    }),
  ],
}
