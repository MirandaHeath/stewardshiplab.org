import { COLLECTIONS, listCollection } from '../../utils/posts';

export default defineEventHandler((event) => {
  const collection = getRouterParam(event, 'collection')!;
  if (!(COLLECTIONS as readonly string[]).includes(collection)) {
    throw createError({ status: 404 });
  }
  return listCollection(collection);
});
