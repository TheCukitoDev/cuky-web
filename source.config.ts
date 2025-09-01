import {
  defineConfig,
  defineDocs,
  frontmatterSchema,
  metaSchema,
} from 'fumadocs-mdx/config';
import { remarkInstall } from 'fumadocs-docgen';

const remarkInstallOptions = {
  persist: {
    id: 'fumadocs-docgen-remark-install-id-cuky',
  },
};

// You can customise Zod schemas for frontmatter and `meta.json` here
// see https://fumadocs.dev/docs/mdx/collections#define-docs
export const docs = defineDocs({
  docs: {
    schema: frontmatterSchema,
  },
  meta: {
    schema: metaSchema,
  },
});

export default defineConfig({
  mdxOptions: {
    remarkPlugins: [
      [remarkInstall, remarkInstallOptions]
    ]
  },
});
