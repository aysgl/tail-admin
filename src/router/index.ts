import {
  createRouter,
  createWebHistory,
} from 'vue-router'

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
      name: 'Dashboard',
      component: () =>
        import(
          '../views/Dashboard/DashboardView.vue'
        ),
      meta: {
        title: 'Dashboard',
        layout: 'main',
      },
    },
    {
      path: '/ecommerce',
      name: 'Ecommerce',
      component: () =>
        import(
          '../views/Dashboard/EcommerceView.vue'
        ),
      meta: {
        title: 'eCommerce Dashboard',
        layout: 'main',
      },
    },
    {
      path: '/analytics',
      name: 'Analytics',
      component: () =>
        import(
          '../views/Dashboard/AnalyticsView.vue'
        ),
      meta: {
        title: 'Analytics',
        layout: 'main',
      },
    },
    {
      path: '/sales',
      name: 'Sales',
      component: () =>
        import(
          '../views/Dashboard/SalesView.vue'
        ),
      meta: {
        title: 'Sales',
        layout: 'main',
      },
    },
    {
      path: '/reports',
      name: 'Reports',
      component: () =>
        import(
          '../views/Dashboard/ReportsView.vue'
        ),
      meta: {
        title: 'Reports',
        layout: 'main',
      },
    },
    {
      path: '/calendar',
      name: 'Calendar',
      component: () =>
        import(
          '../views/Others/CalendarView.vue'
        ),
      meta: {
        title: 'Calendar',
        layout: 'main',
      },
    },
    {
      path: '/profile',
      name: 'Profile',
      component: () =>
        import(
          '../views/Others/UserProfileView.vue'
        ),
      meta: {
        title: 'Profile',
        layout: 'main',
      },
    },
    {
      path: '/account-settings',
      name: 'Account Settings',
      component: () =>
        import(
          '../views/Others/AccountSettingsView.vue'
        ),
      meta: {
        title: 'Account Settings',
        layout: 'main',
      },
    },
    {
      path: '/compact-tables',
      name: 'Compact Tables',
      component: () =>
        import(
          '../views/Tables/CompactTableView.vue'
        ),
      meta: {
        title: 'Compact Tables',
        layout: 'main',
      },
    },
    {
      path: '/relaxed-tables',
      name: 'Relaxed Tables',
      component: () =>
        import(
          '../views/Tables/RelaxedTableView.vue'
        ),
      meta: {
        title: 'Relaxed Tables',
        layout: 'main',
      },
    },
    {
      path: '/advance-tables',
      name: 'Advance Tables',
      component: () =>
        import(
          '../views/Tables/AdvanceTableView.vue'
        ),
      meta: {
        title: 'Advance Tables',
        layout: 'main',
      },
    },
    {
      path: '/line-chart',
      name: 'Line Chart',
      component: () =>
        import(
          '../views/Chart/LineChartView.vue'
        ),
      meta: {
        title: 'Line Chart',
        layout: 'main',
      },
    },
    {
      path: '/bar-chart',
      name: 'Bar Chart',
      component: () =>
        import('../views/Chart/BarChartView.vue'),
      meta: {
        title: 'Bar Chart',
        layout: 'main',
      },
    },
    {
      path: '/blank',
      name: 'Blank',
      component: () =>
        import('../views/Pages/BlankPage.vue'),
      meta: {
        title: 'Blank',
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
        layout: 'main',
      },
    },

    {
      path: '/not-found',
      name: 'Not Found',
      component: () =>
        import('../views/Pages/NotFoundView.vue'),
      meta: {
        title: 'Not Found',
        layout: 'none',
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
  ],
})

export default router

router.beforeEach((to, from, next) => {
  document.title = `Vue.js ${to.meta.title} | TailAdmin - Vue.js Tailwind CSS Dashboard Template`
  next()
})
