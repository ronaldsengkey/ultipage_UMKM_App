import React from 'react';
import { makeStyles, AppBar, Toolbar, Typography, Button, Box } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { ReactSVG } from 'react-svg';
import MenuItem from '@material-ui/core/MenuItem';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const useStyles = makeStyles((theme) => ({
  AppBar: {
    boxShadow: '0px 0px 7px 0px rgba(0,0,0,0.2)'
  },
  Logo123:{
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop:'20px'
  },
  formControl: {
    minWidth: 120,
    height:40
  },
  selectEmpty: {
    fontSize:12
  },
  asd: {
    height:40
  },
}))

export default function Navbar() {
  const classes = useStyles();
  const [age, setAge] = React.useState('');
  const [city, setCity] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const fetchCity = (event) => {
    setAge(event.target.value);
  };

  return (
    <AppBar
      position="sticky"
      color="default"
      classes={{
        root: classes.AppBar
      }}
    >
      
        <Box textAlign='center' paddingTop='10px'><ReactSVG
          src="img/ultimeal-logo.svg"
          beforeInjection={(svg) => {
            svg.setAttribute('style', 'height: 20px')
          }}
          
        /></Box>
<div className={classes.asd}>
      <Toolbar >
        <FormControl className={classes.formControl}>
        <Select
          value={age}
          onChange={handleChange}
          displayEmpty
          className={classes.selectEmpty}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="" disabled>
            Pilih kota
          </MenuItem>
          <MenuItem value={1}>Malang</MenuItem>
          <MenuItem value={2}>Madiun</MenuItem>
          <MenuItem value={3}>Bojonegoro</MenuItem>
          <MenuItem value={4}>Jember</MenuItem>
          <MenuItem value={5}>Pamekasan</MenuItem>
        </Select>
      </FormControl>
      </Toolbar>
      </div>
    </AppBar>
  );
}

export function NavbarSearch() {
  const classes = useStyles();


  return (
    <AppBar
      position="sticky"
      color="default"
      classes={{
        root: classes.AppBar
      }}
    >
      
        <Box textAlign='center' paddingTop='10px'><ReactSVG
          src="img/ultimeal-logo.svg"
          beforeInjection={(svg) => {
            svg.setAttribute('style', 'height: 20px')
          }}
          
        /></Box>
<div className={classes.asd}></div>
    </AppBar>
  );
}

export function SearchByCategoryHeader() {
  const classes = useStyles();


  return (
    <AppBar
      position="sticky"
      color="default"
      classes={{
        root: classes.AppBar
      }}
      
    >
      
        <FaChevronLeft/>
<div className={classes.asd}></div>
    </AppBar>
  );
}