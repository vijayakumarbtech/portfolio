/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Inter', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        ink: {
          DEFAULT: '#1C1A17',
          muted: '#6B6560',
          subtle: '#8B8580',
          inverse: '#F5F2EC',
          'inverse-muted': '#A39C93',
        },
        surface: {
          base: '#FFFFFF',
          raised: '#FAF7F1',
          tint: '#F2F5F0',
          'dark-base': '#1A1917',
          'dark-raised': '#211F1C',
          'dark-elevated': '#29271F',
        },
        line: {
          DEFAULT: '#E7E2D8',
          dark: '#322F2A',
          'dark-strong': '#3D3A33',
        },
        brand: {
          emerald: '#047857',
          'emerald-tint': '#ECFDF5',
          'emerald-dark': '#34D399',
          blue: '#2563EB',
          'blue-tint': '#EFF4FF',
          'blue-dark': '#60A5FA',
        },
      },
      boxShadow: {
        soft: '0 1px 2px rgba(28,26,23,0.04), 0 6px 16px -8px rgba(28,26,23,0.08)',
        card: '0 1px 2px rgba(28,26,23,0.03), 0 8px 20px -10px rgba(28,26,23,0.10)',
        'card-dark': '0 1px 2px rgba(0,0,0,0.25), 0 8px 20px -10px rgba(0,0,0,0.45)',
      },
      borderRadius: {
        xl2: '1.1rem',
      },
      animation: {
        float: 'float 7s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
      maxWidth: {
        '8xl': '90rem',
      },
    },
  },
  plugins: [],
}
