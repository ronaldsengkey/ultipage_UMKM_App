import React from 'react';
import { Modal, Backdrop, Fade, Paper, Box, Typography, Divider, IconButton } from '@material-ui/core/';
import Image from 'material-ui-image';
import { makeStyles } from '@material-ui/core/styles';
import CancelIcon from '@material-ui/icons/Cancel';

const useStyles = makeStyles((theme) => ({
  modal: {
    overflowY: 'scroll',
  },
  box: {
    width: '100%',
    minHeight: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backdrop: {
    position: 'absolute',
    zIndex: 1,
  },
  paper:props => ({
    position: 'relative',
    width: '77%',
    maxWidth: props.onlyImg ? '1024px' : '420px',
    borderRadius: 0,
    zIndex: 2
  }),
  typographyName: {
    [theme.breakpoints.down('sm')]: {
      fontSize: 18,
    },
  },
  typographyDetail: {
    [theme.breakpoints.down('sm')]: {
      fontSize: 13,
    },
  },
  typographyDesc: {
    color: theme.palette.text.secondary,
    [theme.breakpoints.down('sm')]: {
      fontSize: 14,
    },
  },
  divider: {
    margin: theme.spacing(2, 0, 0)
  },
  closeButton: {
    position: 'absolute',
    bottom: '100%',
    left: '100%',
    padding: 0,
    zIndex: 2,
    color: '#FFF'
  }
}))

const ModalImg = ({ open, content, onClose }) => {
  const onlyImg = content.onlyImg;
  const classes = useStyles({ onlyImg });

  console.log('render ModalImg')

  const handleClose = () => {
    onClose()
  }

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={open ? classes.modal : ''}
      open={open}
      onClose={handleClose}
      hideBackdrop
    >
      <Fade in={open}>
        <Box paddingTop={4} paddingBottom={2} className={classes.box} position="relative">
          <Backdrop
            open={open}
            classes={{root: classes.backdrop}}
            onClick={handleClose}
            transitionDuration={300}
          />
          <Paper classes={{root: classes.paper}}>
            <IconButton classes={{root: classes.closeButton}} onClick={handleClose} disableRipple>
              <CancelIcon />
            </IconButton>
            {content.img || content.name || content.descriptions ? (
            <>
              <Image
                src={content.img}
                imageStyle={{height: 'inherit', position: 'relative'}}
                style={{paddingTop: 0}}
              />
              {!content.onlyImg &&
              <Box padding={2}>
                <Typography variant="h6" classes={{root: classes.typographyName}}>{content.name}</Typography>
                <Divider classes={{root: classes.divider}} />
                <Box paddingY={2}>
                  <Typography variant="body2" component="p" classes={{root: classes.typographyDetail}} gutterBottom>Detail</Typography>
                  <Typography variant="body1" component="p" classes={{root: classes.typographyDesc}}>{content.descriptions}</Typography>
                </Box>
                <Divider />
              </Box>
              }
            </>
            ) : (
              <Box paddingY={10}>
                <Typography variant="body1" component="p" align="center" classes={{root: classes.typographyDesc}}>Produk tidak ditemukan</Typography>
              </Box>
            )}
          </Paper>
        </Box>
      </Fade>
    </Modal>
  )
}

export default ModalImg