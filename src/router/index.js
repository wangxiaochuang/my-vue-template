import Vue from 'vue'
import Router from 'vue-router'
import Layout from '../views/layout/Layout'
import Home from '../views/home/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Layout,
      redirect: 'home',
      children: [{
        path: 'home',
        name: 'home',
        component: Home
      }]
    }
  ]
})
