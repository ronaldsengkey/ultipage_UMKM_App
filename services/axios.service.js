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
