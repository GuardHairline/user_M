<template>
  <el-form :model="loginForm" :rules="fieldRules" ref="loginForm" label-position="left" label-width="0px"
    class="demo-ruleForm login-container">
    <h2 class="title" style="padding-left:22px;">系统登录</h2>
    <el-form-item prop="account">
      <el-input type="text" v-model="loginForm.account" auto-complete="off" placeholder="账号"></el-input>
    </el-form-item>
    <el-form-item prop="password">
      <el-input type="password" v-model="loginForm.password" auto-complete="off" placeholder="密码"></el-input>
    </el-form-item>
    <el-form-item style="width:100%;">
      <el-button type="primary" style="width:48%;" @click.native.prevent="reset">重 置</el-button>
      <el-button type="primary" style="width:48%;" @click.native.prevent="login" :loading="loading">登 录</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Login',
  components: {
  },
  data() {
    return {
      loading: false,
      loginForm: {
        account: 'admin',
        password: '123456'
      },
      fieldRules: {
        account: [
          { required: true, message: '请输入账号', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      },
      checked: true
    }
  },
  methods: {
    login() {
      this.loading = true
      let userInfo = { name: this.loginForm.account, password: this.loginForm.password }
      console.log("User Info:", userInfo) // 输出请求参数
      this.$api.login.login(userInfo).then((res) => {
        console.log("Response:", res) // 输出响应结果
        if (res.code != 200) {
          this.$message({
            message: res.msg,
            type: 'error'
          })
        } else {
          sessionStorage.setItem('token', res.data.token) // 放置token到Cookie
          sessionStorage.setItem('user', userInfo.name) // 保存用户到本地会话
          let userName = sessionStorage.getItem('user')
          this.$store.commit('menuRouteLoaded', false) // 要求重新加载导航菜单
          this.$router.push('/')  // 登录成功，跳转到主页
        }
        this.loading = false
      }).catch((res) => {
        console.log("Error:", res) // 输出错误信息
        this.$message({
          message: res.message,
          type: 'error'
        })
      });
    },
    reset() {
      this.$refs.loginForm.resetFields()
    }
  },
  mounted() {
  },
  computed: {
    ...mapState({
      themeColor: state => state.app.themeColor
    })
  }
}
</script>

<style lang="scss" scoped>
.login-container {
  -webkit-border-radius: 5px;
  border-radius: 5px;
  -moz-border-radius: 5px;
  background-clip: padding-box;
  margin: 100px auto;
  width: 350px;
  padding: 35px 35px 15px 35px;
  background: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;

  .title {
    margin: 0px auto 30px auto;
    text-align: center;
    color: #505458;
  }

  .remember {
    margin: 0px 0px 35px 0px;
  }
}
</style>