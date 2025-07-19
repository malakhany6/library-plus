
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'C:/Program Files/Git/library-plus/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Program%20Files/Git/library-plus"
  },
  {
    "renderMode": 2,
    "route": "/Program%20Files/Git/library-plus/about-portal"
  },
  {
    "renderMode": 2,
    "route": "/Program%20Files/Git/library-plus/flip-card"
  },
  {
    "renderMode": 2,
    "route": "/Program%20Files/Git/library-plus/ai-tools"
  },
  {
    "renderMode": 2,
    "route": "/Program%20Files/Git/library-plus/photo-glope"
  },
  {
    "renderMode": 2,
    "route": "/Program%20Files/Git/library-plus/login"
  },
  {
    "renderMode": 2,
    "route": "/Program%20Files/Git/library-plus/signup"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 2549, hash: '64fb9c635256d260485e43a98b02aeb0d1c310bb2e9cbef89cdf27367e050fdd', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1981, hash: '90403c607c1ebaa03112e7e75f236bb529262bef8fffe19a0fa4da8c760d256f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-J5YELR6F.css': {size: 78270, hash: '4dx+SDqij5c', text: () => import('./assets-chunks/styles-J5YELR6F_css.mjs').then(m => m.default)}
  },
};
