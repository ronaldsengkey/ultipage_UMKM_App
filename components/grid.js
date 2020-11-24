import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

const useStyles = makeStyles((theme) => ({
  root: {
  },
  grids: {
    width: '100%',
    alignContent:'center',
    alignItems:'center',
    textAlign:'center',
    margin:0
  },
  paper: {
    // padding: theme.spacing(1),
    
    margin:'auto',
    textAlign: 'center',
    height: '100px',
    width: '100px',
    color: theme.palette.text.secondary,
  },
  Media: {
    height: '100px',
    width: '100px',
    objectFit: 'cover',
    borderRadius:'4px'
  },
  bottomText: {
    marginBlockEnd: '10px',
  marginBlockStart: '5px',
  textAlign: 'center'
  }
  ,
  topText: {
    color: '#5D5D5D',
    paddingLeft:'10px',
    fontWeight: 'bold'
  }

  
}));

export default function NestedGrid(props) {
  const classes = useStyles();
  

  return (
<div className={classes.root}>
<p className={classes.topText}>{props.title}</p>
      <GridList cellHeight='auto'  className={classes.gridList}>
        {(props.data||[]).map((a) => (
          <Grid item xs={4} flexBasis="0%" flexGrow="0">
          <Paper className={classes.paper}><img src={a.path[0].f2} className={classes.Media} />
          
          </Paper>
        <p className={classes.bottomText}>{a.name}</p>
        </Grid>
        ))}
      </GridList>
    </div>
  );
}

export function PartnerGrid(props) {
  const classes = useStyles();

  return (
<div className={classes.root}>
<p className={classes.topText}>{props.title}</p>
      <GridList cellHeight={180} className={classes.gridList}>
        {(props.data||[]).map((a) => (
          <Grid item xs={4}>
          <Paper className={classes.paper}><img src={a.partner_logo} className={classes.Media} />
          
          </Paper>
        <p className={classes.bottomText}>{a.partner_name}</p>
        </Grid>
        ))}
      </GridList>
    </div>
  );
}