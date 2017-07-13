<template>
    <div id="wrapper3" >
      <div id="header3">
        <span class="bg" @click="back"><img src="./jt.png" alt=""></span>
        <span class="text">购物车</span>
      </div>
      <div id="top3">
        <div id="login">
          <a class="login" href="#">登录</a>
          <span class="txt">你可以在登录后同步电脑与手机购物车中的商品</span>
        </div>
        <div id="duihuan">
          <input type="text" placeholder="礼品兑换处，请输入兑换码">
          <a  class="dh" href="#">兑换</a>
        </div>
        <div id="cart">
            <img src="./cart.png" alt="">
            <p>您的购物车还是空荡荡的</p>
            <a class="gg" href="#">赶紧去逛逛</a>
        </div>
        <div id="tuijian">
          <p>Rico.S为你精心推荐</p>
        </div>
      </div>
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
    #header3
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      height: 50px;
      background-color: #89BE48;
      line-height: 50px;
      vertical-align: middle;
      z-index: 100;
      .text
        font-size 20px
        color white
        margin-left 160px
      .bg
        position fixed
        left 10px
        top 4px
    #top3
      margin-top 50px
      #login
        width 100%
        background #F0FAE6
        position relative
        padding 10px
        margin-top 50px
        .login
          background #fff
          display inline-block
          width 66px
          height 33px
          border 1px solid #89BE48
          text-align center
          line-height 33px
          color #89BE48
        .txt
          font-size 13px
      #duihuan
        position relative
        top -75px
        margin 70px 10px 0
        input
          padding-left: 10px;
          width: 70%;
          height: 36px;
          line-height: 36px;
          display: inline-block;
          outline :none;
          border: 1px solid #e7e7e7;
          background: #fff;
          text-align: center;
          font-size: 12px;
        .dh
          background #fff
          display inline-block
          width 70px
          height 34px
          border 1px solid #89BE48
          text-align center
          line-height 34px
          color #89BE48

      #cart
        width 100%
        height 237px
        background-color: #F2F2F2
        position relative
        top -75px
        img
          width 150px
          height 140px
          position absolute
          left 35%
        p
          display block
          line-height 18px
          position relative
          top 145px
          text-align center
          color #666
          font-size 18px

        .gg
          position relative
          top 160px
          left 130px
          border-radius: 10px
          background #fff
          display inline-block
          width 118px
          height 34px
          border 1px solid #89BE48
          text-align center
          line-height 34px
          color #89BE48

      #tuijian
        height 18px
        position relative
        top -50px
        p
          display block
          line-height 18px
          text-align center
          color #666
          font-size 18px

</style>


