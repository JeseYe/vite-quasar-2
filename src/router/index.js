import { createRouter, createWebHistory } from 'vue-router'
import { LocalStorage } from 'quasar'

import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from 'virtual:generated-pages'

// 手动实现layout
// const routes = [
//   {
//     path: '',
//     component: () => import('src/layouts/default.vue'),
//     children: [
//       {
//         path: '/',
//         component: () => import('src/pages/Index.vue')
//       },
//       ...generatedRoutes
//     ]
//   },
//   {
//     path: '/login',
//     component: () => import('../pages/login.vue')
//   },
//   {
//     path: '/register',
//     component: () => import('../pages/register.vue')
//   },
//   {
//     path: '/:catchAll(.*)*',
//     component: () => import('../pages/_404.vue')
//   }
// ]

const routes = setupLayouts(generatedRoutes)
console.log(routes)
const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const accessToken = LocalStorage.getItem('User/accessToken') || {}
  const publicRoutes = ['Login', 'Register']

  if (!publicRoutes.includes(to.name) && !accessToken.tokenValue) {
    LocalStorage.set('lastUrl', to.path)
    console.log('Requested url rejected: ' + LocalStorage.getItem('lastUrl'))

    next({ name: 'Login' })

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
