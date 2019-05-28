<template>
  <!--个人资料-->
  <div class="user-content">
    <h3>我的资料</h3>
    <el-form :label-position="labelPosition" label-width="80px">
      <el-form-item label="姓名">
        <div>{{userinfo.userPhone}}</div>
      </el-form-item>
      <el-form-item label="生日">
        <div>{{new Date(userinfo.userBirthday).getFullYear()}}-{{new Date(userinfo.userBirthday).getMonth()+1}}-{{new Date(userinfo.userBirthday).getDate()}}</div>
      </el-form-item>
      <el-form-item label="电子邮箱">
        <div>{{userinfo.userEmail}}</div>
      </el-form-item>
      <el-form-item label="电话">
        <div>{{userinfo.userPhone}}</div>
      </el-form-item>
      <el-form-item label="推荐电话">
        <div>{{userinfo.refPhone}}</div>
      </el-form-item>
    </el-form>
    <el-button-group>
      <router-link :to="{name:'ChangePassword'}"><el-button>更改密码</el-button></router-link>
      <router-link :to="{name:'EditProfile'}"><el-button>更改个人详细信息</el-button></router-link>
      <router-link :to="{name:'AlterEmail'}"><el-button>更改电子邮箱</el-button></router-link>
      <router-link :to="{name:'AlterPhone'}"><el-button>更改电话号码</el-button></router-link>
    </el-button-group>
  </div>
</template>
<script>
import {personalData} from 'Api/request_cg.js'
export default {
  data () {
    return {
      labelPosition: 'left'
    }
  },
  computed: {
    userinfo: function () {
      return this.$store.state.user.usercenter
    }
  },
  mounted () {
    personalData({
      userId: window.localStorage.getItem('userId') || ''
    }, (res) => {
    // console.log(res.data + '666666')
      this.$store.commit('getuser', res.data[0])
    })
  }
}
</script>
<style lang="less" scoped>
  .user-content{
    .el-form{
      .el-form-item{
        margin-bottom: 0;
        .el-form-item__content{
          .el-input{
            /deep/.el-input__inner{
              width: 200px;
              height: 28px;
              &:hover{
                cursor:not-allowed;
              }
              &:focus{
                border-color: #DCDFE6;
              }
            }
          }
        }
      }
    }
  }
</style>
