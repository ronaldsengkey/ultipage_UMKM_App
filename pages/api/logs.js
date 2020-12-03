// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Logs } from 'services/axios.service';

export default async (req, res) => {
  const results = await Logs()
  if (results)
  res.send(results)
}
