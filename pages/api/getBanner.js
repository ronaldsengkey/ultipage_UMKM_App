// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getPromo } from 'services/axios.service';

export default async (req, res) => {
  const results = await getPromo()
  if (results)
  res.send(results)
}
