<template>
  <div>
    <van-nav-bar title="登录"/>
    <form>
      <van-cell-group>
        <van-field
          v-model="login.user"
          required
          clearable
          label="手机号"
          placeholder="请输入手机号"
        />
        <van-field
          v-model="login.psd"
          type="password"
          label="验证码"
          placeholder="请输入验证码"
          required
        />
      </van-cell-group>
      <div class="login-btn">
        <van-button @click="handleLogin" class="btn" type="info">登录</van-button>
      </div>
    </form>

  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Login',
  data () {
    return {
      login: {
        user: '',
        psd: ''
      }
    }
  },
  methods: {
    handleLogin () {
      axios({
        url: 'http://toutiao.course.itcast.cn',
        method: 'POST',
        data: this.user
      })
      // console.log(res)
    }
  }
}
</script>

<style lang="less" scoped>
.login-btn{
  padding: 10px;
  .btn {
    width: 100%;
  }
}
</style>
