import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import { Asterisk } from "lucide-react";

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
    links: [],
  };
}
