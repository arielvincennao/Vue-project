import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Vault from '@/components/Vault'
import Farm from '@/components/Farm'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/vault',
      name: 'Vault',
      component: Vault
    },
    {
      path: '/farm',
      name: 'Farm',
      component: Farm
    }
  ]
})
