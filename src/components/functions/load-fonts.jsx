"use client"

import {
  Syne,
  Archivo,
  Big_Shoulders_Display,
  Space_Grotesk,
  Space_Mono,
} from 'next/font/google';
import { useServerInsertedHTML } from 'next/navigation';

const archivo = Archivo({
  subsets: ['latin'],
  variable: '--font-archivo',
  display: 'swap',
});

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  display: 'swap',
});

const bigShoulders = Big_Shoulders_Display({
  subsets: ['latin'],
  variable: '--font-big-shoulders',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

const spaceMono = Space_Mono({
  subsets: ['latin'],
  variable: '--font-space-mono',
  display: 'swap',
  weight: ['400', '700']
});

const Fonts = () => {
  useServerInsertedHTML(() => {
    return (
      <style
        dangerouslySetInnerHTML={{
          __html: `
          :root {
            --font-sans: ${archivo.style.fontFamily};
            --font-serif: ${spaceGrotesk.style.fontFamily};
            --font-display: ${bigShoulders.style.fontFamily};
            --font-heading: ${syne.style.fontFamily};
            --font-mono: ${spaceMono.style.fontFamily};
          }
        `,
        }}
      />
    );
  });
 
  return null;
};

export default Fonts;