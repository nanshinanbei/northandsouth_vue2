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
        <el-col :span="8">
          <div style="display: flex;flex-direction: column;justify-content: center">
            <div>
              <el-image
                  style="width: 240px;height: 240px"
                  :src="require('/src/avatar/pomelo3.jpg')"></el-image>
            </div>
          </div>
        </el-col>
        <el-col :span="10">
          <div style="display: flex;flex-direction: column;justify-content: center">
            <div>
              <el-image
                  style="width: 240px;height: 240px"
                  :src="require('/src/avatar/pomelo2.jpg')"></el-image>
            </div>
          </div>
        </el-col>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import store from "../../vuex/store.js"
import CommonAside from "../../component/CommonAside"
import CommonHeader from "@/component/CommonHeader";

export default {
  name: "userHome",
  store,
  components: {
    CommonAside,
    CommonHeader,
  },
}
</script>

<style lang="less">
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.grid-content1 {
  border-radius: 4px;
  min-height: 36px;
  padding: 0;
}
.grid-content2 {
  border-radius: 4px;
  width: 600px;
  min-height: 36px;
}
.el-main{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.el-aside::-webkit-scrollbar {
  display: none;
}
.user {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 0;
  .user-info {
    .user-nickname {

      text-align: center;
      font-size: 20px;
      font-weight: bold;
    }

    .user-name {
      text-align: center;
      font-size: 16px;
      font-weight: bold;
    }

    .user-access {

      text-align: center;
      font-size: 16px;
      font-weight: bold;
    }

    .user-phone {
      font-size: 16px;
      font-weight: bold;
    }

    .user-email {
      font-size: 16px;
      font-weight: bold;
    }

    .user-school {
      font-size: 16px;
      font-weight: bold;
    }
  }
}
.el-header{
  padding: 0 0;
}
</style>
