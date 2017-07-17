import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '@/pages/container'
import Team from '@/pages/team'
import Help from '@/pages/help'
import About from '@/pages/about'
import Note from '@/pages/note'
import Detail from '@/pages/detail'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      redirect:'/index',
      name: 'IndexPage',
      component: IndexPage
    },
    {
      path: '/index',
      name: 'IndexPage',
      component: IndexPage,
    },
    {
      path: '/index/detail',
      name: 'Detail',
      component: Detail,
    },
    {
      path:'/team',
      name:'Team',
      component:Team
    },
    {
      path:'/help',
      name:'Help',
      component:Help
    },
    {
      path:'/about',
      name:'About',
      component:About
    },
    {
      path:'/note',
      name:'Note',
      component:Note
    }
  ]
})
