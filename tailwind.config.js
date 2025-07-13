/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        cst: ['M PLUS 1p'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        'chat-primary': '#2563EB',
        'chat-secondary': '#E2E8F0',
        'chat-dark': '#1E293B',
        'chat-light': '#F8FAFC',
        'chat-accent': '#0EA5E9',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-out',
        'slide-up': 'slideUp 0.4s ease-out',
        'pulse-light': 'pulseLight 2s infinite',
        'bounce-subtle': 'bounceSoft 1s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateX(-10px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
        slideUp: {
          '0%': { opacity: 0, transform: 'translateY(10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        pulseLight: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.7 },
        },
        bounceSoft: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        }
      },
      boxShadow: {
        'chat': '0 2px 8px rgba(0, 0, 0, 0.08)',
        'chat-hover': '0 4px 12px rgba(0, 0, 0, 0.1)',
      },
      borderRadius: {
        'chat': '1rem',
      },
    },
  },
  plugins: [],
}
