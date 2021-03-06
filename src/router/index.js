import Vue from 'vue'
import Router from 'vue-router'
import Layout from '../views/layout/Layout'
import Home from '../views/home/index'
import Documentation from '../views/documentation/index'
import Apidoc from '../views/documentation/apidoc'
import Share from '../views/share/index'
import Login from '../views/auth/Login'

Vue.use(Router)

export const constantRouterMap = [
  { path: '/login', component: Login, isHidden: true },
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
    meta: { title: 'documentation' },
    children: [
      { path: 'index', name: 'index', component: Documentation, meta: { title: 'index' } },
      {
        path: 'apidoc',
        name: 'apidoc',
        component: Apidoc,
        meta: { title: 'apidoc' },
        children: [
          {
            path: 'testdoc',
            name: 'testdoc',
            component: Apidoc,
            meta: { title: 'testdoc' }
          },
          {
            path: 'aaadoc',
            name: 'aaadoc',
            component: Apidoc,
            meta: { title: 'aaadoc' }
          }
        ]
      }
    ]
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
