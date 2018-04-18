import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Choice from '@/components/Choice'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path:'/choice/:id',
      name:'Choice',
      component: Choice
    }
  ]
})
