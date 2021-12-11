import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    meta: {
      title: 'Список дел',
      layout: 'main-layout'
    },
    component: () => import('@/pages/HomePage')
  },
  {
    path: '/info',
    name: 'about',
    meta: {
      title: 'Информация',
      layout: 'main-layout'
    },
    component: () => import('@/pages/InfoPage')
  },
  {
    path: '/login',
    name: 'login',
    meta: {
      title: 'Вход',
      layout: 'auth-layout'
    },
    component: () => import('@/pages/LoginPage')
  },
  {
    path: '/registration',
    name: 'registration',
    meta: {
      title: 'Регистрация',
      layout: 'auth-layout'
    },
    component: () => import('@/pages/RegistrationPage')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// Защита роутов
router.beforeEach((to, from, next) => {
  // Деструктуризация объекта
  const { accessToken } = localStorage
  if (accessToken || to.name === 'login' || to.name === 'registration') {
    next()
  } else {
    next('/login')
  }
})

export default router
