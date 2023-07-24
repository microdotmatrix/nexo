import './globals.css'
import 'react-notion-x/src/styles.css'

import Link from 'next/link';

import { Suspense } from 'react';
import { ClientProvider, Fonts, StyledJsxRegistry } from '@/components/functions';
import { ThemeProvider, ThemeSwitch } from '@/components/theme';

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Fonts />
      </head>
      <body>
        <StyledJsxRegistry>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <ClientProvider>
              <div className="fixed z-50 flex items-center top-4 left-4">
                <Link href="/">
                  <span className="i-simple-icons-googlephotos text-2xl" />
                </Link>
              </div>
              <div className="fixed z-50 flex flex-row items-center gap-1 top-4 right-4">
                <ThemeSwitch />
              </div>
              <Suspense>
                <main className="relative flex flex-col flex-1 w-full h-full">
                  {children}
                </main>
              </Suspense>
            </ClientProvider>
          </ThemeProvider>
        </StyledJsxRegistry>
      </body>
    </html>
  )
}
