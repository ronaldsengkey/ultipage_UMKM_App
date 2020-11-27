
import { getPromo } from 'services/axios.service';

export default async ({ query: { cityId } }, res) => {
  const results = await getPromo(cityId)
  if (results)
  res.send(results)
}
