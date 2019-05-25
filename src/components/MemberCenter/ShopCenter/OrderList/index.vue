<template>
  <!--订单列表-->
  <div class="user-content">
      <h3>订单列表</h3>
      查看你的订单
      <el-table style="width: 100%">
          <el-table-column label="订单号" width="200">
              <template slot-scope="scope">
                  <router-link :to="{name:'Order'}">
                    <span>{{orderL.orderbNo}}</span>
                  </router-link>
              </template>
          </el-table-column>
          <el-table-column label="订单状态" width="80">
              <template slot-scope="scope">
                  <span>￥666</span>
              </template>
          </el-table-column>
          <el-table-column label="订单提交日期" width="200">
              <template slot-scope="scope">
                  <span>{{new Date(orderL.benginTime).getFullYear()}}-{{new Date(orderL.benginTime).getMonth()+1}}-{{new Date(orderL.benginTime).getDate()}}</span>
              </template>
          </el-table-column>
          <el-table-column label="总计" width="80">
              <template slot-scope="scope">
                  <span class="font-color-red">￥666{{}}</span>
              </template>
          </el-table-column>
          <el-table-column label="操作">
              <template slot-scope="scope">
                  <router-link :to="{name:'Order'}">
                      <el-button size="mini">查看</el-button>
                  </router-link>
                  <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">立即支付</el-button>
                  <el-button size="mini"  @click="handleDelete(scope.$index, scope.row)">删除</el-button>
              </template>
          </el-table-column>
      </el-table>
  </div>
</template>
<script>
import {orderLists} from 'Api/request_cg.js'
export default {
  data () {
    return {
      orderbNo: ''
    }
  },
  computed: {
    orderL: function () {
      let lists = this.$store.state.orderlist.orderlists
      return lists
    }
  },
  mounted () {
    console.log(JSON.stringify(this.orderList) + 'gsfdgs')
    orderLists({
      currentPage: 1,
      userId: window.localStorage.getItem('token') || ''
    }, (res) => {
      this.$store.commit('getorder', res.data)
    })
  }
}

</script>
<style lang="less" scoped>
  @import "~static/css/common.less";
  /deep/
  .el-button+.el-button{
      margin-left: 0px;
  }
  .user-content{
    .font-color-red{
      font-weight: bold;
    }
  }

</style>
