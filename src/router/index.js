import Vue from 'vue'
import Router from 'vue-router'
import Layout from '../views/layout/Layout'
import Home from '../views/home/index'
import Documentation from '../views/documentation/index'
import Share from '../views/share/index'

Vue.use(Router)

export const constantRouterMap = [
  { path: '/login', component: Home, hidden: true },
  {
    path: '',
    component: Layout,
    redirect: 'home',
    children: [{
      path: 'home',
      name: 'home',
      component: Home,
      meta: { title: 'home' }
    }]
  },
  {
    path: '/documentation',
    component: Layout,
    redirect: '/documentation/index',
    children: [{
      path: 'index',
      name: 'documentation',
      component: Documentation,
      meta: { title: 'documentation' }
    }]
  },
  {
    path: '/share',
    component: Layout,
    redirect: '/share/index',
    children: [{
      path: 'index',
      name: 'share',
      component: Share,
      meta: { title: 'share' }
    }]
  }
]
export default new Router({
  routes: constantRouterMap
})
