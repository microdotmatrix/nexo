import './globals.css'
import 'react-notion-x/src/styles.css'

import Link from 'next/link';

import { Suspense } from 'react';
import { ClientProvider, Fonts, StyledJsxRegistry, ErrorBoundary } from '@/components/functions';
import { ThemeProvider, ThemeSwitch } from '@/components/theme';
import { Icon } from '@/components/ui';
import { meta } from '@/lib/config';

export const metadata = {
  title: {
    default: `${meta.title} | ${meta.url}`,
    template: `%s | ${meta.title} | ${meta.url}`
  },
  description: meta.description,
  keywords: meta.keywords,
  themeColor: meta.themeColor,
  colorScheme: "dark light",
  viewport: {
    width: "device-width",
    initialScale: 1,
    minimumScale: 1,
  },
  creator: meta.authors[0].name,
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  }
}

export default function RootLayout({ children, modal }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Fonts />
      </head>
      <body>
        <ErrorBoundary>
          <StyledJsxRegistry>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
              <ClientProvider>
                <div className="fixed z-50 flex items-center top-4 left-4">
                  <Link href="/">
                    <Icon icon="simple-icons:googlephotos" className="text-2xl" />
                  </Link>
                </div>
                <div className="fixed z-50 flex flex-row items-center gap-1 top-4 right-4">
                  <ThemeSwitch />
                </div>
                <Suspense>
                  <main className="relative flex flex-col flex-1 w-full h-full">
                    {children}
                  </main>
                  {modal}
                </Suspense>
              </ClientProvider>
            </ThemeProvider>
          </StyledJsxRegistry>
        </ErrorBoundary>
      </body>
    </html>
  )
}
