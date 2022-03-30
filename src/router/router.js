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
    component: () => import( '../views/Deposit.vue')
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
    path: '/data-feed',
    name: 'Data-Feed',
    component: () => import(/* webpackChunkName: "Investment" */ '../views/Charts.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import(/* webpackChunkName: "Profile" */ '../views/Profile.vue')
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
  },
  {
    path: '/auth/forgot',
    name: 'Forgot',
    component: () => import(/* webpackChunkName: "Forgot" */ '../views/auth/Forgot.vue')
  },
  {
    path: '/auth/reset',
    name: 'Reset',
    component: () => import(/* webpackChunkName: "Reset" */ '../views/auth/Code.vue')
  }
]