
<template>
  <div id="wrapper">

    <div id="lunbo">
      <mt-swipe :auto="4000" >
        <mt-swipe-item>
          <a href="#"><img src="./lunbo1.jpg" alt=""></a>
        </mt-swipe-item>
        <mt-swipe-item>
          <a href="#"><img src="./lunbo2.jpg" alt=""></a>
        </mt-swipe-item>
        <mt-swipe-item>
          <a href="#"><img src="./lunbo3.jpg" alt=""></a>
        </mt-swipe-item>
        <mt-swipe-item>
          <a href="#"><img src="./lunbo4.jpg" alt=""></a>
        </mt-swipe-item>
        <mt-swipe-item>
          <a href="#"><img src="./lunbo5.jpg" alt=""></a>
        </mt-swipe-item>
        <mt-swipe-item>
          <a href="#"><img src="./lunbo6.jpg" alt=""></a>
        </mt-swipe-item>
        <mt-swipe-item>
          <a href="#"><img src="./lunbo7.jpg" alt=""></a>
        </mt-swipe-item>
        <mt-swipe-item>
          <a href="#"><img src="./lunbo8.jpg" alt=""></a>
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <div id="banner"><a href="#"><img src="./banner.jpg" alt=""></a></div>
    <div id="content"><a href="#"><img src="./content.jpg" alt=""></a></div>
    <div id="showdow"></div>
  </div>

</template>

<script type="text/ecmascript-6">


  import Vue from 'vue';
  import Mint from 'mint-ui';
  import 'mint-ui/lib/style.css';

  Vue.use(Mint);
  import { Swipe, SwipeItem } from 'mint-ui';

  export default{
    components:{
      'mt-swipe': Swipe,
      'mt-swipe-item':SwipeItem,

    }

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

  #lunbo
    height 255px
    width 375px
    img
      width 100%
      height 100%
  #banner
    width 375px
    height 80px
    margin 10px 0
    img
      width 100%
      height 100%
  #content
    width 375px
    height 150px
    img
      width 100%
      height 100%
  #showdow
    width 100%
    height 10px
    background-color rgb(242,242,242)
</style>


