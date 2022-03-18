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
    component: () => import(/* webpackChunkName: "sustainability" */ '../views/Withdraw.vue')
  },
  {
    path: '/transactions',
    name: 'Transactions',
    component: () => import(/* webpackChunkName: "sustainability" */ '../views/Transactions.vue')
  },
  {
    path: '/auth/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "sustainability" */ '../views/auth/Login.vue')
  },
  {
    path: '/auth/signup',
    name: 'Signup',
    component: () => import(/* webpackChunkName: "sustainability" */ '../views/auth/Signup.vue')
  }
]