import Layout from "../components/Layout";
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { SSRProvider } from "react-bootstrap";

function MyApp({ Component, pageProps, children }) {
  return (
    <SSRProvider>
      <Layout children={children}>
        <Component {...pageProps} />
      </Layout>
    </SSRProvider>
  );
}

export default MyApp;
