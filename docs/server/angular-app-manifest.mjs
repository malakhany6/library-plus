
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
    'index.csr.html': {size: 2549, hash: '52a06470b16cf942a3efa5303d79e495481510cf5ea2f21b9538772bdb8e9a82', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1981, hash: 'de4721cdaf8ad602a07806419ce6ede6a5aae3526b05ca724785149be896aae5', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-J5YELR6F.css': {size: 78270, hash: '4dx+SDqij5c', text: () => import('./assets-chunks/styles-J5YELR6F_css.mjs').then(m => m.default)}
  },
};
