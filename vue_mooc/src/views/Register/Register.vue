<template>
  <div id="register">
    <div class="container">
      <h1 class="logo"></h1>
      <div class="form">
        <el-form label-width="80px" size="mini"
                 :model="ruleForm" status-icon
                 :rules="rules" ref="ruleForm">

          <el-form-item label="用户名" prop="username">
            <el-input autofocus type="text" v-model="ruleForm.username" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input type="password" v-model="ruleForm.password" autocomplete="new-password"></el-input>
          </el-form-item>

          <el-button size="small" class="btn-register" type="primary" @click="submitForm('ruleForm')">注册成为用户
          </el-button>
        </el-form>

        <div class="toolbar">
          <span>
            <i class="iconfont icon-weibo"></i>
          </span>
          <span>
            <i class="iconfont icon-wechat"></i>
          </span>
          <span>
            <i class="iconfont icon-github"></i>
          </span>
        </div>

        <div class="tips">
          已有帐号？
          <router-link tag="span" to="/login">立即登录</router-link>
        </div>
      </div>

    </div>
    <div class="footer">
      Copyright © www.gengwenhao.cn
      <a style="margin-left: 23px;" href="http://www.beian.miit.gov.cn/state/outPortal/loginPortal.action">辽ICP备19006965号-1</a>
    </div>
  </div>
</template>

<script>
  import {mapMutations} from 'vuex'
  import {register} from '../../api/api'

  export default {
    name: "Register",
    data() {
      var validateUsername = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入用户名'))
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('password')
          }
          callback()
        }
      }
      var validatePassword = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'))
        } else {
          callback()
        }
      }
      return {
        checked: false,
        ruleForm: {
          username: '',
          password: ''
        }
        ,
        rules: {
          username: [
            {validator: validateUsername, trigger: 'blur'}
          ],
          password:
            [
              {validator: validatePassword, trigger: 'blur'}
            ]
        }
      }
    },
    methods: {
      ...mapMutations(['SET_JWT_TOKEN', 'SET_USER_INFO']),
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            let userInfo = {
              username: this.ruleForm.username,
              password: this.ruleForm.password
            }
            register(userInfo)
              .then(res => {
                this.$router.push({name: 'login'})
              })
          } else {
            return false
          }
        })
      }
    }
  }
</script>

<style lang="scss">
  @import "../../static/scss/mixins";

  #register {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    overflow: auto;
    position: absolute;
    background: rgba(0, 0, 0, 0) url("../../assets/mask.png") repeat scroll 0% 0%;

    .container {
      position: absolute;
      border-radius: 2px;
      width: 350px;
      height: 430px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: white;
      box-shadow: 0 0 0 1px hsla(0, 0%, 100%, .3) inset,
      0 .5em 1em rgba(0, 0, 0, 0.6);

      .logo {
        margin: 25px 0;
        text-align: center;
        width: 100%;
        height: 70px;
        background: url("../../assets/logo_mini.png") center no-repeat;
        cursor: pointer;
        transform: scale(.9);
      }

      .form {
        padding: 10px 25px;
        color: #333;

        .btn-register {
          margin-top: 25px;
          width: 100%;
          font-size: 14px;
        }

        .item-line {
          margin: 0 auto;
          width: 280px;
          display: flex;
          justify-content: space-between;
          color: #505f79;
          font-size: 12px !important;

          .el-checkbox__label {
            font-size: 12px !important;
          }

          .forget {
            color: #60b9e1;

            :hover {

            }
          }
        }
      }

      /* 第三方登录 */
      .toolbar {
        height: 25px;
        line-height: 25px;
        margin: 30px auto;
        width: 100px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        span {
          cursor: pointer;
          font-size: 17px;
          height: 25px;
          width: 25px;
          border-radius: 4px;
          text-align: center;
          transition: 200ms cubic-bezier(.55, .09, .68, .53);

          &:hover {
            background: #e7e7e7;
          }

          &:nth-child(1) {
            color: #e34949;
          }

          &:nth-child(2) {
            color: #56d648;
          }

          &:nth-child(3) {
            color: #60b9e1;
          }
        }
      }

      .tips {
        text-align: center;
        margin-top: 25px;
        color: #505f79;
        font-size: 12px;

        span {
          color: #b4b4b4;
          cursor: pointer;
        }
      }
    }

    .footer {
      font-size: 12px;
      text-align: center;
      height: 23px;
      line-height: 23px;
      background: rgba(230, 230, 230, 0.35);
      position: fixed;
      bottom: 0;
      width: 100%;
      color: #616147;

      a {
        color: #616147;
        font-size: 12px;
        text-decoration: none;
      }
    }
  }

</style>