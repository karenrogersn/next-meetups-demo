import '../styles/globals.css'
import Layout from '../components/layout/Layout'

//this is the root component that renders all we see in our SPA.
//by wrapping <Component> with <Layout>, we make sure all our pages will be displayed with <Layout> around.

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
  
}

export default MyApp
