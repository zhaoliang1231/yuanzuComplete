<template>
<div class="memberCenter">
  <!--头部-->
    <div class="member-header">
        <router-link to="/">主页</router-link>
        >
        <router-link to="/memberCenter/personalCenter/personalData">我的账户</router-link>
        >
        <router-link :to="urlPath">{{text}}</router-link>
    </div>
  <!--中心内容-->
    <div class="user-center clearfix">
        <div class="user-nav">
            <p>欢迎光临元祖食品</p>
            <p>会员中心</p>
            <p>{{userinfo.userPhone}}</p>
            <p>会员等级</p>
            <!--<UserNav/>-->
            <div class="personal-center">
                <el-row class="tac">
                    <el-col :span="12">
                        <el-menu default-active="1"  class="el-menu-vertical-demo" :default-openeds="openends">
                            <el-submenu index="1">
                                <template slot="title">
                                    <span>个人中心</span>
                                </template>
                                <el-menu-item-group>
                                    <router-link :to="{name:'PersonalData',params:{thisname:'我的资料'}}">
                                        <el-menu-item index="1-1">我的资料</el-menu-item>
                                    </router-link>
                                    <router-link :to="{name:'ChangePassword',params:{thisname:'修改密码'}}">
                                       <el-menu-item index="1-2">修改密码</el-menu-item>
                                    </router-link>
                                    <router-link :to="{name:'ReceivingAddress',params:{thisname:'收货地址'}}">
                                        <el-menu-item index="1-3">收货地址</el-menu-item>
                                    </router-link>
                                    <router-link :to="{name:'Integral',params:{thisname:'增值税发票'}}">
                                        <el-menu-item index="1-4">增值税发票</el-menu-item>
                                    </router-link>
                                    <router-link :to="{name:'ElectronicTicket',params:{thisname:'我的电子券'}}">
                                        <el-menu-item index="1-5">我的电子券</el-menu-item>
                                    </router-link>
                                    <router-link :to="{name:'Invoice',params:{thisname:'我的积分'}}">
                                        <el-menu-item index="1-6">我的积分</el-menu-item>
                                    </router-link>
                                </el-menu-item-group>
                            </el-submenu>
                            <el-submenu index="2">
                                <template slot="title">
                                    <span>购物中心</span>
                                </template>
                                <el-menu-item-group>
                                    <router-link :to="{name:'shopcart',params:{thisname:'购物车'}}"><el-menu-item index="2-1">购物车</el-menu-item></router-link>
                                    <router-link :to="{name:'OrderList',params:{thisname:'订单列表'}}"><el-menu-item index="2-2">订单列表</el-menu-item></router-link>
                                    <router-link :to="{name:'CollectionList',params:{thisname:'收藏列表'}}"><el-menu-item index="2-3">收藏列表</el-menu-item></router-link>
                                </el-menu-item-group>
                            </el-submenu>
                        </el-menu>
                    </el-col>
                </el-row>
            </div>
        </div>
        <router-view></router-view>
    </div>
</div>
</template>
<script>
import UserNav from './UserNav'
import {personalData} from 'Api/request_cg.js'
export default {
  data () {
    return {
      openends: ['1', '2'],
      text: '个人资料',
      urlPath: '/memberCenter/personalCenter/personalData'
    }
  },
  components: {
    UserNav
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
      this.$store.commit('getuser', res.data[0])
    })
  }
}
</script>
<style lang="less" scoped>
  @import "~static/css/common.less";
  /*个人中心*/
  .memberCenter{
      //头部
      .member-header{
        height: 45px;
        line-height: 45px;
      }
      //  内容
      .user-center{
          padding: 0 20px;
          //  左边导航
          .user-nav{
              float: left;
              width: 181px;
              padding-top: 8px;
              p{
                height: 30px;
                line-height: 30px;
              }
          }
          //  右边内容
          .user-content{
              float: left;
              width: 945px;
              min-height: 490px;
              border: 1px solid @lightgrey;
              padding: 28px 46px 0;
                /deep/h3{
                  height: 30px;
                  line-height: 30px;
                  font-size: 14px;
                  border-bottom: 1px solid @gray;
                  margin-bottom: 20px;
                }
          }
      }
  }
  .personal-center {
    width: 100%;
    /deep/
    .el-row{
      .el-col{
        width: 100%;
        .el-submenu__title{
          padding: 0 0;
          height: 32px;
          line-height: 32px;
        }
        .el-menu--inline{
          .el-menu-item-group{
            .el-menu-item{
              padding: 0 0;
              min-width: 181px;
              height: 30px;
              line-height: 30px;
            }
          }
        }
      }
    }
  }
</style>
