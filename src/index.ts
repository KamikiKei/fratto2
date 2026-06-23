export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    let pathname = url.pathname === '/' ? '/index.html' : url.pathname;

    try {
      // アセットから直接ファイルを取得
      const response = await env.ASSETS.fetch(
        new Request(new URL(pathname, url.origin), request)
      );

      if (response.status === 404) {
        // SPA の場合、存在しないパスは index.html にフォールバック
        return await env.ASSETS.fetch(
          new Request(new URL('/index.html', url.origin), request)
        );
      }

      return response;
    } catch (e) {
      // エラー時は index.html にフォールバック
      return await env.ASSETS.fetch(
        new Request(new URL('/index.html', url.origin), request)
      );
    }
  },
};
