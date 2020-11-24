
import { getHomeSection } from 'services/axios.service';

export default async ({ query: { cityId } }, res) => {
  const results = await getHomeSection(cityId)
  if (results)
  res.send(results)
}
