import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';


const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      backgroundColor: '#EFEFEF',
      height:'30px',
      paddingLeft:'15px',
      paddingBottom:'5px',
      paddingTop:'6px',
      fontSize: '14px',
      fontWeight: 'bold'
    },
  }));
  
export default function categoryRibbon(props) {
    const classes = useStyles();
  
    return (<div className={classes.root}>
    {props.name}
    </div>);
  }

