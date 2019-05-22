<template>
  <!--收货地址-->
  <div class="user-content clearfix">
      <h3>管理你的收获地址</h3>
      <router-link :to="{name:'AddAddress'}"><el-button type="danger" class="add-address">添加新地址</el-button></router-link>
      <ul>
        <li>
          <span>大哥大</span>,
          <span>中国</span>,
          <span>重庆</span>,
          <span>沙坪坝</span>,
          <span>西永天坑德克特</span>,
          <span>具体详细地址</span>,
          <span>400500</span>,
          <span>13658475365</span>
        </li>
        <li style="float: right">
          <router-link :to="{name:'Editaddress'}">编辑</router-link>
          <a>删除</a>
          <a>设为默认</a>
        </li>
      </ul>
  </div>
</template>
<script>
import {receivingAddress} from 'Api/request_cg.js'
export default {
  data () {
    return {
    }
  },
  mounted () {
    receivingAddress({}, (res) => {
      console.log(res.data)
    })
  }
}
</script>
<style lang="less" scoped>
  @import "~static/css/common.less";
  .user-content{
      .el-button.el-button--danger.add-address{
          float: right;
          margin-top: -65px;
          /deep/span{
              color: @white;
          }
      }
      ul {
          border-bottom: 1px solid;
          margin-bottom: 20px;
          li {
              height: 20px;
              line-height: 20px;
              display: inline-block;
          }
      }
  }
</style>
