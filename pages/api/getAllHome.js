// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { GetAllHome } from 'services/axios.service';

export default async (req, res) => {
  const results = await GetAllHome()
  res.send([results[0].data.data,results[1].data.data,results[2].data,])
}
