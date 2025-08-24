import type { Config } from 'tailwindcss'
export default <Partial<Config>>{
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: { primary: { 600: '#2563eb' } },
      boxShadow: { soft: '0 6px 20px rgba(0,0,0,0.06)' }
    }
  },
  plugins: [],
}