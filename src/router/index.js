import { createRouter, createWebHistory } from 'vue-router'
import { LocalStorage } from 'quasar'

const routes = [
  {
    path: '/',
    component: () => import('src/layouts/MainLayout.vue'),
    children: [
      { path: '/', name: 'Home', component: () => import('src/pages/Home.vue') },
      { path: '/about', name: 'About', component: () => import('src/pages/About.vue') },
      {
        path: '/tree-table',
        name: 'Slide',
        component: () => import('src/pages/examples/Slide.vue'),
      },
    ],
  },
  { path: '/login', name: 'login', component: () => import('src/pages/Login.vue') },
  {
    path: '/captcha-login',
    name: 'captchaLogin',
    component: () => import('src/pages/CaptchaLogin.vue'),
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('src/pages/Register.vue'),
  },
]
const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  const accessToken = LocalStorage.getItem('User/accessToken') || {}
  const publicRoutes = ['login', 'SmsLogin', 'TestFormLogin', 'PasswordReset', 'Oauth', 'ScanCode']

  if (!publicRoutes.includes(to.name) && !accessToken.tokenValue) {
    LocalStorage.set('lastUrl', to.path)
    console.log('Requested url rejected: ' + LocalStorage.getItem('lastUrl'))

    next({ name: 'login' })

    return
  }

  if (to.name === 'Logout') {
    LocalStorage.remove('lastUrl')
    LocalStorage.remove('User/accessToken')
    next({ name: 'Login', params: { msgType: 'fromLogout' } })
    return
  }

  next()
})
export default router
