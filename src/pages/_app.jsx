import '@/app/globals.css';
import { ClientProvider } from '@/components/functions';

export default function App({ Component, pageProps }) {
  return (
    <ClientProvider>
      <Component {...pageProps} />
    </ClientProvider>
  )
}