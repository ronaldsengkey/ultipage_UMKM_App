// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { EncryptLink } from 'services/axios.service';

export default async ({ query }, res) => {
  const results = await EncryptLink(query.id)
  console.log('results', results)
  if (results.responseCode === '200') {
    res.send({url: results.data})
  } else {
    res.send({error: 'Failed to generate URL'})
  }
}
