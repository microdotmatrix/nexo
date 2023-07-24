import {
  defineConfig,
  presetAttributify,
  presetIcons,
  // presetWebFonts,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss';

export default defineConfig({
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '1.618rem',
      screens: {
        '2xl': '1440px',
        '3xl': '1920px',
      }
    },
    fontFamily: {
      sans: ['var(--font-sans), Archivo, sans-serif'],
      serif: ['var(--font-serif), Space Grotesk, serif'],
      mono: ['var(--font-mono), Space Mono, monospace'],
      heading: ['var(--font-heading), Syne, sans-serif'],
      display: ['var(--font-display), Big Shoulders Display, sans-serif'],
    },
    fontSize: {
      base: '112.5%',
      xs: ['clamp(0.8rem, 0.17vw + 0.76rem, 0.89rem)', {
        lineHeight: '1.618',
        letterSpacing: '-0.01em',
      }],
      sm: ['clamp(1rem, 0.917rem + 0.42vw, 1.25rem)', {
        lineHeight: '1.58',
        letterSpacing: '-0.005em',
      }],
      md: ['clamp(1.25rem, 0.61vw + 1.1rem, 1.58rem)', {
        lineHeight: '1.5',
        letterSpacing: '0',
      }],
      lg: ['clamp(1.56rem, 1vw + 1.31rem, 2.11rem)', {
        lineHeight: '1.33',
        letterSpacing: '0.01em',
      }],
      xl: ['clamp(1.95rem, 1.56vw + 1.56rem, 2.81rem)', {
        lineHeight: '1.25',
        letterSpacing: '0.02em',
      }],
      '2xl': ['clamp(2.24rem, 2.38vw + 1.85rem, 3.45rem)', {
        lineHeight: '1.11',
        letterSpacing: '0.02em',
      }],
      '3xl': ['clamp(3.05rem, 3.54vw + 2.17rem, 5rem)', {
        lineHeight: '1.07rem',
        letterSpacing: '0.025em',
      }],
      '4xl': ['clamp(4.20rem, 4.81vw + 2.66rem, 5.8rem)'],
    },
    extend: {
      colors: {
        primary: "#e6edf3",
        border: "#30363d",
        secondary: "#0d1117",
        success: "#56d364",
        error: "#ff0000",
        warning: "#f8514966",
        alert: "#f85149",

        darker: "#232222",
        asphalt: "#55565A",
        rock: "#606166",
        slab: "#b4b4c3",
        nectar: "#f7b334",
        khaki: "#e2d0a6",
        lighter: "#d0d5e0",
        smoke: "#eef2f5",
      }
    },
  },
  presets: [
    presetUno({
      dark: 'media',
    }),
    presetAttributify(),
    presetIcons({
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle',
      },
    }),
    // presetWebFonts({
    //   provider: 'google',
    //   fonts: {
    //     archivo: 'Archivo',
    //     'space-grotesk': 'Space Grotesk',
    //     'space-mono': 'Space Mono',
    //     syne: 'Syne',
    //     'big-shoulders-display': 'Big Shoulders Display',
    //   }
    // })
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ]
});