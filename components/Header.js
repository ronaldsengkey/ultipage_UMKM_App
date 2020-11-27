import React from 'react';
import { makeStyles, AppBar, Toolbar, Typography, Button, Box } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { ReactSVG } from 'react-svg';
import MenuItem from '@material-ui/core/MenuItem';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { useRouter } from 'next/router'

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
  title:{
    fontSize:'16', fontWeight:"bold",marginLeft:'5px',marginTop:'2px'
  }
}))

export default function Navbar(props) {
  const classes = useStyles();
  const [age, setAge] = React.useState('');
  const [city, setCity] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
    props.onChangeCity(event.target.value);
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
      
        <Box textAlign='center' paddingTop='30px' marginBottom="-20px">
          <img src="img/ultipage.png" style={{height: '20px'}} />
        </Box>
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
          {props.cities.map((e, i)=><MenuItem key={i} value={e.id}>{e.name}</MenuItem>)}
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
      
        <Box textAlign='center' paddingTop='30px' marginBottom="-20px">
          <img src="img/ultipage.png" style={{height: '20px'}} />
        </Box>
<div className={classes.asd}></div>
    </AppBar>
  );
}

export function SearchResultHeader(props) {
  const classes = useStyles();
  const router = useRouter()


  return (
    <AppBar
      position="sticky"
      color="default"
      
    >
      <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu"  onClick={() => router.back()} size='small'>
            <FaChevronLeft />
          </IconButton>
          <Typography className={classes.title}>
          {props.title}
          </Typography>
        </Toolbar>  
    </AppBar>
  );
}