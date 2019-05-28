<template>
  <!--t添加地址-->
  <div class="user-content">
    <h3>更改个人资料</h3>
    <ul>
      <li>
        <span>姓名：</span>
        <span>
          <input readonly="readonly" type="text" v-model="userinfo.userPhone"/>
        </span>
      </li>
      <li>
        <span>
           <div class="block">
            <span class="demonstration">生日：</span>
            <el-date-picker v-model="userBirthday" type="date" placeholder="选择日期">
            </el-date-picker>
            </div>
        </span>
      </li>
      <li>
        <span>邮箱：</span>
        <span><input type="text" v-model="userinfo.userEmail"/></span>
      </li>
    </ul>
    <el-button type="danger" @click="editProfile">确认 </el-button>
    <router-link :to="{name:'PersonalData'}"><el-button type="info">返回</el-button></router-link>
  </div>
</template>
<script>
import {changeData} from 'Api/request_cg.js'
export default {
  data () {
    return {
      userBirthday: ''
    }
  },
  computed: {
    userinfo: function () {
      return this.$store.state.user.usercenter
    }
  },
  mounted () {
    let dateBdate = new Date(this.$store.state.user.usercenter.userBirthday).toString('yyyy-mm-dd')
    let date = new Date(dateBdate)
    this.userBirthday = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()
  },
  methods: {
    editProfile: function () {
      changeData({
        userid: window.localStorage.getItem('userId'),
        useremail: this.userinfo.userEmail,
        userName: this.userinfo.userPhone,
        userbirthday: this.userBirthday
      }, (res) => {
        if (res.success) {
          this.$message({
            message: '修改成功',
            type: 'success'
          })
          setTimeout(function () {
            this.$router.push('/memberCenter/personalCenter/personalData')
          }, 2000)
        }
      })
    }
  }
//  watch: {
//    '$store.state.user.usercenter' () {
//      let dateBdate = new Date(this.$store.state.user.usercenter.userBirthday).toString('yyyy-mm-dd')
//      let date = new Date(dateBdate)
//      this.userBirthday = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()
//    }
//  }
}
</script>
<style lang="less" scoped>
  @import "~static/css/common.less";
  .user-content{
    ul{
      li {
        line-height: 50px;
        span{
          i{
            margin-right: 5px;
            color: @pink;
          }
        }
      }
    }
    /deep/
    .el-date-editor.el-input{

    }
    .el-input__inner{
      height: 23px;
      font-size: 12px;
      width: 135px;
    }
  }
</style>
