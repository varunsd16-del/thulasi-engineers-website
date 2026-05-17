/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'primary': '#E11D2E',
        'primaryHover': '#C1121F',
        'dark': '#0F172A',
        'darkSoft': '#1F2937',
        'light': '#F8FAFC',
        'border': '#E2E8F0',
        'text': '#334155',
        'muted': '#64748B',
        // Keeping 'brand' aliases for backward compatibility with existing components
        'brand': {
          'red': '#E11D2E',
          'dark': '#0F172A',
          'muted': '#64748B',
        }
      },
      fontFamily: {
        'sans': ['Poppins', 'Inter', 'sans-serif'],
        'display': ['Poppins', 'sans-serif'],
        'body': ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 10px 30px rgba(0,0,0,0.05)',
        'hover': '0 15px 40px rgba(0,0,0,0.08)',
      },
      borderRadius: {
        'xl': '14px',
        '2xl': '18px',
      },
    },
  },
  plugins: [],
}
