<template>
  <div class="box">
    <p style="padding-left:20px ">南北前端试用系统</p>
    <el-button style="text-align: right; font-size: 12px;margin-right: 20px;color:black;" type="text" plain @click="logout">注销登录</el-button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "CommonHeader",
  methods: {
    logout() {
      axios.get('nas/logout').then(res => {
        this.$message.success("注销登录成功！")
        this.$store.state.menuIndex=1
        localStorage.clear()
        return res;
      })
      this.$router.push({path: '/'})
    },
  }
}
</script>

<style scoped>

.box{
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  margin-left:0;
  color: black;
  background-color: navajowhite;
  color: black;
  font-size: 20px;
  font-weight: bold;
  padding: 0 0;
}
</style>
