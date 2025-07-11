/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // CENOVATE brand colors - Deep red primary with full scale
        primary: {
          50: '#FEF2F2', // Very light red tint
          100: '#FEE2E2', // Light red tint
          200: '#FECACA', // Medium light red
          300: '#FCA5A5', // Medium red
          400: '#F87171', // Lighter red
          500: '#EF4444', // Standard red
          600: '#ad2d2b', // CENOVATE Deep red (primary)
          700: '#991b1b', // Darker red
          800: '#7f1d1d', // Very dark red
          900: '#641212', // Darkest red
          DEFAULT: '#ad2d2b' // CENOVATE Deep red
        },
        secondary: {
          50: '#F9FAFB', // Very light gray
          100: '#F3F4F6', // Light gray
          200: '#E5E7EB', // Medium light gray
          300: '#D1D5DB', // Medium gray
          400: '#9CA3AF', // Medium dark gray
          500: '#6B7280', // Dark gray
          600: '#374151', // Darker gray (secondary)
          700: '#1F2937', // Very dark gray
          800: '#111827', // Near black
          900: '#030712', // Black
          DEFAULT: '#374151' // Darker gray
        },
        // CENOVATE accent colors based on PRD requirements
        'bg-light': '#FFFFFF', // Pure white background
        'text-main': '#1F2937', // Dark gray for main text
        'border-gray': '#E5E7EB', // Light gray for borders
        accent: {
          white: '#FFFFFF',
          gray: '#6B7280',
          black: '#111827'
        },
        success: '#10B981',
        danger: '#EF4444',
        // Standard gray scale
        gray: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827'
        }
      },
      // CENOVATE-optimized sizes for Ghana mobile users
      spacing: {
        'touch-min': '3rem', // 48px - minimum touch target for mobile
        'touch-safe': '4rem' // 64px - comfortable touch area
      },
      borderRadius: {
        cenovate: '0.5rem' // 8px - CENOVATE brand border-radius
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'] // Clean modern font as per PRD
      }
    }
  },
  darkMode: 'class', // Enable dark mode
  plugins: [
    require('@tailwindcss/forms') // Add forms plugin
  ]
}
