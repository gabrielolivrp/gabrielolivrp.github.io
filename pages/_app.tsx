import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import Head from 'next/head'

import 'styles/globals.css'
import { SwitchTheme } from '@/components'
import { useIsMounted } from '@/hooks'

const App = ({ Component, pageProps }: AppProps) => {
  const isMounted = useIsMounted();
  if (!isMounted) return null;

  return (
    <>
      <Head>
        <title>Gabriel Augusto</title>
      </Head>
      <ThemeProvider
        attribute="class"
        defaultTheme="light"
        enableSystem
        disableTransitionOnChange
      >
        <Component {...pageProps} />
        <div className="fixed bottom-5 right-5">
          <SwitchTheme />
        </div>
      </ThemeProvider>
    </>
  )
}

export default App
