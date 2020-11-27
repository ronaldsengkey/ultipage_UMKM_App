// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { GetCategoryMost } from 'services/axios.service';

export default async (req, res) => {
  const results = await GetCategoryMost()
  if (results)
  res.send(results)
}
