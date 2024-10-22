/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      animation: {
        spin: 'spin 1.5s linear infinite', // Customize duration to adjust the spinning speed
      },
      transitionTimingFunction: {
        'in-out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)', // Adding a custom easing for a nice smooth effect
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    
  },
  plugins: [],
};
