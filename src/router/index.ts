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
      name: 'Ecommerce',
      component: () =>
        import('../views/Ecommerce.vue'),
      meta: {
        title: 'eCommerce Dashboard',
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
      },
    },
    {
      path: '/form-elements',
      name: 'Form Elements',
      component: () =>
        import('../views/Forms/FormElements.vue'),
      meta: {
        title: 'Form Elements',
      },
    },
    {
      path: '/basic-tables',
      name: 'Basic Tables',
      component: () =>
        import(
          '../views/Tables/DynamicTable.vue'
        ),
      meta: {
        title: 'Basic Tables',
      },
    },
    {
      path: '/line-chart',
      name: 'Line Chart',
      component: () =>
        import(
          '../views/Chart/LineChart/LineChart.vue'
        ),
    },
    {
      path: '/bar-chart',
      name: 'Bar Chart',
      component: () =>
        import(
          '../views/Chart/BarChart/BarChart.vue'
        ),
    },
    {
      path: '/alerts',
      name: 'Alerts',
      component: () =>
        import(
          '../views/UiElements/BaseAlerts.vue'
        ),
      meta: {
        title: 'Alerts',
      },
    },
    {
      path: '/avatars',
      name: 'Avatars',
      component: () =>
        import(
          '../views/UiElements/BaseAvatars.vue'
        ),
      meta: {
        title: 'Avatars',
      },
    },
    {
      path: '/badge',
      name: 'Badge',
      component: () =>
        import(
          '../views/UiElements/BaseBadges.vue'
        ),
      meta: {
        title: 'Badge',
      },
    },

    {
      path: '/buttons',
      name: 'Buttons',
      component: () =>
        import(
          '../views/UiElements/BaseButtons.vue'
        ),
      meta: {
        title: 'Buttons',
      },
    },

    {
      path: '/blank',
      name: 'Blank',
      component: () =>
        import('../views/Pages/BlankPage.vue'),
      meta: {
        title: 'Blank',
      },
    },

    {
      path: '/error-404',
      name: '404 Error',
      component: () =>
        import(
          '../views/Errors/FourZeroFour.vue'
        ),
      meta: {
        title: '404 Error',
      },
    },

    {
      path: '/signin',
      name: 'Signin',
      component: () =>
        import('../views/Auth/SigninView.vue'),
      meta: {
        title: 'Signin',
      },
    },
    {
      path: '/signup',
      name: 'Signup',
      component: () =>
        import('../views/Auth/SignupView.vue'),
      meta: {
        title: 'Signup',
      },
    },
  ],
})

export default router

router.beforeEach((to, from, next) => {
  document.title = `Vue.js ${to.meta.title} | TailAdmin - Vue.js Tailwind CSS Dashboard Template`
  next()
})
