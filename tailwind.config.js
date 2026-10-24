/** @type {import('tailwindcss').Config} */
export default {
  future: { hoverOnlyWhenSupported: true },
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['Georgia', 'Cambria', '"Times New Roman"', 'serif'],
      },
      colors: {
        ink: '#012a4d',
        muted: '#3d5a75',
        accent: { DEFAULT: '#023C6C', dark: '#012a4d', light: '#0b5394' },
        leaf: { DEFAULT: '#55B848', dark: '#3f9a34' },
        gold: { DEFAULT: '#F37920', light: '#ffefe0' },
      },
      keyframes: {
        'fade-up': { '0%': { opacity: '0', transform: 'translateY(24px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
        'fade-left': { '0%': { opacity: '0', transform: 'translateX(-32px)' }, '100%': { opacity: '1', transform: 'translateX(0)' } },
        'fade-right': { '0%': { opacity: '0', transform: 'translateX(32px)' }, '100%': { opacity: '1', transform: 'translateX(0)' } },
        'zoom-in': { '0%': { opacity: '0', transform: 'scale(0.92)' }, '100%': { opacity: '1', transform: 'scale(1)' } },
        glow: {
          '0%,100%': { boxShadow: '0 0 0 0 rgb(243 121 32 / 0)' },
          '25%,75%': { boxShadow: '0 0 0 6px rgb(243 121 32 / 0.35), 0 0 36px 8px rgb(243 121 32 / 0.35)' },
          '50%': { boxShadow: '0 0 0 3px rgb(243 121 32 / 0.25), 0 0 20px 2px rgb(243 121 32 / 0.2)' },
        },
        float: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-12px)' } },
      },
      animation: {
        'fade-up': 'fade-up 0.7s ease-out both',
        'fade-left': 'fade-left 0.7s ease-out both',
        'fade-right': 'fade-right 0.7s ease-out both',
        'zoom-in': 'zoom-in 0.6s ease-out both',
        glow: 'glow 1.2s ease-in-out 3',
        float: 'float 6s ease-in-out infinite',
      },
      backgroundImage: {
        brand: 'linear-gradient(90deg, #012a4d 0%, #023C6C 50%, #0b5394 100%)',
        tricolor: 'linear-gradient(90deg, #F37920 0 33.33%, #ffffff 33.33% 66.66%, #55B848 66.66% 100%)',
      },
      boxShadow: {
        glow: '0 20px 50px -12px rgb(2 60 108 / 0.3)',
        card: '0 1px 2px rgb(2 60 108 / 0.05), 0 8px 24px rgb(2 60 108 / 0.08)',
        soft: '0 1px 2px rgb(2 60 108 / 0.08)',
      },
    },
  },
  plugins: [],
}
