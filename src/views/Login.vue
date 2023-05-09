<template>
  <a-layout class="layout" style="height: 100vh">
    <a-form-model
      ref="loginForm"
      :model="form"
      :rules="rules"
      :label-col="labelCol"
      :wrapper-col="wrapperCol"
      class="login-form"
    >
      <h1 style="margin-left: 33%; margin-bottom: 20px">
        登录 | Login
      </h1>
      <a-form-model-item ref="userName" label="用户名" prop="userName">
        <a-input v-model="form.userName" type="text" autocomplete="off" @keyup.enter="login" />
      </a-form-model-item>
      <a-form-model-item ref="password" label="密码" prop="password">
        <a-input v-model="form.password" type="password" autocomplete="off" @keyup.enter="login" />
      </a-form-model-item>
      <a-form-model-item :wrapper-col="{ span: 14, offset: 4 }">
        <a-button type="primary" style="width: 45%" @click="login">
          登录
        </a-button>
        <a-button style="margin-left: 30px; width: 45%" @click="reset">
          重置
        </a-button>
      </a-form-model-item>
    </a-form-model>
  </a-layout>
</template>

<script>
import { apiLogin } from "../api";
export default {
  name: 'Login',
  data () {
    return {
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
      form: {
        userName: '',
        password: ''
      },
      rules: {
        username: [
          {
            required: true,
            message: '请输入用户名',
            trigger: 'blur'
          }
        ],
        password: [
          {
            required: true,
            message: '请输入密码',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
    login () {
      console.log(this.userName);
      console.log(this.password);
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          // 表单校验通过，执行登录操作,发送登录请求
          apiLogin({
          userName: this.form.userName,
          password: this.form.password,
        }).then((res) => {
          console.log(res);
          this.$router.push({
            name: "index",
          });
        });
        } else {
          // 表单校验失败
          return false
        }
      })
    },
    reset () {
      this.$refs.loginForm.resetFields()
    }
  }
}
</script>

<style scoped>
.layout {
  background: url("../assets/background.png");
  background-size: 100% 100%;
}

.login-form {
  background: #fff;
  border: 1px solid #fff;
  border-radius: 5px;
  width: 600px;
  position: relative;
  margin: 0 auto;
  padding: 80px 0 80px 80px;
  top: 50%;
  transform: translateY(-50%);
}
</style>
