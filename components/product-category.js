import React, { memo } from 'react';
import { Card, CardActionArea, CardContent, Container, Box, Button, Typography, Grid, LinearProgress } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Image from 'material-ui-image';
import { fontSizeDownMd } from 'styles/style';

const paddingDownMd = '8px';

const useStyles = makeStyles((theme) => ({
  card: {
    display: 'flex',
    flexDirection: 'column',
    borderRadius: 0,
    height: '100%',
    boxShadow: '0px 0px 3px 0px rgba(0,0,0,0.05)',
  },
  cardContent: {
    flexGrow: 1,
    [theme.breakpoints.down('sm')]: {
      padding: paddingDownMd,
    },
  },
  // cardMedia: {
  //   [theme.breakpoints.up('lg')]: {
  //     height: 200,
  //   },
  // },
  button: {
    color: theme.palette.text.secondary,
    padding: 0,
    '&:hover': {
      background: 'none'
    },
    '& span': {
      display: 'block',
      textAlign: 'left',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: fontSizeDownMd - 3,
    }
  },
  cardTypo: {
    [theme.breakpoints.down('sm')]: {
      fontSize: fontSizeDownMd,
      lineHeight: 1.2
    }
  },
  cardBox: {
    padding: theme.spacing(0, 2, 2),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(0, paddingDownMd, paddingDownMd),
    },
  },
}))

const ProductCategory = ({ products, onOpen }) => {
  const classes = useStyles();
  const isSmall = useMediaQuery(useTheme().breakpoints.down('xs'));
  const isMedium = useMediaQuery(useTheme().breakpoints.down('md'));

  console.log('render ProductCategory')
  
  const handleOnOpen = (product) => {
    onOpen(product)
  }

  return (
    <Container>
      <Box paddingTop={3}>
        <Grid container spacing={isSmall ? 1 : isMedium ? 2 : 4}>
          {products.map((product, i) => (
            <Grid item key={i} xs={4} sm={3}>
              <Card classes={{root: classes.card}}>
                <CardActionArea onClick={() => handleOnOpen(product)}>
                  <Image
                    src={product.path[0].f2}
                    imageStyle={{objectFit: 'cover'}}
                    disableSpinner
                  />
                </CardActionArea>
                <CardContent classes={{root: classes.cardContent}}>
                  <Typography variant="body1" component="p" classes={{root: classes.cardTypo}}>
                    {product.name}
                  </Typography>
                </CardContent>
                <Box width={1} className={classes.cardBox}>
                  <Button disableRipple size="small" onClick={() => handleOnOpen(product)} classes={{root: classes.button}}>
                    SEE DETAILS
                  </Button>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  )
}

export default memo(ProductCategory)