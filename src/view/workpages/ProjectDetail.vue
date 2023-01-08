<template>
  <el-container>
    <el-header style="padding: 0 0">
      <CommonHeader/>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <CommonAside/>
      </el-aside>
      <el-main>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import store from "@/vuex/store.js";
import CommonAside from "../../component/CommonAside"
import CommonHeader from "@/component/CommonHeader";

export default {
  name: "ProjectDetail",
  store,
  components: {
    CommonAside,
    CommonHeader
  },
}
</script>

<style scoped>
</style>
