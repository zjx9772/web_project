/**
The routing of this file will not show the layout.
It is an independent new page.
the contents of the file still need to log in to access
 */
import type { AppRouteModule } from '/@/router/types';

// test
// http:ip:port/main-out
export const mainOutRoutes: AppRouteModule[] = [
  {
    path: '/main',
    name: 'MainPage',
    component: () => import('/@/views/demo/main/index.vue'),
    meta: {
      title: 'Main',
      ignoreAuth: true,
    },
  },
  {
    path: '/search',
    name: 'SearchPage',
    component: () => import('/@/views/demo/search/index.vue'),
    meta: {
      title: 'Search',
      ignoreAuth: true,
    },
  },
];

export const mainOutRouteNames = mainOutRoutes.map((item) => item.name);
