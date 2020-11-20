import React from 'react';
import Head from 'next/head';
import Navbar from 'components/navbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const defaultTheme = createMuiTheme({
  typography: {
    fontSize: 14
  },
  palette: {
    background: {
      default: '#EFEFEF'
    },
    primary: {
      main: '#18A6AB',
    },
  }
})

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Head>
        <title>Ulti Page</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <MuiThemeProvider theme={defaultTheme}>
        <CssBaseline />
        {/* <Navbar /> */}
        <Component {...pageProps} />
      </MuiThemeProvider>
    </React.Fragment>
  )
}

export default MyApp
