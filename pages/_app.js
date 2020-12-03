import '../styles/globals.css'
import "../components/Header.scss";

import "../components/Layout.scss";
import "../components/index.scss";
import "../components/NavBar.scss";
import "../components/NavButton.scss";
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const defaultTheme = createMuiTheme({
  typography: {
    fontSize: 14
  },
  palette: {
    // background: {
    //   default: '#EFEFEF'
    // },
    primary: {
      main: '#18A6AB',
    },
  }
})

function MyApp({ Component, pageProps }) {
  return (
    <MuiThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Component {...pageProps} />
    </MuiThemeProvider>
  )
}

export default MyApp
