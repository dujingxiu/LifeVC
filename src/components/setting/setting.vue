<template>
    <div id="wrapper">
      <div id="header1">
        <span class="bg1" @click="back">
          <img src="./jt.png" alt="">
        </span>
        <p>设置</p>
      </div>
      <ul class="dd ddttyy1">
        <li>
          <a href="#">
            <span class="text1">清理缓存</span>
            <span class="arr1"></span>
          </a>
        </li>
      </ul>
      <ul class="dd ddttyy1">
        <li>
          <a href="#">
            <span class="text">关于LifeVC 平台: browser 版本：5.1.2 - 261</span>
            <span class="arr1"></span>
          </a>
        </li>
      </ul>
    </div>
</template>

<script type="text/ecmascript-6">
  export default{
    methods:{
      back(){
        history.back()
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
#wrapper
  background-color:#F2F2F2;
  #header1
    width: 100%;
    margin: 0 auto;
    position: relative;
    height 50px;
    background-color: #89BE48
    .bg1
      position fixed
      left 10px
      top 4px
    p
      line-height: 48px;
      font-size: 20px;
      text-align: center;
      color: #fff;
  .dd1
    position absolute
    top 50px
    height 62px
  .ddttyy1
    background-color:white;
    width 100%
    margin-bottom 12px
    li
      height 62px
      a
        float right
        width 90%
        display block
        height 60px
      .text1
        display: inline-block;
        line-height: 60px;
        text-decoration: none;
        vertical-align: 0;
        font-size: 16.8px;
        color: #585858;
      .text
        display: inline-block;
        line-height: 60px;
        text-decoration: none;
        vertical-align: 0;
        font-size: 10px;
        color: #585858;
      .arr1
        width: 10px;
        height: 10px;
        display: inline-block;
        float: right;
        border-right: 2px solid #bbb;
        border-top: 2px solid #bbb;
        margin: 25px 10px 0 0;
        transform: rotate(45deg)
</style>


