<template>
  <el-container>
    <el-header>
      <CommonHeader/>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <CommonAside/>
      </el-aside>
      <el-main class="box">
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import store from "@/vuex/store";
import CommonAside from "../../component/CommonAside"
import CommonHeader from "@/component/CommonHeader";

export default {
  name: "ChannelManagement",
  store,
  components: {
    CommonAside,
    CommonHeader
  },
}
</script>

<style scoped>
.el-aside {
  display: block;
  position: absolute;
  left: 0;
  top: 60px;
  bottom: 0;
}

.el-main {
  position: absolute;
  left: 200px;
  right: 0;
  top: 60px;
  bottom: 0;
  overflow-y: scroll;
}

.box-block {
  justify-content: center;
  align-items: center;
}

.el-header {
  padding: 0 0;
}
</style>
