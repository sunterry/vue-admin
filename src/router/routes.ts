import { RouteConfig } from 'vue-router';
import Layout from '../layout';
import demo from './modules/demo';

const auth = { auth: true };

// 主框架内
const frameIn: RouteConfig[] = [
  {
    path: '/',
    redirect: { name: 'index' },
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'index',
        component: () => import(/* webpackChunkName: 'index' */ '@/views/index/index.vue'),
      },
      {
        path: 'refresh',
        name: 'refresh',
        meta: {
          hidden: true,
        },
        component: {
          beforeRouteEnter(to, from, next) {
            next((vm) => vm.$router.replace(from.fullPath));
          },
          render: (h) => h(),
        },
      },
      {
        path: 'redirect/:route*',
        name: 'redirect',
        meta: {
          hidden: true,
        },
        component: {
          beforeRouteEnter(to, from, next) {
            next((vm) => vm.$router.replace(JSON.parse(from.params.route)));
          },
          render: (h) => h(),
        },
      },
    ],
  },
  demo,
];

// 主框架外
const frameOut: RouteConfig[] = [
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: 'login' */'@/views/login/login'),
  },
];

// 页面错误路由列表
const errorPage: RouteConfig[] = [
  {
    path: '/error401',
    name: 'error401',
    component: () => import(/* webpackChunkName: "error401" */ '../views/error/error401.vue'),
  },
  {
    path: '*',
    name: 'error404',
    component: () => import(/* webpackChunkName: "error404" */ '../views/error/error404.vue'),
  },
];

// 侧边栏菜单路由列表
export const menuRoutesList = frameIn;

// 所有路由
export default [
  ...frameIn,
  ...frameOut,
  ...errorPage,
];
