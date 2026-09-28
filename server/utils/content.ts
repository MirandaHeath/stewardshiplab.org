import { comarkContent } from 'comark-content';
import fs from 'comark-content/sources/fs';
import { withSnapshot } from 'comark-content/sources/snapshot';
import rangi from 'comark/plugins/rangi';
import { githubLight } from 'rangi/themes';

export const content = comarkContent({
  source: withSnapshot(
    fs('./content'),
    () => import('nitropack/runtime').then(({ useStorage }) => useStorage('assets:comark').get('default/snapshot.json')),
    () => import('nitropack/runtime').then(({ useStorage }) => useStorage('assets:comark').get('default/manifest.json')),
  ),
  markdown: {
    plugins: [
      rangi({ theme: githubLight }),
    ],
  },
});
