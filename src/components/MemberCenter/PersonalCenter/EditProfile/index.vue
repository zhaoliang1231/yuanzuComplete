<template>
  <!--t添加地址-->
  <div class="user-content">
    <h3>更改个人资料</h3>
    <ul>
      <li>
        <span>姓名：</span>
        <span><input type="text" v-model="userinfo.userPhone"/></span>
      </li>
      <li>
        <span >生日：</span>
        <span>
          <input readonly="readonly"/>
          (<i>*</i>更改生日请联系管理员)
        </span>
      </li>
      <li>
        <span>邮箱：</span>
        <span><input/></span>
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
    }
  },
  computed: {
    userinfo: function () {
      return this.$store.state.user.usercenter
    }
  },
  mounted () {
    console.log(this.userinfo.name)
    changeData({
      userId: window.localStorage.getItem('token') || ''
    }, (res) => {
      this.$store.commit('getuser', res.data[0])
    })
  }
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
  }
</style>
