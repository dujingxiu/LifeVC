import Vue from 'vue'
import Router from 'vue-router'


import bed from '../components/bed/bed.vue'
import detail from '../components/detail/detail.vue'
import furniture from '../components/furniture/furniture.vue'
import homepage from '../components/homepage/homepage.vue'
import housework from '../components/housework/housework.vue'
import kitchen from '../components/kitchen/kitchen.vue'
import leisurewear from '../components/leisurewear/leisurewear.vue'
import live from '../components/live/live.vue'
import newproduct from '../components/newproduct/newproduct.vue'
import travel from '../components/travel/travel.vue'
import allproducts from '../components/allproducts/allproducts.vue'
import stroll from '../components/stroll/stroll.vue'
import shopcart from '../components/shopcart/shopcart.vue'
import personcenter from '../components/personcenter/personcenter.vue'
import index from '../components/index/index.vue'
import login from '../components/login/login.vue'
import register from '../components/register/register.vue'
import setting from '../components/setting/setting.vue'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      redirect: '/homepage/index'
    },
    {
      path: '/homepage',
      component: homepage,
      children:[
        {

          path: '',
          component: index
        },
        {

          path: 'index',
          component: index
        },
        {
          path: 'newproduct',
          component: newproduct
        },
        {
          path: 'housework',
          component: housework
        },
        {
          path: 'kitchen',
          component: kitchen
        },
        {
          path: 'leisurewear',
          component: leisurewear
        },
        {
          path: 'live',
          component: live
        },
        {
          path: 'furniture',
          component: furniture
        },
        {
          path: 'bed',
          component: bed
        },
        {
          path: 'travel',
          component: travel
        },
        {
          path: 'detail',
          component: detail
        }
        ]

    },

    {
      path: '/allproducts',
      component: allproducts
    },
    {
      path: '/stroll',
      component: stroll
    },
    {
      path: '/shopcart',
      component: shopcart
    },
    {
      path: '/personcenter',
      component: personcenter,

    },
    {
      path:'/login',
      component:login
    },
    {
      path:'/register',
      component:register
    },
    {
      path:'/setting',
      component:setting
    }

  ]
})
