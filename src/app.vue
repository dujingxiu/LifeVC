<template>
<div>
    <div id="wrapper">
      <router-view></router-view>
      <div id="footer" class="clearfix">
        <ul class="tab" >
          <li class="tab-item" >
            <router-link to="/homepage">
              <img src="./components/app/home2.png" alt="">
              <span class="text active" >首页</span>
            </router-link>
          </li>
          <li class="tab-item" >
            <router-link to="/allproducts">
              <img src="./components/app/qbc1.png" alt="">
              <span class="text" >全部产品</span>
            </router-link>
          </li>
          <li class="tab-item" >
            <router-link to="/stroll">
              <img src="./components/app/xg1.png" alt="">
              <span class="text" >闲逛</span>
            </router-link>
          </li>
          <li class="tab-item" >
            <router-link to="/shopcart">
              <img src="./components/app/cart1.png" alt="">
              <span class="text" >购物车</span>
            </router-link>
          </li>
          <li class="tab-item" >
            <router-link to="/personcenter">
              <img src="./components/app/zh1.png" alt="">
              <span class="text" >账户中心</span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
</div>

</template>

<script type="text/ecmascript-6">

</script>


<style lang="stylus" rel="stylesheet/stylus">
  @import "common/stylus/mixins.styl"
  .clearfix after
  .clearfix before
    content ''
    display table
    clear both
  #footer
    background: #f8f8f8;
    position fixed
    bottom 0
    width 100%
    ul
      list-style none
      li
        float left
        a
          display block
          height 43px
          width 75px
          text-align center
          vertical-align middle
          img
            position relative
            left 40%
            display block
            width 28%
          .active
          .text:hover
            color #89BE48











</style>


