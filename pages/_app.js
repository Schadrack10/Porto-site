import Layout from '../components/Layout'
import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function MyApp({ Component, pageProps , children }) {
  return(
    <Layout children={children}>
      <Component {...pageProps} />

    </Layout>
  ) 
}

export default MyApp
