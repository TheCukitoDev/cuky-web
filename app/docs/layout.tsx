import { DocsLayout, DocsLayoutProps } from "fumadocs-ui/layouts/docs";
import { baseOptions } from "@/lib/layout.shared";
import { source } from "@/lib/source";
import { GitHub } from "../components/logos";

const options: DocsLayoutProps = {
  tree: source.pageTree,
  ...baseOptions(),
  links: [
    {
      type: "button",
      text: "cuky-db/cuky",
      url: "https://github.com/cuky-db/cuky",
      external: true,
      icon: <GitHub />,
    },
  ],
};

export default function Layout({ children }: LayoutProps<"/docs">) {
  return <DocsLayout {...options}>{children}</DocsLayout>;
}
