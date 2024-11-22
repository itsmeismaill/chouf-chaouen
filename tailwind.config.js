module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'chefchaouen-blue': 'var(--chefchaouen-blue)',
        'chefchaouen-light-blue': 'var(--chefchaouen-light-blue)',
        'chefchaouen-dark-blue': 'var(--chefchaouen-dark-blue)',
        'chefchaouen-white': 'var(--chefchaouen-white)',
        'chefchaouen-accent': 'var(--chefchaouen-accent)',
      },
    },
  },
  plugins: [],
}

