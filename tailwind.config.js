/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Cohere-inspired warm editorial palette
        'ink': '#212121',
        'near-black': '#17171c',
        'deep-green': '#003c33',
        'dark-navy': '#071829',
        'action-blue': '#1863dc',
        'coral': '#ff7759',
        'soft-coral': '#ffad9b',
        'soft-stone': '#eeece7',
        'pale-green': '#edfce9',
        'pale-blue': '#f1f5ff',
        'card-border': '#f2f2f2',
        'muted-slate': '#93939f',
        'slate-text': '#75758a',
        'hairline': '#d9d9dd',

        // Backward-compat aliases — 기존 클래스를 새 톤으로 매핑
        brand: '#003c33',
        'brand-light': '#1863dc',
        'ax-accent': '#ff7759',
        'accent-before': '#b30000',
        'accent-after': '#1863dc',
        'bg-light': '#eeece7',     // soft stone (was light gray)
        'bg-dark': '#17171c',      // near-black (was pure black)
        'bg-dark-2': '#003c33',    // deep green (was off-black)
        'bg-dark-3': '#071829',    // dark navy
        'border-dark': '#2a2a30',
        'text-muted': '#93939f',
        'text-light': '#d9d9dd',
      },
      fontFamily: {
        sans: ['Pretendard Variable', 'Pretendard', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'Pretendard Variable', 'Pretendard', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      borderRadius: {
        'xs': '4px',
        'sm': '8px',
        'md': '16px',
        'lg': '22px',
        'xl': '30px',
        'pill': '32px',
      },
      letterSpacing: {
        'display-hero': '-1.92px',
        'display-lg': '-1.44px',
        'display': '-1.2px',
        'section': '-0.48px',
        'card': '-0.32px',
        'mono-label': '0.28px',
      },
      keyframes: {
        fadeIn: { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        slideUp: { '0%': { opacity: '0', transform: 'translateY(20px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
      },
      animation: {
        fadeIn: 'fadeIn 0.6s ease-in-out',
        slideUp: 'slideUp 0.6s ease-out',
      },
    },
  },
  plugins: [],
}
