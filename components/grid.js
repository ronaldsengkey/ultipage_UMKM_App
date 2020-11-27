import React from 'react';
import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';
import { Card, Container, Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { fontSizeDownMd } from 'styles/style';
import Image from 'material-ui-image';

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
  cardTypo: {
    textAlign: 'center',
    paddingTop: '8px',
    [theme.breakpoints.down('sm')]: {
      fontSize: fontSizeDownMd,
      lineHeight: 1.2
    }
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
    fontWeight: 'bold'
  }

  
}));

export default function NestedGrid(props) {
  const classes = useStyles();
  

  return (
    <Container>
      <p className={classes.topText}>{props.title}</p>
      <Grid container spacing={2}>
        {(props.data||[]).map((a, i) => (
          <Link href={{
            pathname: `/partner/${a.partner_id}`,
            query: {
                  img: a.path[0].f2,
                  name: a.name,
                  descriptions: a.descriptions
                },
              }
            }
            key={i}
          >
            <Grid item xs={4}>
              <Card>
                <Image
                  src={a.path[0].f2}
                  imageStyle={{objectFit: 'cover'}}
                  disableSpinner
                />
              </Card>
              <Typography variant="body1" component="p" classes={{root: classes.cardTypo}}>
                {a.name}
              </Typography>
            </Grid>
          </Link>
        ))}
      </Grid>
    </Container>
  );
}

export function PartnerGrid(props) {
  const classes = useStyles();

  return (
<Container>
  <p className={classes.topText}>{props.title}</p>
      <Grid container spacing={2}>
        {(props.data||[]).map((a, i) => (
          <Link href={`/partner/${a.partner_id}`} key={i}>
            <Grid item xs={4}>
              <Card>
                <Image
                  src={a.partner_logo}
                  imageStyle={{objectFit: 'cover'}}
                  disableSpinner
                />
              </Card>
              <Typography variant="body1" component="p" classes={{root: classes.cardTypo}}>
                {a.partner_name}
              </Typography>
            </Grid>
          </Link>
        ))}
      </Grid>
    </Container>
  );
}