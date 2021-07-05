import { createRouter, createWebHistory } from 'vue-router'

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
]
console.log(routes)
const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
