import { docs } from '@/.source';
import { loader } from 'fumadocs-core/source';
import { icons } from 'lucide-react';
import { createElement } from 'react';

// See https://fumadocs.vercel.app/docs/headless/source-api for more info
export const source = loader({
  // it assigns a URL to your pages
  baseUrl: '/docs',
  source: docs.toFumadocsSource(),
  icon(icon) {
    switch (icon) {
      case 'cpu':
        return createElement(icons.Cpu, { color: '#799EFF' });
      case 'newspaper':
        return createElement(icons.Newspaper);
      case 'microscope':
        return createElement(icons.Microscope, { color: '#799EFF' });
    }

  },
});
