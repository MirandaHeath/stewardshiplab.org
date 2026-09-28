import { content } from '../../utils/content';
import { normaliseData, normalisePath, splitBlocks } from '../../utils/posts';

export default defineEventHandler(async (event) => {
  const path = normalisePath(getRouterParam(event, 'path') ?? '');
  const page = await content.get(path);
  if (!page) {
    throw createError({ status: 404 });
  }
  return {
    ...normaliseData(page.data),
    path: page.path,
    blocks: splitBlocks(page.nodes).map(block => 'nodes' in block ? 'markdown' : block.component),
  };
});
