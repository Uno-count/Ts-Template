const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './renderer/pages/**/*.{js,ts,jsx,tsx}',
    './renderer/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      white: colors.white,
      gray: colors.gray,
      blue: colors.blue,
      'cyan-light': '#55FFF5',
      'gray-light': '#F9F9F9',
      'gray-dark': '#3A3A3A',
    },
    fontSize: {
      sm: ['16px', '16px'],
      base: ['18px', '18px'],
      lg: ['34px', '34px'],
      xl: ['48px', '48px'],
    },
    fontFamily: {
      mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace']
    }
  },
  plugins: [
    require("daisyui")
  ],
}
