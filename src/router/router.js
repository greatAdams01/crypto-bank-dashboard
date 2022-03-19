import Home from '../views/Home.vue'
export default [
  {
    path: '/',
    name: 'Dashboard',
    component: Home
  },
  {
    path: '/deposit',
    name: 'Deposit',
    component: () => import(/* webpackChunkName: "about" */ '../views/Deposit.vue')
  },
  {
    path: '/withdraw',
    name: 'Withdraw',
    component: () => import(/* webpackChunkName: "withdraw" */ '../views/Withdraw.vue')
  },
  {
    path: '/transactions',
    name: 'Transactions',
    component: () => import(/* webpackChunkName: "transaction" */ '../views/Transactions.vue')
  },
  {
    path: '/investment',
    name: 'Investment',
    component: () => import(/* webpackChunkName: "Investment" */ '../views/Investment.vue')
  },
  {
    path: '/auth/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/auth/Login.vue')
  },
  {
    path: '/auth/signup',
    name: 'Signup',
    component: () => import(/* webpackChunkName: "signup" */ '../views/auth/Signup.vue')
  }
]