<template>
<div>
    <div class="masks">
        
        <div class="loginBOX">
            <div class="login-code">
                <p>扫描二维码登录</p>
                <img src="./img/login.png" alt="">
                <div>请使用 <a href="javascript:;">&nbsp;哔哩哔哩客户端</a></div>
                <div>扫码登录或扫码下载APP</div>
            </div>
            <div class="login-hr"></div>
            <div class="login-form">
                <div class="header">
                    <p>
                        <a href="javascript:;" class="tab-one tab-select" @click="block">密码登录</a>
                        <em>&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;</em>
                        <a href="javascript:;" class="tab-select" @click="hidden">短信登录</a>
                    </p>
                </div>
                <div class="mid" v-show="show2">
                    <div class="zhanghao">账号<input type="text" placeholder="请输入账号"></div>
                    <div class="mima">密码<input type="password"  class="passwordText" placeholder="请输入密码">
                        <div>忘记密码?</div>
                    </div>
                </div>

                <!--  -->
                <div class="mid mid-two" v-show="show">
                    <div class="phone zhanghao">+86 <img src="./img/select_arrow.ce6b4ad2.svg" alt=""> </input><input
                            type="text" placeholder="请输入手机号">
                        <div>获取验证码</div>
                    </div>
                    <div class="code">验证码<input type="password" placeholder="请输入验证码">

                    </div>
                </div>

                <!-- 下拉菜单 -->


                <div class="anniu" v-show="show2">
                    <button>登录</button>
                    <button class="tab-two">注册</button>
                </div>


                <!--  -->
                <div class="anniu-two anniu"  v-show="show">
                    <button class="tab-two">登录/注册</button>
                </div>

                <div style="text-align: center;">其他方式登录</div>
                <div class="login-fangshi">
                    <p><img src="./img/微信.png" alt=""> <a href="javascript:;">微信登陆</a></p>
                    <p><img src="./img/微博.png" alt=""> <a href="javascript:;">微博登陆</a></p>
                    <p><img src="./img/QQ.png" alt=""> <a href="javascript:;">QQ登陆</a></p>
                </div>
            </div>
            <div class="footer">
                <p> 未注册过哔哩哔哩的手机号，我们将自动帮你注册账号 </p>
                <p> 登录或完成注册即代表你同意 <span>用户协议</span> 和 <span>隐私政策</span> </p>
            </div>
            <div class="down" @click="down">❌</div>
        </div>




    </div>
</div>

</template>

<script>
import $ from "jquery";
export default {
  data() {
    return {
      show2: true,
      show: false,
      img: [
        require("./img/22_close.9382a5a8.png"),
        require("./img/33_close.a8c18fc8.png"),
      ],
    };
  },
  methods: {
    down() {
      this.$emit("Down", false);
    },

    block(e) {
      this.show2 = true;
      this.show = false;
    },
    hidden(e) {
      this.show2 = false;
      this.show = true;
    },
  },

  mounted() {
    var img = this.img;

    this.$nextTick(function () {
      $(function () {
        //
        $(".tab-select").on("click", function () {
          $(this).addClass("tab-one");
          $(this).siblings().removeClass("tab-one");
        });

        //
        $(".passwordText").on("focus", function () {
          $(".loginBOX").css(
            "background-image",
            'url("' + img[0] + '"),url("' + img[1] + '")'
          );
        });
        $(".passwordText").on("blur", function () {
          $(".loginBOX").css(
            "background-image",
            'url("./img/22_open.4ea5f239.3aad48a1.png"),url("./img/33_open.f7d7f655.410bd980.png")'
          );
        });
      });
    });
  },
};
</script>

<style lang='less' scoped>
.masks {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(127, 127, 127, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 999;

  .loginBOX {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 820px;
    height: 480px;
    padding: 52px 65px 29px 92px;
    background-color: #ffffff;
    background-image: url(./img/22_open.4ea5f239.png),
      url("./img/33_open.f7d7f655.png");
    background-repeat: no-repeat no-repeat;
    background-position: 0 100%, 100% 100%;
    background-position-x: 0px, 100%;
    background-position-y: 100%, 100%;
    background-size: 14%;
    position: relative;

    .login-code {
      width: 173px;
      height: 349px;
      // background-color: aqua;

      p {
        font-size: 18px;
        text-align: center;
      }

      img {
        width: 100%;
        margin-top: 26px;
      }

      div {
        text-align: center;
        margin-top: 10px;

        a {
          color: #00aeec;
        }
      }
    }

    .login-hr {
      width: 1px;
      height: 228px;
      background-color: #ccc;
    }

    .login-form {
      width: 400px;
      height: 349px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;

      .header {
        p {
          display: flex;
          justify-content: center;

          a {
            font-size: 18px;
            color: #505050;
          }

          .tab-one {
            color: #00aeec;
          }

          em {
            color: #ccc;
            font-style: normal;
            font-weight: 100;
          }
        }
      }

      .mid {
        width: 100%;
        height: 90px;
        border: 1px solid #ccc;
        border-radius: 10px;

        .zhanghao {
          height: 50%;
          border-bottom: 1px solid #ccc;
          display: flex;
          align-items: center;
          justify-content: space-around;
        }

        .mima {
          height: 50%;
          display: flex;
          align-items: center;
          justify-content: space-around;
        }

        .zhanghao {
          input {
            width: 310px;
            height: 20px;
            border: none;
            outline: none;
            background-color: transparent;
          }
        }

        .mima {
          input {
            width: 210px;
            height: 20px;
            border: none;
            outline: none;
            background-color: transparent;
          }

          div {
            color: #00aeec;
            width: 70px;
          }
        }
      }

      .mid-two {
        .phone,
        .code {
          display: flex;
          height: 50%;
          display: flex;
          align-items: center;
          justify-content: space-around;

          input {
            width: 210px;
            height: 20px;
            border: none;
            outline: none;
            background-color: transparent;
          }
        }

        .code {
          input {
            width: 295px;
          }
        }

        .phone {
          img {
            cursor: pointer;
          }
        }
      }

      .anniu {
        button {
          width: 194px;
          height: 40px;
          border-radius: 10px;
          border: 1px solid #ccc;
        }

        .tab-two {
          background-color: #00aeec;
        }
      }

      .login-fangshi {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-around;

        p > img {
          width: 28px;
          height: 28px;
        }

        p {
          display: flex;
          align-items: center;
        }
      }
    }
  }
}

.footer {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);

  p {
    text-align: center;
    font-size: 12px;
    color: #b4b4b4;

    span {
      color: #00aeec;
    }
  }
}
.down {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
}
</style>