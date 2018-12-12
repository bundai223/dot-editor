import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import Bezier from '@/components/Bezier'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Bezier',
      component: Bezier
    }
  ]
})
