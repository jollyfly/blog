<template>
  <div class="login-model">
    <el-button plain class="login-btn" @click="toLogin" v-show="btnShow">登陆</el-button>
    <el-dialog title="登陆" :visible.sync="visible" width="30%">
      <el-form :model="loginVO">
        <el-form-item label="用户名" required>
          <el-input v-model="loginVO.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" required>
          <el-input v-model="loginVO.password" type="password"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="visible = false">取 消</el-button>
        <el-button type="primary" @click="login">确 定</el-button>
      </span>
    </el-dialog>
    <logged-menu v-show="menuShow" :logged-menu="loggedMenu"></logged-menu>
  </div>
</template>

<script>
import LoggedMenu from './LoggedMenu'
import { mapState } from 'vuex'

export default {
  name: 'LoginModel',
  components: {LoggedMenu},
  computed: mapState({
    btnShow: state => !state.loginModule.loginState,
    menuShow: state => state.loginModule.loginState
  }),
  data () {
    return {
      visible: false,
      loginVO: {
        username: '',
        password: ''
      },
      loggedMenu: {
        avatar: '/static/img/avatar.f606c20.jpg'
      }
    }
  },
  methods: {
    toLogin () {
      this.visible = true
    },
    login () {
      this.visible = false
      this.$store.commit('loginS')
    }
  }
}
</script>

<style scoped>
  .login-btn {
    margin-top: 10px;
  }

</style>
