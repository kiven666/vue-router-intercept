import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/store'
import * as types from '../store/types'
import Index from '@/components/index'
import Repository from '@/components/repository'
import Login from '@/components/login'

Vue.use(VueRouter)

const routes = [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/repository',
      name: 'repository',
      meta:{
        requireAuth:true
      },
      component:Repository
    },
    {
      path: '/login',
      name: 'login',
      component:Login
    }
  ]
 
// 页面刷新时，重新赋值token
if (window.localStorage.getItem('token')) {
  console.log(window.localStorage.getItem('token'))
  store.commit(types.LOGIN, window.localStorage.getItem('token'))
}

const router = new VueRouter({
  routes
})

router.beforeEach((to,from ,next) => {
  if (to.matched.some(r => r.meta.requireAuth)) {
    if(store.state.token){
      next();
    }else{
      next({
        path:'/login',
        query:{redirect:to.fullPath}
      })
    }
  }else{
    next();
  }
})

export default router;