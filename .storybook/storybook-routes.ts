import type { RouteRecordRaw } from 'vue-router'

const Placeholder = { template: '<div />' }

export const storybookRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Ecommerce',
    component: () => import('../src/views/Ecommerce.vue'),
    meta: { title: 'eCommerce' },
  },
  {
    path: '/buttons',
    name: 'Buttons',
    component: () => import('../src/views/UiElements/BaseButtons.vue'),
    meta: { title: 'Buttons' },
  },
  { path: '/calendar', name: 'Calendar', component: Placeholder, meta: { title: 'Calendar' } },
  { path: '/profile', name: 'Profile', component: Placeholder, meta: { title: 'Profile' } },
  {
    path: '/form-elements',
    name: 'Form Elements',
    component: Placeholder,
    meta: { title: 'Form Elements' },
  },
  {
    path: '/basic-tables',
    name: 'Basic Tables',
    component: Placeholder,
    meta: { title: 'Basic Tables' },
  },
  { path: '/line-chart', name: 'Line Chart', component: Placeholder },
  { path: '/bar-chart', name: 'Bar Chart', component: Placeholder },
  { path: '/alerts', name: 'Alerts', component: Placeholder, meta: { title: 'Alerts' } },
  { path: '/avatars', name: 'Avatars', component: Placeholder, meta: { title: 'Avatars' } },
  { path: '/badge', name: 'Badge', component: Placeholder, meta: { title: 'Badge' } },
  { path: '/images', name: 'Images', component: Placeholder, meta: { title: 'Images' } },
  { path: '/videos', name: 'Videos', component: Placeholder, meta: { title: 'Videos' } },
  { path: '/blank', name: 'Blank', component: Placeholder, meta: { title: 'Blank' } },
  { path: '/signin', name: 'Signin', component: Placeholder, meta: { title: 'Signin' } },
  { path: '/signup', name: 'Signup', component: Placeholder, meta: { title: 'Signup' } },
]
