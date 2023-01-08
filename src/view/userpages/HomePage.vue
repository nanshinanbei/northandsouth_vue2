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
        <div>
          <el-col :span="8">
            <div style="display: flex;flex-direction: column;justify-content: center">
              <div>
                <el-image
                    style="width: 240px;height: 240px"
                    :src="require('/src/avatar/qll.jpg')"></el-image>
              </div>
            </div>
          </el-col>
          <el-col :span="16">
              <el-card  style="width: 300px;background-color: black">
                <div class="user">
                  <div class="user-info">
                    <div class="user-nickname">用户名：{{ userinfo.username }}</div>
                    <br>
                    <div class="user-name">姓名：{{ userinfo.name }}</div>
                    <br>
                    <div class="user-phone">电话：{{ userinfo.telephone }}</div>
                    <br>
                    <div class="user-email">邮箱：{{ userinfo.email }}</div>
                    <br>
                    <div class="user-school">学校：{{ userinfo.school }}</div>
                    <br>
                  </div>
                </div>
                <template style=" display:flex;justify-content: center;align-text:center;">
                  <el-button size="small"
                             type="text"
                             icon="el-icon-edit"
                             round
                             style="margin-top: 0px;margin-left: 90px;color:navajowhite;"
                             @click="showEditDialog()">修改密码
                  </el-button>
                </template>
              </el-card>
            <div>
            </div>
            <el-card style="width: 100px" v-if="editDialogVisible">
              <el-dialog
                  title="修改密码"
                  :visible.sync="editDialogVisible"
                  width="30%"
                  @close="editDialogClosed">
                <el-form
                    style="color: navajowhite;"
                    :model="userinfo" :rules="editFormRules" ref="editFormRef" label-width="100px">
                  <el-form-item label="原密码" prop="oldPassword">
                    <el-input type="password" v-model="userPassword.oldPassword"></el-input>
                  </el-form-item>
                  <el-form-item label="新密码" prop="newPassword">
                    <el-input type="password" v-model="userPassword.newPassword"></el-input>
                  </el-form-item>
                  <el-form-item label="确认新密码" prop="confirmPassword">
                    <el-input type="password" v-model="userPassword.confirmPassword"></el-input>
                  </el-form-item>
                </el-form>
                <span slot="footer" class="dialog-footer">
                <el-button @click="editDialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="editUserInfo">确 定</el-button>
              </span>
              </el-dialog>
            </el-card>
          </el-col>
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import axios from "axios";
import store from "../../vuex/store.js"
import CommonAside from "../../component/CommonAside"
import CommonHeader from "@/component/CommonHeader";

export default {
  name: "HomePage",
  store,
  data() {
    return {
      editDialogVisible: false,
      userinfo: {
        "id": "",
        "username": "",
        "phone": "",
        "email": "",
        "school": "",
        "name": ""
      },
      userPassword:{
        oldPassword:'',
        newPassword:'',
        confirmPassword:''
      },
      editFormRules: {
        email: [
          {
            required: true,
            message: '请输入密码',
            trigger: 'blur'
          },
          {
            trigger: 'blur'
          }
        ],
      },
    }
  },
  components: {
    CommonAside,
    CommonHeader,
  },
  created: function () {
      this.userinfo.email=localStorage.getItem('email')
      axios.get(`nas/getUserMessage/email=${this.userinfo.email}`).then(res => {
        console.log(res.data)
        this.userinfo.id = res.data.id
        this.userinfo.username = res.data.username
        this.userinfo.name = res.data.name
        this.userinfo.telephone = res.data.telephone
        this.userinfo.email = res.data.email
        this.userinfo.school = res.data.school
      })
  },
  methods: {
    showEditDialog() {
      this.editDialogVisible = true;
    },
    editDialogClosed() {
      this.$refs.editFormRef.resetFields()
    },
    editUserInfo() {
      console.log("正在修改密码")
      //关闭会话框
      axios.get(`nas/getUserMessage/email=${this.userinfo.email}`).then(res=>{
        console.log(res.data)
        this.password=res.data.password
      })
      if(this.userPassword.oldPassword!==this.password){
        this.$message.error("原密码不正确！")
      }else if(this.userPassword.newPassword!==this.userPassword.confirmPassword){
        this.$message.error("确认密码不正确！")
      }else{
        axios.get(`nas/editPassword/${this.userinfo.email}/${this.userPassword.newPassword}`).then(res=>{
          console.log(res)
          if(res.status===200){
            this.$message.success("修改密码成功！")
          }
        })
        this.editDialogVisible = false
      }
    },
  }
}
</script>

<style lang="less">

.user {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 0;
  color:navajowhite;
  background-color: black;
  .user-info {
    background-color: black;
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

.el-aside {
  display: block;
  position: absolute;
  left: 0;
  top: 60px;
  bottom: 0;
  background-color: navajowhite;
}

.el-main {
  position: absolute;
  left: 200px;
  right: 0;
  top: 60px;
  bottom: 0;
  overflow-y: scroll;
  background-image: url("/src/avatar/pomelo1.jpg");
}

.box-block {
  height: 100%;
  justify-content: center;
  align-items: center;
}

.el-header {
  padding: 0 0;
}

.el-dialog__header {
  background: navajowhite;

}

/* 弹出层设置背景色 底部*/

.el-dialog__footer {
  background-color: navajowhite;

}
/* 弹出层设置背景色 身体部份*/
.el-dialog__body{
  background:linear-gradient(to bottom,navajowhite,navajowhite );
  background-size: 100% ,100%;

}
</style>
