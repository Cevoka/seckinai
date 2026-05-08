import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        background: '#141315',
        surface: '#141315',
        'surface-dim': '#141315',
        'surface-container': '#201f21',
        'surface-container-low': '#1c1b1d',
        'surface-container-high': '#2a2a2b',
        'surface-container-highest': '#353436',
        'surface-bright': '#3a393b',
        'on-surface': '#e5e1e3',
        'on-surface-variant': '#c8c5cd',
        'outline-variant': '#47464c',
        outline: '#929097',
        primary: '#c6c4df',
        'primary-fixed': '#e2e0fc',
        'primary-fixed-dim': '#c6c4df',
        'primary-container': '#1a1a2e',
        'on-primary': '#2f2e43',
        'on-primary-container': '#83829b',
        'on-primary-fixed': '#1a1a2e',
        'on-primary-fixed-variant': '#45455b',
        'inverse-primary': '#5d5c74',
        secondary: '#deb7ff',
        'secondary-fixed': '#f1dbff',
        'secondary-fixed-dim': '#deb7ff',
        'secondary-container': '#6b13af',
        'on-secondary': '#4a007f',
        'on-secondary-container': '#d4a5ff',
        'on-secondary-fixed': '#2d0050',
        'on-secondary-fixed-variant': '#680eac',
        tertiary: '#e5b5ff',
        'tertiary-fixed': '#f4d9ff',
        'tertiary-fixed-dim': '#e5b5ff',
        'tertiary-container': '#30004c',
        'on-tertiary': '#481965',
        'on-tertiary-container': '#a270c0',
        'on-tertiary-fixed': '#30004b',
        'on-tertiary-fixed-variant': '#60327d',
        'inverse-surface': '#e5e1e3',
        'inverse-on-surface': '#313032',
        'surface-tint': '#c6c4df'
      },
      fontFamily: {
        headline: ['var(--font-montserrat)', 'sans-serif'],
        body: ['var(--font-manrope)', 'sans-serif'],
        label: ['var(--font-space-grotesk)', 'sans-serif']
      },
      maxWidth: {
        'container': '1280px'
      },
      spacing: {
        'gutter': '24px'
      }
    }
  },
  plugins: []
};

export default config;
