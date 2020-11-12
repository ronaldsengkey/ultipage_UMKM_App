import '../styles/globals.css'
import "../components/Header.scss";

import "../components/Layout.scss";
import "../components/index.scss";
import "../components/NavBar.scss";
import "../components/NavButton.scss";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
