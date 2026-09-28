import { listCollection } from '../utils/posts';

export default defineEventHandler(async () => {
  const posts = await Promise.all(['tools', 'reports', 'ideas'].map(listCollection));
  return posts
    .flat()
    .filter(post => post.featuredOnHomepage)
    .sort((a, b) => String(b.date).localeCompare(String(a.date)));
});
