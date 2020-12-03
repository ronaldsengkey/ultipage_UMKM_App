import React, { useState, useRef, useCallback, useMemo, memo } from 'react';
import { AppBar, Toolbar, IconButton, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ShareIcon from '@material-ui/icons/Share';
import PopperMenu from 'components/shared/popper';
import { SHARE, OPTIONS } from 'constants/partner-menu.constant';

const colorIcon = '#5D5D5D';
const useStyles = makeStyles(() => ({
  toolbar: {
    minHeight: 'inherit',
  },
  iconButton: {
    padding: 5,
    color: colorIcon,
  },
  iconButtonDisabled: {
    color: `${colorIcon} !important`,
  }
}))

const PartnerHeaderBar = ({ partnerId, partnerName }) => {
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState({moreVert: false, share: false});
  const [link, setLink] = useState(null);
  const moreVertRef = useRef(null);
  const shareRef = useRef(null);

  console.log('render PartnerHeaderBar')

  const handleToggle = (menuName) => {
    if (menuName === 'moreVert') {
      setIsOpen({...isOpen, moreVert: true})
    } else {
      // setIsOpen({...isOpen, share: true})
      // generateLink()
    }
  }

  const handleClose = useCallback((menuName) => {
    if (menuName === 'moreVert') {
      setIsOpen({...isOpen, moreVert: false})
    } else {
      // setIsOpen({...isOpen, share: false})
    }
  }, [])

  const generateLink = async () => {
    if (!link) {
      const req = await fetch(`/api/generate-link/encryptlink/${partnerId}`);
      const newData = await req.json();
      setLink(newData.url ? window.location.origin + `/share/${newData.url}` : null)
      if (newData.url) {
        Print.postMessage(window.location.origin + `/share/${newData.url}`);
      }
    } else {
      Print.postMessage(window.location.origin + `/share/${link}`);
    }
  }


  return (
    <AppBar position="relative" elevation={0} color="transparent">
      <Toolbar disableGutters classes={{root: classes.toolbar}}>
        <Box width={1} padding={1} display="flex" justifyContent="flex-end" alignItems="center">
          <IconButton
            ref={shareRef}
            // disabled={isOpen.share}
            // onClick={() => handleToggle('share')}
            onClick={() => generateLink()}
            classes={{
              root: classes.iconButton,
              disabled: classes.iconButtonDisabled
            }}
          >
            <ShareIcon />
          </IconButton>

          <IconButton
            ref={moreVertRef}
            disabled={isOpen.moreVert}
            onClick={() => handleToggle('moreVert')}
            classes={{
              root: classes.iconButton,
              disabled: classes.iconButtonDisabled
            }}
          >
            <MoreVertIcon />
          </IconButton>

          <PopperMenu menuItem={OPTIONS} isOpen={isOpen.moreVert} ref={moreVertRef} onClose={() => handleClose('moreVert')} />
          {/* <PopperMenu
            menuItem={SHARE}
            isOpen={isOpen.share}
            ref={shareRef}
            onClose={() => handleClose('share')}
            add={{
              url: link,
              partnerName: partnerName
            }}
          /> */}
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default memo(PartnerHeaderBar)