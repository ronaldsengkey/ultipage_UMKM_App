import { axiosGetCancellable } from 'helpers/axios.helper';
import axios from 'axios';

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

//API_BASE_URL=https://sandbox.api.ultipay.id:8443/outlet/ultipage/
export const GetAllHome = async ({cityId}) => {
  const requestOne = axios.get("city",{ headers: { signature: process.env.SIGNATURE },baseURL: process.env.API_BASE_URL });
const requestTwo = axios.get("promo",{ headers: { signature: process.env.SIGNATURE,param:JSON.stringify({cityId:cityId}) },baseURL: process.env.API_BASE_URL });
const requestThree = axios.get("partnerhome",{ headers: { signature: process.env.SIGNATURE,param:JSON.stringify({cityId:cityId}) },baseURL: process.env.API_BASE_URL });

 return await axios
  .all([requestOne, requestTwo, requestThree])
  .then(
    axios.spread((...responses) => {
      const responseOne = responses[0];
      const responseTwo = responses[1];
      const responesThree = responses[2];

      // use/access the results
      // console.log(responseOne.data, responseTwo.data, responesThree.data);
      console.log("ini mau return");
      return responses;
    })
  )
  .catch(errors => {
    // react on errors.
    console.error(errors);
  });
}

export const GetCity = async () => {
  axiosConfig.headers = {
    signature: process.env.SIGNATURE,
  }
  const results = await axiosGetCancellable(`city`, axiosConfig);
  console.log(results);
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
  console.log(results);
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
  console.log(results);
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