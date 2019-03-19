import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode:'history',
  base:'/',
  routes:[
    {
      path: '/',
      name: 'index',
      component: () => import('./views/index.vue'),
      meta: {
        title: '首页'
      }
    }
  ]
})