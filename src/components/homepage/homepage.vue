
<template>
  <div>
    <div id="wrapper2">
      <div id="header">
        <img id="bg" src="./header.png">
        <router-link to="/allproducts"><img id= "seacher" src="./seacher.png"></router-link>
      </div>
      <div class="scroll2"  ref="scroll">
        <ul class="tab2"  ref="ul">
          <li class="tab-item" >
            <router-link to="/homepage/index">首页</router-link>
          </li>
          <li class="tab-item" >
            <router-link to="/homepage/newproduct">新品</router-link>
          </li>
          <li class="tab-item" >
            <router-link to="/homepage/housework">家务</router-link>
          </li>
          <li class="tab-item" >
            <router-link to="/homepage/kitchen">下厨</router-link>
          </li>
          <li class="tab-item" >
            <router-link to="/homepage/leisurewear">家居服</router-link>
          </li>
          <li class="tab-item" >
            <router-link to="/homepage/live">生活</router-link>
          </li>
          <li class="tab-item" >
            <router-link to="/homepage/furniture">软装</router-link>
          </li>
          <li class="tab-item" >
            <router-link to="/homepage/bed">床品</router-link>
          </li>
          <li class="tab-item" >
            <router-link to="/homepage/travel">工作和旅行</router-link>
          </li>
          <li class="tab-item" >
            <router-link to="/homepage/detail">了解LifeVC</router-link>
          </li>
        </ul>
      </div>
      <router-view ></router-view>

    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'
  import Vue from 'vue';


    export default{

      created(){
        this.$nextTick(() => {

          const liwidth = 80
          const ul = this.$refs.ul
          const licount = ul.children.length
          ul.style.width = licount * liwidth + 'px'
          new BScroll(this.$refs.scroll, {
            click: true,
            scrollX: 'true'
          })
        })

      }

    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  #header
    width 100%
    height 48px
    background rgb(137,190,72)
    position relative
    #bg
      position absolute
      left 95px
      top 12px
      width 190px
      height 25px
    #seacher
      position absolute
      right 13px
      top 12px
      width 20px
      height 20px


  .scroll2
    width: 375px;
    overflow: hidden;
    .tab2
      height 53px
      .tab-item
        list-style: none;
        width: 80px;
        float: left;
        font-size: 14px;
        color: #4d555d;
        text-align: center;
        a
          display block;
          height 50px
          line-height 50px
          text-decoration: none;
        .active
          color rgb(137,190,72)
          border-bottom 3px solid rgb(137,190,72)



</style>


