
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/about-portal"
  },
  {
    "renderMode": 2,
    "route": "/flip-card"
  },
  {
    "renderMode": 2,
    "route": "/ai-tools"
  },
  {
    "renderMode": 2,
    "route": "/photo-glope"
  },
  {
    "renderMode": 2,
    "route": "/login"
  },
  {
    "renderMode": 2,
    "route": "/signup"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 2516, hash: '3d2a62de60032fadd94e078ce6b6c78ba72bbd68b65227828f3e54c67b1243b1', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1948, hash: '6dec6f172efb8ade26b50a3e3d34a99d5961807318cc593e9b33d15cba94cb70', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'ai-tools/index.html': {size: 31727, hash: 'e57ae71659b31783b7ea13fe58cef04ec3bc18787ac3cbf53f9fbc79ae60978a', text: () => import('./assets-chunks/ai-tools_index_html.mjs').then(m => m.default)},
    'flip-card/index.html': {size: 31611, hash: 'd97484d42faba27a92db19dfe4276af1130d5d7a9e3c4c7662322aa79bbd56a4', text: () => import('./assets-chunks/flip-card_index_html.mjs').then(m => m.default)},
    'about-portal/index.html': {size: 34910, hash: 'a7bd5b5174442e314cb7489a0bede21a8b7d2ce089cec78a1f77c3d500028d22', text: () => import('./assets-chunks/about-portal_index_html.mjs').then(m => m.default)},
    'index.html': {size: 49514, hash: '8f0e109059af8ac878538314cfc9c097617d5df4a136e8c9aed8ae601f65d204', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 30299, hash: 'e004fedf06f619b7959339db3bda1cb542625bac204dabf30d3e0dacc8a51390', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'signup/index.html': {size: 33221, hash: '76d36b5e444592ecfb6fb7ef24d58d267025745aaaf4c97ac1bddbb2d498d89e', text: () => import('./assets-chunks/signup_index_html.mjs').then(m => m.default)},
    'photo-glope/index.html': {size: 25846, hash: '85019d87d37afd3ed4b59e73b8900ab6954838a3c564d60b361dca177d4263a8', text: () => import('./assets-chunks/photo-glope_index_html.mjs').then(m => m.default)},
    'styles-J5YELR6F.css': {size: 78270, hash: '4dx+SDqij5c', text: () => import('./assets-chunks/styles-J5YELR6F_css.mjs').then(m => m.default)}
  },
};
