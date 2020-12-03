import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      width: '100%',
      backgroundColor: theme.palette.background.paper,
    },
    semua: {
        marginTop:'10px',
        marginBottom:'10px',
        borderRadius:'20px',
        backgroundColor:'#18A6AB',
        marginLeft: '10px',
      },
      textWhite: {
        color:'white',
        marginTop: '6px',
  marginBottom: '5px',
  marginRight: '16px',
  marginLeft: '17px',
      },
      indicator: {
        backgroundColor: '#FFF'
      }
  }));
  function a11yProps(index) {
    return {
      id: `scrollable-prevent-tab-${index}`,
      'aria-controls': `scrollable-prevent-tabpanel-${index}`,
      style:{textTransform: 'none'}
    };
  }
export default function categoryRibbon(props) {
    const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
    return (<Tabs
    value={value}
    onChange={handleChange}
    variant="scrollable"
    scrollButtons="off"
    indicatorColor="primary"
    classes={{ indicator: classes.indicator }}
  >
      <div className={classes.semua}  variant="contained">
      <p className={classes.textWhite}>Semua</p>
    </div>
    {props.listCategory.map((a, i) => (
    
    <Tab label={a['name']} {...a11yProps(i)} onClick={()=>document.location.href ="/search/"+a['name']}/>
 ))} 
  </Tabs>);
  }

