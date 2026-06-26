// Cloudflare Workers script to serve static assets
// The assets are built by Vite and placed in the dist directory

export default {
  async fetch(request: Request, env: any, ctx: any): Promise<Response> {
    const url = new URL(request.url);
    let pathname = url.pathname;

    // Add index.html for root path
    if (pathname === '/') {
      pathname = '/index.html';
    }

    // Try to get the static file from assets
    let response = await env.ASSETS.fetch(new Request(new URL(pathname, request.url), request));

    // If not found and not a file with extension, try index.html (for SPA routing)
    if (response.status === 404 && !pathname.includes('.')) {
      response = await env.ASSETS.fetch(new Request(new URL('/index.html', request.url), request));
    }

    return response;
  }
};
