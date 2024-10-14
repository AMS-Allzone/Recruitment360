/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      width: {
        '4.5/6': '81.596667%',  // 5.5 divided by 6 is roughly 91.67%
      },
      boxShadow: {
        '3xl': '0 0px 60px -15px rgba(0, 0, 0, 0.2)',
        'icon':'0 0px 60px -15px rgba(0, 0, 0, 0.9)'
      },
      scale:{
        "102":"1.02",
      }
    },
    
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.scrollbar-hidden': {
          'scrollbar-width': 'none', /* Firefox */
          '-ms-overflow-style': 'none', /* Internet Explorer and Edge */
        },
        '.scrollbar-hidden::-webkit-scrollbar': {
          display: 'none', /* Safari and Chrome */
        },
      });
    },
  ],
};
