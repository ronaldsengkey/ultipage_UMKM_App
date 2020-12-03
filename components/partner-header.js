import React, { memo } from 'react';
import { Paper, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PartnerHeaderLogo from 'components/partner-header-logo';
import ZoomInIcon from '@material-ui/icons/ZoomIn';

const useStyles = makeStyles((theme) => ({
  root: props => ({
    minHeight: 320,
    background: `#FFF url(${props.img}) no-repeat center center`,
    backgroundSize: 'cover',
    position: 'relative',
    zIndex: '0',
    [theme.breakpoints.down('sm')]: {
      minHeight: 240,
    },
    [theme.breakpoints.down('xs')]: {
      minHeight: 200,
    },
  }),
  buttonHeader: {
    background: 'rgba(0,0,0,.3)',
    color: '#FFF',
    position: 'absolute',
    right: 10,
    bottom: 10,
    minWidth: 'inherit',
    padding: 3,
    '&:hover': {
      background: 'rgba(0,0,0,.2)',
    }
  }
}));

const PartnerHeader = ({ img, partner_logo, zoomHeader }) => {
  const classes = useStyles({ img });
  console.log('render PartnerHeader')

  const onClickZoomHeader = () => {
    zoomHeader()
  }

  return (
    <Paper
      elevation={0}
      square={true}
      classes={{root: classes.root}}
    >
      <PartnerHeaderLogo logo={partner_logo} />
      {img &&
      <Button
        size="small"
        classes={{root: classes.buttonHeader}}
        onClick={onClickZoomHeader}
      >
        <ZoomInIcon />
      </Button>
      }
    </Paper>
  )
}

export default memo(PartnerHeader)