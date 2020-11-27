// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { GetCategory } from 'services/axios.service';

export default async (req, res) => {
  const results = await GetCategory()
  if (results)
  res.send(results)
}
