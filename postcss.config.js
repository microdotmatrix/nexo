module.exports = {
  plugins: {
    '@unocss/postcss': {
      content: [
        './src/app/**/*.{js,jsx,ts,tsx}',
        './src/components/**/*.{js,jsx,ts,tsx}'
      ]
    }
  }
}