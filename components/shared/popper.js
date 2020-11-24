import React, { forwardRef, memo } from 'react';
import { MenuItem, ClickAwayListener, Grow, Paper, Popper, MenuList, Typography, ListItemIcon, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from 'react-share';

const useStyles = makeStyles((theme) => ({
  shareIcon: {
    minWidth: 33,
    '& svg': {
      width: '20px',
      height: '20px',
    },
  },
  menuItem: {
    [theme.breakpoints.down('xs')]: {
      minHeight: 'inherit',
    },

  },
}))

const PopperMenu = forwardRef(({ menuItem, isOpen, add = null, onClose }, ref) => {
  const classes = useStyles();

  console.log('render PopperMenu')

  const onClickClose = (event) => {
    if (ref.current && ref.current.contains(event.target)) {
      return
    }
    onClose()
  }

  return (
    <Popper open={isOpen} anchorEl={ref.current} placement="bottom-end" transition>
      {({ TransitionProps }) => (
        <Grow
          {...TransitionProps}
          style={{ transformOrigin: 'center top' }}
        >
          <Paper>
            <ClickAwayListener onClickAway={onClickClose}>
              <MenuList autoFocusItem={isOpen}>
                {menuItem && menuItem.map((menu, i) => (
                  <MenuItem key={i} onClick={onClickClose} classes={{root: classes.menuItem}}>
                    {menu.label === 'Facebook' ? (
                    <FacebookShareButton
                      url={add.url}
                      quote={`Visit Ultipage ${add.partnerName}`}
                      hashtag="ultimeal"
                    >
                      <Box display="flex" alignItems="center">
                        <ListItemIcon classes={{root: classes.shareIcon}}>
                          {menu.icon}
                        </ListItemIcon>
                        <Typography variant="body2">{menu.label}</Typography>
                      </Box>
                    </FacebookShareButton>
                    ) : menu.label === 'Twitter' ? (
                    <TwitterShareButton
                      url={add.url}
                      title={`Visit Ultipage ${add.partnerName}`}
                      via="Ultimeal_id"
                      related={['Ultimeal_id']}
                      hashtags={['ultimeal', 'Ultimeal_id']}
                    >
                      <Box display="flex" alignItems="center">
                        <ListItemIcon classes={{root: classes.shareIcon}}>
                          {menu.icon}
                        </ListItemIcon>
                        <Typography variant="body2">{menu.label}</Typography>
                      </Box>
                    </TwitterShareButton>
                    ) : menu.label === 'WhatsApp' ? (
                    <WhatsappShareButton url={add.url} title={`Visit Ultipage ${add.partnerName}`}>
                      <Box display="flex" alignItems="center">
                        <ListItemIcon classes={{root: classes.shareIcon}}>
                          {menu.icon}
                        </ListItemIcon>
                        <Typography variant="body2">{menu.label}</Typography>
                      </Box>
                    </WhatsappShareButton>
                    ) : (
                      <>
                        {menu.icon &&
                        <ListItemIcon>
                          {menu.icon}
                        </ListItemIcon>
                        }
                        <Typography variant="body2">{menu.label}</Typography>
                      </>
                    )}
                  </MenuItem>
                ))}
              </MenuList>
            </ClickAwayListener>
          </Paper>
        </Grow>
      )}
    </Popper>
  )
})

export default memo(PopperMenu)