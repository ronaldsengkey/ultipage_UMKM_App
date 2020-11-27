// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Search } from 'services/axios.service';

export default async (req, res) => {
  const results = await Search()
  if (results)
  res.send(results)
}
