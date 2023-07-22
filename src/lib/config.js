import { cache } from 'react';
import { size } from 'polished';

export const getBaseUrl = cache(() =>
  process.env.VERCEL_URL
    ? `https://bifrost.vercel.app`
    : `http://localhost:${process.env.PORT ?? 3000}`,
);

export const iconSize = {
  ...size("clamp(1.75rem, 10vw, 2.22rem)"),
};

export const dataKey = process.env.NEXT_PUBLIC_DATA_KEY

export const meta = {
  name: "microdotmatrix",
  url: "https://isomorphicdesign.com",
  title: "Next.js 13.4 + My Toolkit",
  description: "Next.js v13.4 Starter Kit with my toolkit of choice.",
  keywords: [
    "Next.js",
    "React",
    "Tailwind CSS",
    "Server Components",
  ],
  authors: [
    {
      name: "microdotmatrix",
      url: "https://isomorphicdesign.com",
    },
  ],
  links: {
    github: "https://github.com/microdotmatrix",
    linkedin: "https://www.linkedin.com/in/therealjohnpolinski",
  }
}