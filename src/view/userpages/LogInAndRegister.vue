<template>
  <div id="body">
    <div class="loginBody">
      <el-form :label-position="labelPosition" label-width="95px" :model="formLabelAlign">
        <el-form-item label="账户" style="color:navajowhite;">
          <el-input type="string" v-model="formLabelAlign.email" style="width:225px"
                    placeholder="请输入邮箱"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="formLabelAlign.password" style="width:225px"
                    :type="passwordShow ? 'text' : 'password'"
                    placeholder="请输入登录密码" @keyup.enter.native="login">
          </el-input>
          <el-button icon="el-icon-view" type="text"
                     style="color: white"
                     @click="passwordShow=!passwordShow"></el-button>
        </el-form-item>
        <el-form-item style="margin-top: 20px;margin-bottom: 10px;margin-left: 15px">
          <el-button type="text" @click="login" icon="el-icon-s-check" style="color:navajowhite;">登录</el-button>
          <el-button type="text" @click="ResetPassword" icon="el-icon-s-custom" style="color:navajowhite;">注册
          </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import store from "../../vuex/store.js";
import ResetPassword from "@/view/userpages/ResetPassword.vue";

export default {
  name: "LogInAndRegister",
  computed: {
    ResetPassword() {
      return ResetPassword
    }
  },
  data() {
    return {
      labelPosition: 'right',
      passwordShow: false,
      formLabelAlign: {
        email: '',
        password: '',
      },
    }
  },
  store,
  methods: {
    login() {
      if (this.formLabelAlign.email === '')
        this.$message.warning("请输入邮箱")
      else if (this.formLabelAlign.password === '')
        this.$message.warning("请输入密码")
      else {
        axios.get(`nas/login/${this.formLabelAlign.email}/${this.formLabelAlign.password}`).then(res => {
          if (res.status === 220) {
            this.$message.error("登录密码错误！")
          } else if (res.status === 210) {
            this.$message.warning("邮箱地址不存在！")
          } else if (res.status === 200) {
            localStorage.setItem('email', res.data.email)
            this.$router.push({path: '/HomePage'})
          }
        })
      }
    },
  }
};
</script>
<style>
@import '../../component/reset.css';

#body {
  height: 585px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  display: -webkit-flex;
  background-image: url('pomelo.jpg');
}

page {
  background: #ebecee;
}

html {
  background: -webkit-linear-gradient(top, #EAF2F5, rgba(234, 87, 127, 0.99));
}

</style>
