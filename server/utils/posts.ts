import { content } from './content';

type Node = string | [string, Record<string, unknown>, ...Node[]];

export const COLLECTIONS = ['tools', 'reports', 'ideas', 'media'] as const;

const CLIENT_COMPONENTS = new Set(['foundations-table']);

const LIST_FIELDS = {
  posts: ['title', 'description', 'authors', 'date', 'category', 'featured', 'featuredOnHomepage', 'hidden'],
  media: ['title', 'description', 'guests', 'hosts', 'date', 'image', 'url', 'venue'],
};

/**
 * Normalise frontmatter so `date` is always an ISO 8601 date-time string without an offset.
 */
export function normaliseData(data: Record<string, unknown>) {
  if (data.date === undefined) {
    return data;
  }
  return { ...data, date: new Date(String(data.date)).toISOString().slice(0, 19) };
}

export function pick(data: Record<string, unknown>, keys: string[]) {
  const result: Record<string, unknown> = {};
  for (const key of keys) {
    if (data[key] !== undefined) {
      result[key] = data[key];
    }
  }
  return result;
}

export async function listCollection(collection: string) {
  const fields = collection === 'media' ? LIST_FIELDS.media : LIST_FIELDS.posts;
  const pages = await content.list();
  return pages
    .filter(page => page.path.startsWith(`/${collection}/`))
    .map(page => ({ path: page.path, ...pick(normaliseData(page.data), fields) }))
    .sort((a, b) => String(b.date ?? '').localeCompare(String(a.date ?? '')));
}

export function normalisePath(path: string) {
  return '/' + path.replace(/^\/+|\/+$/g, '');
}

/**
 * Split top-level nodes into runs of static Markdown and standalone client components.
 */
export function splitBlocks(nodes: Node[]) {
  const blocks: Array<{ nodes: Node[] } | { component: string }> = [];
  for (const node of nodes) {
    if (Array.isArray(node) && CLIENT_COMPONENTS.has(node[0])) {
      blocks.push({ component: node[0] });
      continue;
    }
    const last = blocks.at(-1);
    if (last && 'nodes' in last) {
      last.nodes.push(node);
    }
    else {
      blocks.push({ nodes: [node] });
    }
  }
  return blocks;
}
