import Footer from '@/components/Scomponents/footer';
import '@/styles/globals.css';
import '@/styles/globals.module.scss';
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <><Component {...pageProps} />
    <Footer/>
    </>
  )
}
