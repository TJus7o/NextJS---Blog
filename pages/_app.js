import Nav from '../components/nav'
import Footer from '../components/footer'

import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return (
  <>
  <Nav />
  <Component {...pageProps} />
  <Footer />
  </>

  )
}

export default MyApp
