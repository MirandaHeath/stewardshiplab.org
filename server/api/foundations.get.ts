import { DISPLAY_YEARS, ORG_IDS, URL_PREFIX_PROPUBLICA_ORG } from '../../app/data/propublica';
import { getPropublicaInfo } from '../utils/propublica';

export default defineEventHandler(async () => {
  const results = [];
  const queue = ORG_IDS.map((orgId, index) => ({ orgId, index }));
  // ProPublica resets connections under high concurrency.
  const workers = Array.from({ length: 4 }, async () => {
    for (let item = queue.shift(); item; item = queue.shift()) {
      try {
        const pageBody = await $fetch<string>(URL_PREFIX_PROPUBLICA_ORG + item.orgId, {
          headers: { accept: 'text/html' },
          retry: 3,
          retryDelay: 1000,
        });
        results[item.index] = await getPropublicaInfo(item.orgId, pageBody, DISPLAY_YEARS);
      }
      catch (err) {
        console.warn(`Could not fetch data for org ${item.orgId}; removing this org`, err);
      }
    }
  });
  await Promise.all(workers);
  return results.filter(d => d);
});
