import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  locale: { antd: true },
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/two', component: '@/pages/index2' },
    { path: '/products', component: '@/pages/products' },
    { path: '/user/new', component: '@/pages/newuser' },
    { path: '/showtime', component: '@/pages/showtime' },
  ],
});
