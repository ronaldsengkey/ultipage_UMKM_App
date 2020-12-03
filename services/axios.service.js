import { axiosGetCancellable } from 'helpers/axios.helper';

const axiosConfig = {
  baseURL: process.env.API_BASE_URL,
  timeout: 30000
}

export const Logs = async () => {
  axiosConfig.headers = {
    signature: 'signature',
    token: 'token',
    param: 'all'
  }
  const results = await axiosGetCancellable(`log/log/`, axiosConfig);
  if (!results) {
    console.log('Canceled')
  } else {
    return results.data.data
  }
}

export const DetailPartner = async (id) => {
  axiosConfig.headers = {
    signature: process.env.SIGNATURE,
    param: JSON.stringify({ 'partnerId': id })
  }
  const results = await axiosGetCancellable(`/outlet/ultipage/partner/`, axiosConfig);
  if (!results) {
    console.log('Canceled')
  } else {
    return results.data
  }
}

export const Products = async (id, page) => {
  console.log('get page', page);
  axiosConfig.headers = {
    signature: process.env.SIGNATURE,
    param: JSON.stringify({
      'partnerId': id,
      'limit': 3,
      'page': page
    })
  }
  const results = await axiosGetCancellable(`/outlet/ultipage/product/`, axiosConfig);
  if (!results) {
    console.log('Canceled')
  } else {
    return results.data
  }
}

export const EncryptLink = async (id) => {
  axiosConfig.headers = {
    signature: process.env.SIGNATURE,
    param: JSON.stringify({ 'id': id })
  }
  const results = await axiosGetCancellable(`/outlet/ultipage/encryptlink/`, axiosConfig);
  if (!results) {
    console.log('Canceled')
  } else {
    return results.data
  }
}

export const DecryptLink = async (id) => {
  axiosConfig.headers = {
    signature: process.env.SIGNATURE,
    param: JSON.stringify({ 'id': id })
  }
  const results = await axiosGetCancellable(`/outlet/ultipage/decryptlink/`, axiosConfig);
  if (!results) {
    console.log('Canceled')
  } else {
    return results.data
  }
}
