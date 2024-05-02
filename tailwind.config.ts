import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        // gradient: 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-bg': `linear-gradient(0deg, '#1C1B1B' 90%, '#2E2E2E' 0%)`,

        // 'bg-hero': "url('/images/bg_hero.jpg')",
      },
      fontFamily: {
        ralewayBlack: ['var(--font-raleway-black)'],
        ralewayBold: ['var(--font-raleway-bold)'],
        ralewayExtrabold: ['var(--font-raleway-extrabold)'],
        ralewayMedium: ['var(--font-raleway-medium)'],
        ralewayRegular: ['var(--font-raleway-regular)'],
        ralewaySemibold: ['var(--font-raleway-semibold)'],
      },
      lineHeight: {
        normal: 'normal',
      },
      colors: {
        primary: '#E6E6E6',
        secondary: '#F2890F',
        light: '#F0F0F0',
        white: '#ffffff',
        btnHover: '#F39425',
        // gray: {
        //   '900': '#1C1B1B',
        //   '800': '#2E2E2E',
        // },
      },
      container: {
        padding: '10px',
        center: true,
        screens: {
          xl: '1100px',
        },
      },
    },
  },
  plugins: [],
};
export default config;
