import React from 'react';
import { useRouter } from 'next/router';
import { Box, Typography } from '@material-ui/core';
import { DecryptLink } from 'services/axios.service';

const Share = ({ partnerId }) => {
  const router = useRouter();

  console.log('render Share', partnerId)

  return (
    <Box paddingY={10}>
      <Typography variant="overline" display="block" align="center">Page not found :(</Typography>
    </Box>
  )
}

Share.getInitialProps = async ({ query: { id }, res }) => {
  const result = await DecryptLink(id);
  res.writeHead(302, { Location: `/partner/${result.data}` })
  res.end()
  return {
    partnerId: null
  }
}

export default Share
