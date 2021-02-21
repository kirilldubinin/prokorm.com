/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
    theme: {
      fontFamily: {
        'baloo': ['"Baloo 2"'],
        'comfortaa': ['"Comfortaa"']
      },
      extend: {
        width: {
          '52': '13rem'
        },
        spacing: {
          '72': '18rem'
        },
        screens: {
          'xs': '200px',
          '2xl': '1440px',
          '3xl': '1640px',
          '4xl': '1840px'
        },
        fontSize: {
          'xxs': '.60rem'
        }
      }
    },
    variants: {},
    plugins: []
  }
