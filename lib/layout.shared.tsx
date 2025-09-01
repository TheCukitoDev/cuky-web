import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import {
  Asterisk,
  Rocket,
  RadioTower,
  Sigma,
  Sparkle,
  ListCheck,
  Megaphone,
  Newspaper,
  BookOpen,
} from "lucide-react";

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <div className="font-bold text-xl flex items-center gap-1">
          <Asterisk size={48} color="#799EFF" />
          cuky
        </div>
      ),
    },
    // see https://fumadocs.dev/docs/ui/navigation/links
    links: [
      {
        type: "menu",
        text: "Documentation",
        icon: <BookOpen color="#799EFF" />,
        items: [
          {
            text: "Getting Started",
            url: "/docs/core",
            icon: <Rocket color="#799EFF" />,
          },
          {
            text: "API Reference",
            url: "/docs/api",
            icon: <RadioTower color="#799EFF" />,
          },
          {
            text: "Technical Reference",
            url: "/docs/technical",
            icon: <Sigma color="#799EFF" />,
          },
        ],
      },
      {
        type: "menu",
        text: "Blog",
        icon: <Newspaper color="#799EFF" />,
        items: [
          {
            text: "Latest Posts",
            url: "/blog/latest",
            icon: <Sparkle color="#799EFF" />,
          },
          {
            text: "Tutorials",
            url: "/blog/tutorials",
            icon: <ListCheck color="#799EFF" />,
          },
          {
            text: "Announcements",
            url: "/blog/announcements",
            icon: <Megaphone color="#799EFF" />,
          },
        ],
      },
    ],
    githubUrl: "https://github.com/cuky-db/cuky",
  };
}
