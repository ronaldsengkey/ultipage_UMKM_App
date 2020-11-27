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


export const GetCategory = async () => {
  axiosConfig.headers = {
    signature: process.env.SIGNATURE,
  }
  const results = await axiosGetCancellable(`category`, axiosConfig);
  if (!results) {
    console.log('Canceled')
  } else {
    return results.data.data
  }
}

export const GetCategoryMost = async () => {
  axiosConfig.headers = {
    signature: process.env.SIGNATURE,
  }
  const results = await axiosGetCancellable(`mostsearched`, axiosConfig);
  if (!results) {
    console.log('Canceled')
  } else {
    return results.data.data
  }
}

export const Search = async (keyword) => {
  axiosConfig.headers = {
    signature: process.env.SIGNATURE,
    param:JSON.stringify({category:keyword})
  }
  const results = await axiosGetCancellable(`product`, axiosConfig);
  if (!results) {
    console.log('Canceled')
  } else {
    return results.data
  }
}

export const GetCity = async () => {
  axiosConfig.headers = {
    signature: process.env.SIGNATURE,
  }
  const results = await axiosGetCancellable(`city`, axiosConfig);
  if (!results) {
    console.log('Canceled')
  } else {
    return results.data.data
  }
}

export const getPromo = async ({cityId}) => {
  axiosConfig.headers = {
    signature: process.env.SIGNATURE,
    param:JSON.stringify({cityId:cityId})
  }
  const results = await axiosGetCancellable(`promo`, axiosConfig);
  if (!results) {
    console.log('Canceled')
  } else {
    return results.data.data
  }
}

export const getHomeSection = async ({cityId}) => {
  axiosConfig.headers = {
    signature: process.env.SIGNATURE,
    param:JSON.stringify({cityId:cityId})
  }
  const results = await axiosGetCancellable(`partnerhome`, axiosConfig);
  if (!results) {
    console.log('Canceled')
  } else {
    return results.data
  }
}

export const DetailPartner = async (id) => {
  if (id != 'null') {
    axiosConfig.headers = {
      signature: process.env.SIGNATURE,
      param: JSON.stringify({ 'partnerId': id })
    }
    const results = await axiosGetCancellable(`partner`, axiosConfig);
    if (!results) {
      console.log('Canceled')
    } else {
      return results.data
    }
  } else {
    return 'id partner required'
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
  const results = await axiosGetCancellable(`product`, axiosConfig);
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
  const results = await axiosGetCancellable(`encryptlink`, axiosConfig);
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
  const results = await axiosGetCancellable(`decryptlink`, axiosConfig);
  if (!results) {
    console.log('Canceled')
  } else {
    return results.data
  }
}
