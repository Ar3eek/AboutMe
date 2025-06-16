// tailwind.config.js
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'gradient-wave': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        'wave-blob': {
          '0%, 100%': { transform: 'translateY(0) scaleY(1)' },
          '50%': { transform: 'translateY(16px) scaleY(1.08)' }, // mocniej do góry
        },
        'wave-blob-alt': {
          '0%, 100%': { transform: 'translateY(0) scaleY(1)' },
          '50%': { transform: 'translateY(-18px) scaleY(0.92)' }, // mocniej w dół
        },
      },
      animation: {
        'gradient-wave': 'gradient-wave 3s ease infinite',
        'wave-blob': 'wave-blob 5s ease-in-out infinite',      // było 6s
        'wave-blob-alt': 'wave-blob-alt 6s ease-in-out infinite', // było 8s
      },
    },
  },
  plugins: [],
}
