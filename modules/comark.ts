import { writeSnapshots } from 'comark-content/build';
import { defineNuxtModule } from 'nuxt/kit';
import { resolve } from 'node:path';

export default defineNuxtModule({
  meta: {
    name: 'comark',
  },
  setup(_options, nuxt) {
    const dir = resolve(nuxt.options.rootDir, '.content');

    nuxt.options.nitro.serverAssets ||= [];
    nuxt.options.nitro.serverAssets.push({ baseName: 'comark', dir });

    if (nuxt.options.dev || nuxt.options._prepare) {
      return;
    }

    nuxt.hook('nitro:build:before', async () => {
      const { content } = await import(resolve(nuxt.options.serverDir, 'utils/content.ts'));
      await writeSnapshots(content, { dir });
    });
  },
});
