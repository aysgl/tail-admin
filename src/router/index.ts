import {
  createRouter,
  createWebHistory,
} from 'vue-router'
import { useScrollRestoration } from '@/composables/useScrollRestoration'

const { saveScroll, restoreScroll } =
  useScrollRestoration()

const router = createRouter({
  history: createWebHistory(
    import.meta.env.BASE_URL,
  ),
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { left: 0, top: 0 }
  },
  routes: [
    {
      path: '/',
      redirect: '/ecommerce',
    },
    {
      path: '/ecommerce',
      name: 'Ecommerce',
      component: () =>
        import('../views/Dashboard/EcommerceView.vue'),
      meta: {
        title: 'Ecommerce',
        headline: 'Dashboard',
        layout: 'main',
      },
    },
    {
      path: '/analytics',
      name: 'Analytics',
      component: () =>
        import('../views/Dashboard/AnalyticsView.vue'),
      meta: {
        title: 'Analytics',
        headline: 'Dashboard',
        layout: 'main',
      },
    },
    {
      path: '/sales',
      name: 'Sales',
      component: () =>
        import('../views/Dashboard/SalesView.vue'),
      meta: {
        title: 'Sales',
        headline: 'Dashboard',
        layout: 'main',
      },
    },
    {
      path: '/reports',
      name: 'Reports',
      component: () =>
        import('../views/Dashboard/ReportsView.vue'),
      meta: {
        title: 'Reports',
        headline: 'Dashboard',
        layout: 'main',
      },
    },
    {
      path: '/calendar',
      name: 'Calendar',
      component: () =>
        import('../views/Calendar/CalendarView.vue'),
      meta: {
        title: 'Calendar',
        layout: 'main',
      },
    },
    {
      path: '/profile',
      name: 'Profile',
      component: () =>
        import('../views/Profile/UserProfileView.vue'),
      meta: {
        title: 'Profile',
        headline: 'User Profile',
        layout: 'main',
      },
    },
    {
      path: '/account-settings',
      name: 'Account Settings',
      component: () =>
        import('../views/Profile/AccountSettingsView.vue'),
      meta: {
        title: 'Account Settings',
        headline: 'Account',
        description:
          'Manage your account preferences and security settings.',
        layout: 'main',
      },
    },
    {
      path: '/compact-tables',
      name: 'Compact Tables',
      component: () =>
        import('../views/Tables/CompactTableView.vue'),
      meta: {
        title: 'Compact Tables',
        headline: 'Tables',
        layout: 'main',
      },
    },
    {
      path: '/relaxed-tables',
      name: 'Relaxed Tables',
      component: () =>
        import('../views/Tables/RelaxedTableView.vue'),
      meta: {
        title: 'Relaxed Tables',
        headline: 'Tables',
        layout: 'main',
      },
    },
    {
      path: '/advance-tables',
      name: 'Advance Tables',
      component: () =>
        import('../views/Tables/AdvanceTableView.vue'),
      meta: {
        title: 'Advance Tables',
        headline: 'Tables',
        layout: 'main',
      },
    },
    {
      path: '/blank',
      name: 'Blank',
      component: () =>
        import('../views/Pages/BlankPage.vue'),
      meta: {
        title: 'Blank Page',
        headline: 'Pages',
        layout: 'main',
      },
    },
    {
      path: '/form-elements',
      name: 'Form',
      component: () =>
        import('../views/Forms/FormView.vue'),
      meta: {
        title: 'Form',
        headline: 'Form',
        layout: 'main',
      },
    },

    {
      path: '/signin',
      name: 'Signin',
      component: () =>
        import('../views/Auth/SigninView.vue'),
      meta: {
        title: 'Signin',
        layout: 'auth',
      },
    },
    {
      path: '/signup',
      name: 'Signup',
      component: () =>
        import('../views/Auth/SignupView.vue'),
      meta: {
        title: 'Signup',
        layout: 'auth',
      },
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () =>
        import('../views/Pages/NotFoundView.vue'),
      meta: {
        title: 'Not Found',
        layout: 'none',
      },
    },
  ],
})

export default router

router.beforeEach((to, from, next) => {
  document.title = `Vue.js ${to.meta.title} | TailAdmin - Vue.js Tailwind CSS Dashboard Template`
  if (from.path && from.meta?.layout === 'main') {
    saveScroll(from.path)
  }
  next()
})

router.afterEach((to) => {
  if (to.path && to.meta?.layout === 'main') {
    restoreScroll(to.path)
  }
})
