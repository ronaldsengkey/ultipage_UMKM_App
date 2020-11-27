// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { GetCity } from 'services/axios.service';

export default async (req, res) => {
  const results = await GetCity()
  if (results)
  res.send(results)
}
