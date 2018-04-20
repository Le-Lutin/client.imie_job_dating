import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Choice from '@/components/Choice'
import Home from '@/components/Home'
import Offer from '@/components/Offer'
import ChooseRecruiter from '@/components/ChooseRecruiter'
import Profile from '@/components/Profile'
import OfferCandidate from '@/components/OfferCandidate'

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
    },
    {
      path:'/offer',
      name:'Offer',
      component:Offer
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/offer-candidates/:id',
      name:'OfferCandidate',
      component: OfferCandidate
    }
  ]
})
