import React, { memo } from 'react';
import { Container, Typography, Breadcrumbs, Box, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import Link from 'next/link';

const useStyles = makeStyles((theme) => ({
  typography: {
    textTransform: 'uppercase',
    fontSize: 14,
    fontWeight: '300',
    cursor: 'pointer',
    color: theme.palette.text.primary,
    [theme.breakpoints.down('sm')]: {
      fontSize: 11.5,
    },
  },
  // breadcrumbs: {
  //   '& li:last-child h6': {
  //     fontWeight: '300'
  //   }
  // },
  typographyName: {
    [theme.breakpoints.down('sm')]: {
      fontSize: 28,
    },
  },
  button: {
    borderRadius: 0,
    background: 'white',
    paddingTop: 13,
    paddingBottom: 13,
    marginTop: 5,
    marginBottom: 20,
    letterSpacing: 1,
    '&:hover': {
      background: 'white',
    },
    [theme.breakpoints.down('md')]: {
      marginBottom: 15,
    },
  },
  startIcon: {
    position: 'absolute', 
    left: 32,
    '& .MuiSvgIcon-root': {
      width: 28,
      height: 28
    }
  },
  link: {
    color: theme.palette.text.primary,
    textDecoration: 'none'
  }
}));

const PartnerContent = ({ partner_name, description, social_media, categories }) => {
  const classes = useStyles();
  const socialMedia = JSON.parse(social_media);
  const paddingYElement = 2.5;

  console.log('render PartnerContent')

  return (
    <Container maxWidth={false}>
      {categories != '404' &&
      <Box display="flex" justifyContent="center" paddingTop={paddingYElement}>
        <Breadcrumbs classes={{root: classes.breadcrumbs}}>
          {categories.map((category, i) => (
          <Link key={i} href="/">
            <Typography variant="h6" classes={{root: classes.typography}}>{category.name}</Typography>
          </Link>
          ))}
        </Breadcrumbs>
      </Box>
      }

      <Typography variant="h4" align="center" classes={{root: classes.typographyName}}>
        <Box fontWeight={500} paddingTop={paddingYElement}>{partner_name}</Box>
      </Typography>

      {description &&
      <Container maxWidth="sm" disableGutters>
        <Box paddingTop={paddingYElement}>
          <Typography variant="body1" align="center" color="textSecondary">{description}</Typography>
        </Box>
      </Container>
      }

      {socialMedia && (
      <Container maxWidth="xs">
        <Box paddingTop={paddingYElement}>
          {socialMedia.facebook &&
          <Button
            variant="contained"
            fullWidth
            startIcon={<FacebookIcon />}
            classes={{
              root: classes.button,
              startIcon: classes.startIcon
            }}
            onClick={() => Insta.postMessage(`fb://profile/${socialMedia.facebook}/`)}
          >
            FACEBOOK
          </Button>
          }

          {socialMedia.instagram &&
          <Button
            variant="contained"
            fullWidth
            startIcon={<InstagramIcon />}
            classes={{
              root: classes.button,
              startIcon: classes.startIcon
            }}
            onClick={() => Insta.postMessage(`instagram://user?username=${socialMedia.instagram}`)}
          >
            INSTAGRAM
          </Button>
          }

          {socialMedia.whatsapp &&
          <Button
            variant="contained"
            fullWidth
            startIcon={<WhatsAppIcon />}
            classes={{
              root: classes.button,
              startIcon: classes.startIcon
            }}
            // onClick={() => Insta.postMessage(`https://wa.me/${socialMedia.whatsapp.charAt(0) === '0' ? '62'+ socialMedia.whatsapp.substring(1) : socialMedia.whatsapp}?text=halo%20admin%20mau%20tanya`)}
            onClick={() => Insta.postMessage(`whatsapp://send?phone=${socialMedia.whatsapp.charAt(0) === '0' ? '62'+ socialMedia.whatsapp.substring(1) : socialMedia.whatsapp}&text=halo%20admin%20mau%20tanya`)}
          >
            WHATSAPP
          </Button>
          }
        </Box>
      </Container>
      )}
    </Container>
  )
}

export default memo(PartnerContent)