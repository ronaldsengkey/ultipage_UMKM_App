
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

import {FaChevronRight, } from 'react-icons/fa';
const useStyles = makeStyles((theme) => ({
    root: {
      justifyContent: 'space-between',
      display:'flex',
      paddingLeft:'16px',
      paddingRight:'11px',
      paddingBottom:'16px',
      paddingTop:'16px',
      borderBottom: 'solid',
      borderBottomColor: '#E6E6E6 ',
      borderBottomWidth: 'thin',
      color:'#5D5D5D',
      fontSize: '14px'
    },
      icon: {
        alignSelf:'flex-end'
      },
  }));
export default function categoryRibbon(props) {
    const classes = useStyles();
  
    return (<div className={classes.root} onClick={props.onClick}>
      
      {props.name}
        <FaChevronRight className={classes.icon} />
    </div>);
  }

