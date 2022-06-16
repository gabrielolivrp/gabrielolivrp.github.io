import type { AppProps } from 'next/app'
import { ThemeProvider } from 'contexts'
import Head from 'next/head'
import Header from 'components/Header'
import Footer from 'components/Footer'
import 'styles/globals.css'

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title>Gabriel Augusto</title>
    </Head>
    <ThemeProvider>
      <div className="h-screen flex justify-center px-4">
        <div className="w-full flex flex-col items-center">
          <Header />
          <Component {...pageProps} />
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  </>
)

export default App
