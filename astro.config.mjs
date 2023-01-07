import { defineConfig } from 'astro/config';
import vue from "@astrojs/vue";
import image from "@astrojs/image";

export default defineConfig({
  site: 'https://fyodor.io/',
  integrations: [vue(), image()],
  markdown: {
    syntaxHighlight: 'prism',
  }
});
