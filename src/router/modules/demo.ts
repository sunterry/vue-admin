import { RouteConfig } from 'vue-router';
import Layout from '@/layout';

const auth = { auth: true };

const demo: RouteConfig = {
  path: '/demo',
  name: 'demo',
  meta: { auth },
  redirect: { name: 'page-1' },
  component: Layout,
  children: [
    {
      path: 'page-1',
      name: 'page-1',
      component: () => import(/* webpackChunkName: 'page-1' */ '@/views/demo/page1.vue'),
    },
    {
      path: 'page-2',
      name: 'page-2',
      component: () => import(/* webpackChunkName: 'page-2' */ '@/views/demo/page2.vue'),
    },
    {
      path: 'page-3',
      name: 'page-3',
      component: () => import(/* webpackChunkName: 'page-3' */ '@/views/demo/page3.vue'),
    },
    {
      path: 'page-4',
      name: 'page-4',
      component: () => import(/* webpackChunkName: 'page-3' */ '@/views/demo/page4.vue'),
    },
  ],
};

export default demo;

