import type { Handle } from '@sveltejs/kit';
import { renderToString } from 'stencil-ssr-poc/hydrate/index';

export const handle = (async ({ event, resolve }) => {
  const response = await resolve(event, {
    transformPageChunk: async ({ html }) => {
      return renderToString(html).then(results => results.html);
    },
  });
  return response;
}) satisfies Handle;
