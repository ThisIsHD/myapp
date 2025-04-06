import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cyan: {
          400: '#00f0ff',
        },
        purple: {
          500: '#9d00ff',
        },
      },
    },
  },
  plugins: [],
};

export default config;