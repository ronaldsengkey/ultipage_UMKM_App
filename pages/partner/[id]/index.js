import React, { useState, useCallback, useMemo } from 'react';
import { useRouter } from 'next/router';
import { Container, Box, Typography, CircularProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { DetailPartner, Products } from 'services/axios.service';
import useInfiniteScroll from 'react-infinite-scroll-hook';
import PartnerHeader from 'components/partner-header';
import PartnerHeaderBar from 'components/partner-bar';
import PartnerContent from 'components/partner-content';
import ProductCategory from 'components/product-category';
import ModalImg from 'components/modal-img';

const useStyles = makeStyles((theme) => ({
  typo: {
    color: theme.palette.text.secondary,
  },
  typoProductCategory: {
    [theme.breakpoints.down('sm')]: {
      fontSize: 18,
    },
  },
}))

const Partner = ({ responseCode, dataPartnerInit, dataProductsInit }) => {
  const classes = useStyles();
  const router = useRouter();
  const { id } = router.query;
  const [ open, setOpen ] = useState(false);
  const [ page, setPage ] = useState(2);
  const [ loading, setLoading ] = useState(false);
  const [ products, setProducts] = useState(dataProductsInit);
  const [ modalContent, setModalContent] = useState({
    onlyImg: false,
    img: null,
    name: null,
    descriptions: null
  });
  console.log('dataPartnerInit', page);

  const handleFetchMoreData = async () => {
    if (page) {
      console.log('page', page);
      setLoading(true)
      const results = await fetch(`/api/products/${id}/${page}`)
      const resultsData = await results.json()
      if (resultsData.length > 0) {
        setPage(page + 1)
        setProducts(products.concat(resultsData))
        setLoading(false)
      } else {
        setPage(false)
      }
    }
  }

  const handleOnOpen = useCallback((product) => {
    setOpen(true)
    setModalContent({
      onlyImg: false,
      img: product.path[0].f2,
      name: product.name,
      descriptions: product.descriptions
    })
  }, [])

  const handleZoomHeader = useCallback(() => {
    setOpen(true)
    setModalContent({
      onlyImg: true,
      img: dataPartnerInit.promo_path
    })
  }, [])

  const infiniteRef = useInfiniteScroll({
    loading,
    hasNextPage: page ? true : false,
    onLoadMore: handleFetchMoreData
  })

  const modalMemoized = useMemo(() => {
    return <ModalImg open={open} onClose={() => setOpen(false)} content={modalContent} />
  }, [open])

  return (
    <Container maxWidth="lg" disableGutters>
    {responseCode === '200' ? (
      <>
        <PartnerHeader img={dataPartnerInit.promo_path} partner_logo={dataPartnerInit.partner_logo} zoomHeader={handleZoomHeader} />
        <PartnerHeaderBar partnerId={id} partnerName={dataPartnerInit.partner_name} />
        <PartnerContent
          partner_name={dataPartnerInit.partner_name}
          description={dataPartnerInit.description}
          social_media={dataPartnerInit.social_media}
          categories={dataPartnerInit.partner_category}
        />
        <Box marginY={7} ref={infiniteRef}>
          <Typography gutterBottom variant="h6" component="p" align="center" classes={{root: classes.typoProductCategory}}>PRODUCT CATEGORY</Typography>
          {products && products.length > 0 ? (
          <>
            <ProductCategory
              products={products}
              onOpen={handleOnOpen}
            />
            <Box paddingTop={5} display={loading && page ? 'flex' : 'none'} justifyContent="center">
              <CircularProgress size={28} thickness={4.8} />
            </Box>
          </>
          ) : (
            <Typography variant="overline" display="block" align="center" classes={{root: classes.typo}}>Tidak ada produk</Typography>
          )}
        </Box>

        {modalMemoized}
      </>
    ) : (
      <Box paddingY={10}>
        <Typography variant="overline" display="block" align="center">Page not found :(</Typography>
      </Box>
    )}
    </Container>
  )
}

Partner.getInitialProps = async ({ query: { id } }) => {
  const result = await DetailPartner(id);
  const resultProducts = await Products(id, 1);

  if (result) {
    if(result.data)
    var dataPartner = result.data; //Success
    var dataProducts = resultProducts.data;
  } else {
    var dataPartner = {
      message: result.responseMessage,
    };
    var dataProducts = '';
  }

  return {
    responseCode: result.responseCode,
    dataPartnerInit: dataPartner,
    dataProductsInit: dataProducts
  }
}

export default Partner
