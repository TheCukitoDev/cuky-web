import {
  defineConfig,
  defineDocs,
  frontmatterSchema,
  metaSchema,
} from "fumadocs-mdx/config";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
import { remarkInstall } from "fumadocs-docgen";
import { remarkTypeScriptToJavaScript } from "fumadocs-docgen/remark-ts2js";
import { rehypeCodeDefaultOptions } from "fumadocs-core/mdx-plugins";
import { remarkMdxMermaid } from "fumadocs-core/mdx-plugins";

const remarkInstallOptions = {
  persist: {
    id: "fumadocs-docgen-remark-install-id-cuky",
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
      [
        remarkMath,
        remarkInstall,
        remarkInstallOptions,
        remarkTypeScriptToJavaScript,
        remarkMdxMermaid,
      ],
    ],
    rehypeCodeOptions: {
      ...rehypeCodeDefaultOptions,
      themes: {
        light: "github-light",
        dark: "github-dark",
      },
      transformers: [...(rehypeCodeDefaultOptions.transformers ?? [])],
    },
    rehypePlugins: (v) => [rehypeKatex, ...v],
  },
});
