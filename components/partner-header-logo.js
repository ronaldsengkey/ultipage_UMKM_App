import React, { memo } from 'react';
import { Box, Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(14),
    height: theme.spacing(14),
    border: `7px solid ${theme.palette.background.default}`,
    [theme.breakpoints.down('sm')]: {
      width: theme.spacing(11.5),
      height: theme.spacing(11.5),
      border: `5px solid ${theme.palette.background.default}`,
    },
  },
  transform: {
    transform: 'translate(-50%, -50%)',
  }
}));

const PartnerHeaderLogo = ({ logo }) => {
  const classes = useStyles();
  console.log('render PartnerHeaderLogo')

  return (
    <Box position="absolute" top="100%" left="50%" zIndex="9" className={classes.transform}>
      <Avatar src={logo} classes={{root: classes.large}} />
    </Box>
  )
}

export default memo(PartnerHeaderLogo)