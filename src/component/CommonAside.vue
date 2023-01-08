<template>
  <el-row class="tac" >
    <el-col :span="12">
      <el-menu
        :default-active="`${$store.state.menuIndex}`"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="navajowhite"
        active-text-color="black">
        <el-menu-item index="1" @click="SkipToPage('/homepage',1)">
          <i class="el-icon-menu"></i>
          <span slot="title" >首页</span>
        </el-menu-item>
        <el-menu-item index="2" @click="SkipToPage('/userHome',2)">
          <i class="el-icon-s-custom"></i>
          <span slot="title" >一</span>
        </el-menu-item>
        <el-menu-item index="4" @click="SkipToPage('/userHome',4)">
          <i class="el-icon-s-marketing"></i>
          <span slot="title">二</span>
        </el-menu-item>

        <el-menu-item index="5" @click="SkipToPage('/userHome',5)">
          <i class="el-icon-location"></i>
          <span slot="title">三</span>
        </el-menu-item>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script>
import store from "@/vuex/store";
export default {

  name: "Com  monAside",
  data(){
    return {
      isAdmin:true,
      menuIndex: 1,
    }
  },
  store,
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    SkipToPage(path,menuIndex){
      this.$store.state.menuIndex= menuIndex;
      console.log(this.$store.state.menuIndex);
      this.$router.push(path);
    }
  },
  computed:{
    noChildren() {
      return this.MenuData.filter(item => !item.children)
    },
    hasChildren(){
      return this.MenuData.filter(item=>item.children)
    }
  }
}
</script>

<style scoped>
.el-menu-vertical-demo{
  width:200px;
  border: none;
  color: navajowhite;
  background-color: navajowhite;
}
html{

}
.tac{
  background-color: black;
}
</style>
