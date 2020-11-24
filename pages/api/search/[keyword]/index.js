// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Search } from 'services/axios.service';

export default async ({ query: { keyword } }, res) => {
  const results = await Search(keyword)
  if (results)
  res.send(results)
}
