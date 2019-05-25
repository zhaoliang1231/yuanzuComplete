import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/Index/Index'
import Login from '../components/LoginRegister/index'
// 公告页面
import Notice from '../components/Notice/index'
// 详情页
import Detail from '../components/Detail/index'
// 详情页里 商品介绍
import introduction from '../components/Detail/Introduction/introduction'
// 详情页里 商品评论
import evaluate from '../components/Detail/Evaluate/evaluate'
// 陈-----会员中心--start
import MemberCenter from '../components/MemberCenter/index.vue'
import PersonalData from '../components/MemberCenter/PersonalCenter/PersonalData/index.vue'
import Invoice from '../components/MemberCenter/PersonalCenter/Invoice/index.vue'
import ReceivingAddress from '../components/MemberCenter/PersonalCenter/ReceivingAddress/index.vue'
import AddAddress from '../components/MemberCenter/PersonalCenter/AddAddress/index.vue'
import Editaddress from '../components/MemberCenter/PersonalCenter/Editaddress/index.vue'
import ChangePassword from '../components/MemberCenter/PersonalCenter/ChangePassword/index.vue'
import EditProfile from '../components/MemberCenter/PersonalCenter/EditProfile/index.vue'
import AlterEmail from '../components/MemberCenter/PersonalCenter/AlterEmail/index.vue'
import AlterPhone from '../components/MemberCenter/PersonalCenter/AlterPhone/index.vue'
import ElectronicTicket from '../components/MemberCenter/PersonalCenter/ElectronicTicket/index.vue'
import Integral from '../components/MemberCenter/PersonalCenter/Integral/index.vue'
import CollectionList from '../components/MemberCenter/ShopCenter/CollectionList/index.vue'
import OrderList from '../components/MemberCenter/ShopCenter/OrderList/index.vue'
import Order from '../components/MemberCenter/ShopCenter/Order/index.vue'
// 陈----会员中心--end

import Settlement from '../components/Settlement/index'
import ShopCart from '../components/Settlement/ShopCart/ShopCart'
import FillOrder from '../components/Settlement/FillOrder/FillOrder'
import SubmitSuccess from '../components/Settlement/SubmitSuccess/SubmitSuccess'
// meta: { requiresAuth: true }判断是否登录的路由，添加这个meta标记
//分类And搜索页
import Classfiy from '../components/Classfiy/index.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    // 购物车流程
    {
      path: '/settlement',
      name: 'Settlement',
      component: Settlement,
      redirect: '/settlement/shopcart',
      children: [
        {
          path: 'shopcart',
          name: 'shopcart',
          component: ShopCart,
          meta: {requireAuth: true}
        },
        {
          path: 'fillorder',
          name: 'fillorder',
          component: FillOrder,
          meta: {requireAuth: true}
        },
        {
          path: 'submitsuccess',
          name: 'submitsuccess',
          component: SubmitSuccess,
          meta: {requireAuth: true}
        }
      ]
    },
    // 陈-----会员中心--start
    {
      name: 'MemberCenter',
      path: '/memberCenter',
      component: MemberCenter,
      children: [
        {
          path: 'personalCenter/personalData',
          name: 'PersonalData',
          component: PersonalData,
          meta: {requireAuth: true}
        },
        {
          path: 'personalCenter/editProfile',
          name: 'EditProfile',
          component: EditProfile,
          meta: {requireAuth: true}
        },
        {
          path: 'personalCenter/alterEmail',
          name: 'AlterEmail',
          component: AlterEmail,
          meta: {requireAuth: true}
        },
        {
          path: 'personalCenter/alterPhone',
          name: 'AlterPhone',
          component: AlterPhone,
          meta: {requireAuth: true}
        },
        {
          path: 'personalCenter/changePassword',
          name: 'ChangePassword',
          component: ChangePassword,
          meta: {requireAuth: true}
        },
        {
          path: 'personalCenter/electronicTicket',
          name: 'ElectronicTicket',
          component: ElectronicTicket,
          meta: {requireAuth: true}
        },
        {
          path: 'personalCenter/integral',
          name: 'Integral',
          component: Integral,
          meta: {requireAuth: true}
        },
        {
          path: 'personalCenter/invoice',
          name: 'Invoice',
          component: Invoice,
          meta: {requireAuth: true}
        },
        {
          path: 'personalCenter/receivingAddress',
          name: 'ReceivingAddress',
          component: ReceivingAddress,
          meta: {requireAuth: true}
        },
        {
          path: 'personalCenter/addAddress',
          name: 'AddAddress',
          component: AddAddress,
          meta: {requireAuth: true}
        },
        {
          path: 'personalCenter/editaddress',
          name: 'Editaddress',
          component: Editaddress,
          meta: {requireAuth: true}
        },
        {
          path: 'personalCenter/orderList',
          name: 'OrderList',
          component: OrderList,
          meta: {requireAuth: true}
        },
        {
          path: 'shopCenter/collectionList',
          name: 'CollectionList',
          component: CollectionList,
          meta: {requireAuth: true}
        },
        {
          path: 'shopCenter/order',
          name: 'Order',
          component: Order,
          meta: {requireAuth: true}
        }
      ]
    },
    // 陈----会员中心--end
    // 公告页面
    {
      name: 'Notice',
      path: '/notice',
      component: Notice,
      props:(route)=>({
        id:route.query.id
      })
    },
    // 详情页
    {
      name: 'detail',
      path: '/detail',
      component: Detail,
      children: [
        // 商品介绍
        {
          path: '',
          name: 'introduction',
          component: introduction,
        },
        // 商品评价
        {
          path: 'evaluate',
          name: 'evaluate',
          component: evaluate
        }
      ]
    },
    // 分类And搜索页
    {
      path: '/classfiy',
      name: 'classfiy',
      component: Classfiy,
      props: (route) => ({
        yid: route.query.yid,
        eid: route.query.eid,
        typeNo: route.query.typeNo,
        name: route.query.name
      })
    }
  ]
})
