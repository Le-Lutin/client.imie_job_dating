import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Choice from '@/components/Choice'
import Home from '@/components/Home'
import ChooseRecruiter from '@/components/ChooseRecruiter'

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
    },
    {
      path:'/choose-recruiter/:id',
      name:'ChooseRecruiter',
      component: ChooseRecruiter
    },
    {
      path:'/home',
      name:'Home',
      component:Home
    }
  ]
})
