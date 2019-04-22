import { RouteConfig } from 'vue-router';
import { IRouteItem } from '@/interface/router/routeTypes';

import Home from '../views/Home.vue';

export const staticRoutes: IRouteItem[] & RouteConfig[] = [
  {
    path: '/',
    name: '_index',
    redirect: { name: 'home' },
    component: () => import(/* webpackChunkName: "home" */ '../views/home/home.vue'),
    meta: {
      title: 'layout布局页面',
    },
  },
  {
    path: '/login',
    name: 'login',
    meta: {
      title: '登录',
    },
    component: () => import(/* webpackChunkName: "login" */ '../views/login/login'),
  },
  {
    path: '/error401',
    name: 'error401',
    meta: {
      title: '页面无权限',
    },
    component: () => import(/* webpackChunkName: "error401" */ '../views/error/error401.vue'),
  },
  {
    path: '*',
    name: 'error404',
    meta: {
      title: '页面中找不到',
    },
    component: () => import(/* webpackChunkName: "error404" */ '../views/error/error404.vue'),
  },
];

export const dynamicRoutes: IRouteItem[] & RouteConfig[] = [
  {
    path: '/home',
    name: 'home',
    component: () => import(/* webpackChunkName: 'home' */ '../layout/index'),
    meta: {
      title: '首页',
    },
  },
  {
    path: '/about',
    name: 'about',
    meta: {
      title: '页面中找不到',
    },
    component: () => import(/* webpackChunkName: "about" */ '../views/about/about.vue'),
  },
  {
    path: '/components',
    name: 'components',
    meta: {
      title: '组件',
    },
    children: [
      {
        path: 'button',
        name: 'button',
        meta: {
          title: '按钮',
        },
        component: () => import(/* webpackChunkName: 'button' */ '../views/button/button.vue'),
      },
    ],
  },
];

export const routes: RouteConfig[] = [...dynamicRoutes, ...staticRoutes];

