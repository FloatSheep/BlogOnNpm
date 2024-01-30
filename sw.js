const NPM_REGISTRY_BASE_URL = "https://registry.npmmirror.com/";
const packageName = "fsl-blog";

self.addEventListener("install", (event) => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
  // 判断请求是否需要通过NPM镜像获取
  const shouldHandleFetch = event.request.url.startsWith(self.location.origin) && !event.request.url.includes('sw.js');

  if (shouldHandleFetch) {
    let url = new URL(event.request.url);
    let relPath = url.pathname; // 获取相对路径

    // 检测路径是否以斜杠结尾，如果是，则视为对目录的请求，自动加上`index.html`
    if (relPath.endsWith('/')) {
      relPath += 'index.html'; // 改为指向默认文件
    }

    const npmPath = `${NPM_REGISTRY_BASE_URL}${packageName}/latest/files${relPath}`;

    event.respondWith(
      fetch(npmPath).then(response => {
        if (!response.ok) {
          throw new Error('NPM mirror response not ok.');
        }
        // 处理CORS
        return corsResponse(response);
      }).catch(error => {
        console.error('Failed to fetch from NPM mirror:', error.message);
        return fetch(event.request); // 备用方案直接请求原始路径
      })
    );
  }
});

// 处理cors的函数，根据实际情况可能需要调整
function corsResponse(response) {
  const headers = new Headers(response.headers);
  headers.set('Access-Control-Allow-Origin', '*');
  headers.set('Access-Control-Allow-Methods', 'GET, HEAD, POST, OPTIONS');
  headers.set('Access-Control-Allow-Headers', 'Content-Type');

  return new Response(response.body, {
    status: response.status,
    headers: headers
  });
}
