import type { RouteRecordRaw } from 'vue-router'

const Placeholder = { template: '<div />' }

export const storybookRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Ecommerce',
    component: () =>
      import('../src/views/Dashboard/EcommerceView.vue'),
    meta: { title: 'eCommerce' },
  },
  {
    path: '/calendar',
    name: 'Calendar',
    component: Placeholder,
    meta: { title: 'Calendar' },
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Placeholder,
    meta: { title: 'Profile' },
  },
  {
    path: '/compact-tables',
    name: 'Compact Tables',
    component: Placeholder,
    meta: { title: 'Compact Tables' },
  },
  {
    path: '/relaxed-tables',
    name: 'Relaxed Tables',
    component: Placeholder,
    meta: { title: 'Relaxed Tables' },
  },
  {
    path: '/advance-tables',
    name: 'Advance Tables',
    component: Placeholder,
    meta: { title: 'Advance Tables' },
  },
  {
    path: '/line-chart',
    name: 'Line Chart',
    component: Placeholder,
  },
  {
    path: '/bar-chart',
    name: 'Bar Chart',
    component: Placeholder,
  },
  {
    path: '/images',
    name: 'Images',
    component: Placeholder,
    meta: { title: 'Images' },
  },
  {
    path: '/videos',
    name: 'Videos',
    component: Placeholder,
    meta: { title: 'Videos' },
  },
  {
    path: '/blank',
    name: 'Blank',
    component: Placeholder,
    meta: { title: 'Blank' },
  },
  {
    path: '/form-elements',
    name: 'Form Elements',
    component: () =>
      import('../src/views/Forms/FormView.vue'),
    meta: { title: 'Form Elements' },
  },
  {
    path: '/signin',
    name: 'Signin',
    component: Placeholder,
    meta: { title: 'Signin' },
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Placeholder,
    meta: { title: 'Signup' },
  },
]
