/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#05050A',
        surface: '#0F0F1A',
        border: '#1E1E2E',
        accent: '#6C63FF',
        'accent-2': '#00F5D4',
        'text-primary': '#F0EFFF',
        'text-muted': '#8B8AA3',
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      animation: {
        'marquee': 'marquee 30s linear infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(108, 99, 255, 0.5)' },
          '50%': { boxShadow: '0 0 40px rgba(108, 99, 255, 0.8)' },
        },
      },
    },
  },
  plugins: [],
}
