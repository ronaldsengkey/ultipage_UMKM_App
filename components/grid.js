import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
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
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
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
  }

  
}));

export default function NestedGrid() {
  const classes = useStyles();

  function FormRow() {
    return (
      <React.Fragment>
        <Grid item xs={4}>
          <Paper className={classes.paper}><img src='https://images-na.ssl-images-amazon.com/images/I/51cc84hBwRL.jpg'className={classes.Media} />
          
          </Paper>
          <p className={classes.bottomText}>hehehehe</p>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}><img src='https://images-na.ssl-images-amazon.com/images/I/51cc84hBwRL.jpg'className={classes.Media} />
          
          </Paper>
          <p className={classes.bottomText}>hehehehe</p>
        </Grid><Grid item xs={4}>
          <Paper className={classes.paper}><img src='https://images-na.ssl-images-amazon.com/images/I/51cc84hBwRL.jpg'className={classes.Media} />
          
          </Paper>
          <p className={classes.bottomText}>hehehehe</p>
        </Grid>
      </React.Fragment>
    );
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={1} className={classes.grids}>
        <Grid container item xs={12}>
          <FormRow />
        </Grid>
        <Grid container item xs={12}>
          <FormRow />
        </Grid>
        <Grid container item xs={12}>
          <FormRow />
        </Grid>
      </Grid>
    </div>
  );
}