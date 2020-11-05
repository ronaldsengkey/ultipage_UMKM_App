import React from 'react';
import Link from 'next/link';
import { makeStyles, AppBar, Toolbar, Typography, Button, Box } from '@material-ui/core';
import { ReactSVG } from 'react-svg';

const useStyles = makeStyles((theme) => ({
  AppBar: {
    boxShadow: '0px 0px 7px 0px rgba(0,0,0,0.2)'
  }
}))

export default function Navbar() {
  const classes = useStyles();

  return (
    <AppBar
      position="sticky"
      color="default"
      classes={{
        root: classes.AppBar
      }}
    >
      <Box paddingTop={3} paddingX={3} display="flex" justifyContent="center">
        <ReactSVG
          src="img/ultimeal-logo.svg"
          beforeInjection={(svg) => {
            svg.setAttribute('style', 'height: 20px')
          }}
        />
        <Box display="flex" justifyContent="center">

        </Box>
      </Box>

      <Toolbar>
        <Typography variant="h6">
          News
        </Typography>
        <Link href="/">
          <a>Login</a>
        </Link>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
}
