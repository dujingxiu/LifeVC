<template>
    <div id="wrapper">
      <div class="header">
        <label class="back" @click="back"></label>
        <img src="./jj.png" alt="#">
      </div>
      <div class="login_content">
        <h1>新用户注册</h1>
        <div class="lgrre">
          <div class="onrgi">
            <form id="login-form">
              <ul class="fm_list">
                <li>
                  <input type="tel" maxlength="11"
                         placeholder="请输入手机号"
                         required="required" class="field_ipt">
                </li>
                <li>
                  <input type="tel" maxlength="11"
                         placeholder="请设置6-20位密码,包含字母、数字或符号"
                         required="required" class="field_ipt">
                </li>
                <li class="multi">
                  <input data-v-4e187200="" type="password" maxlength="20"
                         placeholder="请输入图形验证码" required="required"
                         class="field_ipt">
                  <div data-v-4e187200="" class="verifycode_img">
                    <img src="./NewVerifyCode.jpg" style="width: 50%;">
                    <img src="./load.png" style="width:15%;">
                  </div>
                </li>
                <li class="multi">
                  <input data-v-4e187200="" type="password" maxlength="20"
                         placeholder="请输入手机验证码" required="required"
                         class="field_ipt">
                  <a class="fidld_skip">获取验证码</a>
                </li>
              </ul>
              <div id="setting" class="set_link">

                <a href="javascript:;">
                  <span>遇到问题？请联系客服</span>
                  <b @click="back"></b>
                </a>
              </div>
            </form>
          </div>
          <router-link to="/login" class=" btn btn_login">登录</router-link>
          <router-link to="/register" class="btn btn_regisiter">注册</router-link>

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
    .header
      width: 100%;
      height: 141px;
      background: #fff;
      position: relative;
      .back
        width: 26px;
        height: 26px;
        display: block;
        border-radius: 50%;
        position: absolute;
        left: 15px;
        top: 46px;
        border: 1px solid #3aad36;
      .back::after
        content: "";
        width: 14px;
        height: 14px;
        display: block;
        border-left: 1px solid #3aad36;
        border-top: 1px solid #3aad36;
        position: absolute;
        left: 10px;
        top: 5px;
        transform: rotate(-45deg);
      img
        width: 120px;
        height: 62px;
        overflow: hidden;
        display: block;
        position: absolute;
        top: 30%;
        left: 40%;
        margin-left: -14.4px;

    .login_content
      width 100%
      height 526px
      background: url('./login-big-bg.jpg') no-repeat;
      background-size: 100% 100%;
      background-position: bottom;
      h1
        display block
        width 100%
        height 84px
        font-weight: normal;
        text-align: center;
        color: #037049;
        font-size: 20px;
        line-height: 84px;
        box-sizing: border-box;
      .lgrre
        .onrgi
          .fm_list li
            width: 90%;
            margin: 0 auto;
            height: 51px;
            border-bottom: 1px solid #dbdbdb;
            position: relative;
            .field_ipt
              outline none;
              font-size: 16px;
              width: 100%;
              background: transparent;
              position: absolute;
              left: 0;
              top: 0;
              height: 50px;
              box-sizing: border-box;
          .multi
            width: 90%;
            margin: 0 auto;
            height: 51px;
            border-bottom: 1px solid #dbdbdb;
            position: relative;
            .verifycode_img
              position absolute
              right -10px
              margin-top: 15px;
            .fidld_skip
              display: inline-block;
              float: right;
              font-size: 16px;
              color: #3aad36;
              text-decoration: none;
              border-radius: 4px;
              padding: 8px 13px;
              text-align: center;
              position: absolute;
              right: 0;
              top: 9.4px;
          .set_link
            padding: 2.16px 4.8px;
            text-align: center;
            height: 12px;
            width: 90%;
            margin: 0 auto;
            font-size: 16px;
            box-sizing: border-box;
            position: relative;
            a
              color: #3aad36;
              letter-spacing: 1px;
              font-size: 15px;
              margin: 0 0 9.6px;
              span
                float: right;
                line-height: 20px;
                margin-right: 65px;
              b
                width: 8px;
                height: 8px;
                display: block;
                position: absolute;
                right: 0;
                top: 7px;
                border-top: 1px solid;
                border-right: 1px solid;
                transform: rotate(45deg);
                -ms-transform: rotate(45deg);
                -moz-transform: rotate(45deg);
                -webkit-transform: rotate(45deg);
                -o-transform: rotate(45deg);
        .btn
          width: 80%;
          overflow: hidden;
          display: block;
          outline: none;
          text-align: center;
          font-size: 19px;
          color: #fff;
          line-height: 38px;
          letter-spacing: 20px;
          text-indent: 20px;
          box-sizing: border-box;
          margin: 20px auto 10px;
          border-radius: 5px;
        .btn_login
          background-color: #3aad36;
          border: 1px solid #3aad36;
        .btn_regisiter
          background-color: #B7B7B7;
          border: 1px solid #B7B7B7;
</style>


