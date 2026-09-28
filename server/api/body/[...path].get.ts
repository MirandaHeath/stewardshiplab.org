import { content } from '../../utils/content';
import { normalisePath, splitBlocks } from '../../utils/posts';

export default defineEventHandler(async (event) => {
  const path = normalisePath(getRouterParam(event, 'path') ?? '');
  const index = Number(getQuery(event).block ?? 0);
  const page = await content.get(path);
  const block = page && splitBlocks(page.nodes)[index];
  if (!block || !('nodes' in block)) {
    throw createError({ status: 404 });
  }
  return block.nodes;
});
