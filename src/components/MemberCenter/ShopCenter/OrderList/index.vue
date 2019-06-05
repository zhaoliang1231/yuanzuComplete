<template>
  <!--订单列表-->
  <div class="user-content">
      <h3>订单列表</h3>
      查看你的订单
      <table border="0" cellspacing="1" cellpadding="0" style="width: 100%">
          <thead>
              <tr>
                <th>订单号</th>
                <th>订单状态</th>
                <th>订单提交日期</th>
                <th>总计</th>
                <th>操作</th>
              </tr>
          </thead>
          <tbody>
              <tr v-for="(item, index) in userorder" :key="index">
                <td>
                  <router-link :to="{name:'Order'}">{{item.orderbNo}}</router-link>
                </td>
                <td>已提交</td>
                <td>{{new Date(item.benginTime).getFullYear()}}-{{new Date(item.benginTime).getMonth()+1}}-{{new Date(item.benginTime).getDate()}}</td>
                <td>￥666</td>
                <td>
                  <router-link :to="{name:'Order'}">查看</router-link>
                  <a>立即支付</a>
                  <a @click="deleteList(index)">取消</a>
                </td>
              </tr>
          </tbody>
      </table>
  </div>
</template>
<script>
import {listsorder} from 'Api/request_cg.js'
export default {
  data () {
    return {
    }
  },
  computed: {
    userorder: function () {
      return this.$store.state.orderlist.orderlists
    }
  },
  mounted () {
    listsorder({
     // currentPage: 1,
      userId: window.localStorage.getItem('userId') || ''
    }, (res) => {
      this.$store.commit('getorder', res.data)
    })
  },
  methods: {
    deleteList (index) {
      this.userorder.splice(index, 1)
      this.$store.commit('getorder', this.userorder)
    }
  }
}

</script>
<style lang="less" scoped>
  @import "~static/css/common.less";
  .user-content{
    table{
      border: 1px solid @gray;
      border-collapse: collapse;
      table-layout: fixed;
      text-align: center;
      /*<!--text-align: center;-->*/
      /*<!--border-top: 1px solid @gray;-->*/
      /*<!--border-left: 1px solid @gray;-->*/
      /*<!--border-spacing: 0;-->*/
      tr{
        height: 35px;
        line-height: 34px;
        border:1px solid @gray;
        border-left: none;
        border-right: none;
        td{
          /deep/
          a{
            text-decoration: underline;
          }
        }
      }
      tbody{
        td:nth-child(4){
          color: @pink;
          font-weight: bold;
        }
      }
    }
  }
</style>
