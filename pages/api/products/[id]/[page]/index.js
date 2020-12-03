// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Products } from 'services/axios.service';

export default async ({ query: { id, page } }, res) => {
  const results = await Products(parseInt(id), parseInt(page))
  if (results) {
    res.send(results.data)
  } else {
    res.send(results.responseCode)
  }
}
