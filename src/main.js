import Vue from 'vue'
import app from  './app'
import router from './router'
import './common/stylus/fonts.styl'
import './mock/mockServer'

new Vue({
  el:'#app',
  render: h=>h(app),
  router
})
