
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
    'index.csr.html': {size: 2549, hash: '1a030c8661812e188e76d1b95341836c89316f5c1cc1f32484a4bbf2692e1754', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1981, hash: '3e6e5fc2c18cb06e70f93be610286bb534ba8f546808e2f67206c6b1fb906c00', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-J5YELR6F.css': {size: 78270, hash: '4dx+SDqij5c', text: () => import('./assets-chunks/styles-J5YELR6F_css.mjs').then(m => m.default)}
  },
};
