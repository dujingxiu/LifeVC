<template>
    <div id="wrapper">
      <div id="header">
        <span class="text">
          账户中心
          <router-link to="/setting">设置</router-link>
        </span>
      </div>
      <div id="top">
        <div id="login">
          <img src="./background.png" alt="">
          <p>您还未登录</p>
          <div id="loginorregister">
            <router-link to="/login">登录</router-link>
            |
            <router-link to="/register">注册</router-link>
          </div>

        </div>

        <div id="order">
          <ul>
            <li>
              <a href="#">
                <img src="./zf.png" alt="">
                <span>待支付</span>
              </a>
            </li>
            <li class="middle">
              <a href="#" >
                <img src="./fh.png" alt="">
                <span>待发货</span>
              </a>
            </li>
            <li>
              <a href="#">
                <img src="./sh.png" alt="">
                <span>待收货</span>
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#">
                <img src="./pl.png" alt="">
                <span>待评论</span>
              </a>
            </li>
            <li class="middle">
              <a href="#" >
                <img src="./hf.png" alt="">
                <span>待回复</span>
              </a>
            </li>
            <li>
              <a href="#">
                <img src="./th.png" alt="">
                <span>退换货</span>
              </a>
            </li>
          </ul>
        </div>
        <ul id="dd" class="ddttyy">
          <li>
            <a href="#">
              <img src="./dd.png" alt="">
              <span class="text">我的订单</span>
              <span class="arr"></span>
            </a>
          </li>
        </ul>
        <ul id="tt" class="ddttyy">
          <li>
            <a href="#">
              <img src="./yhq.png" alt="">
              <span class="text">我的优惠券</span>
              <span class="arr"></span>
            </a>
          </li>
          <li>
            <a href="#">
              <img src="./xj.png" alt="">
              <span class="text">现金积分</span>
              <span class="arr"></span>
            </a>
          </li>
          <li>
            <a href="#">
              <img src="./fp.png" alt="">
              <span class="text">关于发票</span>
              <span class="arr"></span>
            </a>
          </li>
        </ul>
        <ul id="yy" class="ddttyy">
          <li>
            <a href="#">
              <img src="./mm.png" alt="">
              <span class="text">密码和登录信息</span>
              <span class="arr"></span>
            </a>
          </li>
          <li>
            <a href="#">
              <img src="./lh.png" alt="">
              <span class="text">老会员提议</span>
              <span class="arr"></span>
            </a>
          </li>
          <li>
            <a href="#">
              <img src="./kh.png" alt="">
              <span class="text">客户服务</span>
              <span class="arr"></span>
            </a>
          </li>
          <li>
            <a href="#">
              <img src="./dz.png" alt="">
              <span class="text">地址管理</span>
              <span class="arr"></span>
            </a>
          </li>
          <li>
            <a href="#">
              <img src="./sj.png" alt="">
              <span class="text">手机验证</span>
              <span class="arr"></span>
            </a>
          </li>
        </ul>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default{}
</script>

<style lang="stylus" rel="stylesheet/stylus">
*
  margin 0
  padding 0
  #header
    position fixed
    top 0
    width 100%
    height 50px
    background-color: rgb(137,190,72)
    text-align center
    line-height 50px
    .text
      font-size 20px
      color white
      a
        display block
        float right
        font-size 20px
        color white
        padding-right 10px
  #top
    margin-top 50px
    #login
      width 100%
      height 108px
      img
        width 100%
        height 100%
      p
        display block
        line-height 18px
        position relative
        bottom 100px
        text-align center
        color #666
        font-size 18px

      #loginorregister
        position relative
        bottom 90px
        left 130px
        border-radius: 18px
        background #fff
        width 118px
        height 34px
        border 2px solid #009c42
        text-align center
        line-height 34px
        color #009c42
        a
          color #009c42
    #order
      width 100%
      height 123px
      ul
        height 61px
        list-style none
        border-bottom 1px solid #F6F6F6
        li
          margin 0 auto
          margin-top 15px
          float left
          height 30px
          line-height 30px
          width 124px
          font-size 14.4px
          vertical-align middle
          a
            display inline-block
            margin-left 10px
            img
              width 42px
              height 42px
            span
              display: inline-block;
              vertical-align: 56%;
              font-size: 14.4px;
              color: #585858;
              line-height: 30px;
              text-decoration: none;
        .middle
          border-left 1px solid #EEEEEE
          border-right 1px solid #EEEEEE



    #dd
      height 62px
    .ddttyy
      width 100%
      margin-bottom 12px
      li
        height 62px
        a
          display block
          height 60px
          img
            width: 30px;
            overflow: hidden;
            display: inline-block;
            float: left;
            margin: 15.6px 13.2px 0;
          .text
            display: inline-block;
            line-height: 60px;
            text-decoration: none;
            float: left;
            vertical-align: 0;
            font-size: 16.8px;
            color: #585858;
          .arr
            width: 10px;
            height: 10px;
            display: inline-block;
            float: right;
            border-right: 2px solid #bbb;
            border-top: 2px solid #bbb;
            margin: 25px 10px 0 0;
            transform: rotate(45deg)
</style>


