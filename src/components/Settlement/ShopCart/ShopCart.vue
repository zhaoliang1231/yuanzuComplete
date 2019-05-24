<template>
  <div style="height: auto;display: inline-block">
    <div class="shopcart-nullcart-box" v-if="cartIsNull==true">
      <div>
        <img src="../../../static/img/icon_cart.png" alt="">
        <div class="sn-n-box">
          <p>您的购物车还是空的</p>
          <p>返回首页添加喜欢的产品吧!</p>
          <router-link to="/" class="hover-bg-pink">返回首页</router-link>
        </div>
      </div>
    </div>
    <div v-if="cartIsNull==false" class="shopcart-content-box">
      <div class="shopcart-cft-tit-box">
        <tr>
          <td width="460px" class="font-weight-bold text-align-center">商品</td>
          <td width="197px" class="font-weight-bold text-align-center">单价</td>
          <td width="357px" class="font-weight-bold text-align-center">数量</td>
          <td width="182px" class="font-weight-bold text-align-center">操作</td>
        </tr>

      </div>
      <ul>
        <li v-for="(item, index) in lists" :key="index"  >
          <div class="spct-commodity-information-box">
            <a href="#" class="spct-ci-img-a">
              <img :src="item.imgs" alt="">
            </a>
            <div class="spct-ci-title-box padding-y-30">
              <router-link :to="'/detail?id='+item.goodsId" class="font-weight-bold a-hover-pink">{{item.goodsName}}</router-link>
              <p>规格：<span>8号</span> 夹馅：<span>香芋+香芋（网红款）</span></p>
            </div>
          </div>
          <div class="spct-pirce-box">
            <span class="font-weight-bold">¥{{item.goodsPrice}}.00</span>
          </div>
          <div class="spct-number-box">
            <div>
              <a href="javascript:void(0);" @click="NumberSubtract(index)">-</a>
              <input type="text" @blur="isnumber(index)" v-model="item.goodsNum">
              <a href="javascript:void(0);" @click="NumberAdd(index)">+</a>
            </div>
          </div>
          <div class="spct-remove-box">
            <a href="javascript:void(0);" @click="deleteList(index)" class="a-hover-pink">移除</a>
          </div>
        </li>
      </ul>
    </div>
    <settlements :total="total" v-if="cartIsNull==false"></settlements>
  </div>
</template>
<script>
  var reg = /^\d{1,}$/
  import settlements from '../settlement/settlements.vue'
  import {getShopcart} from "Api/request";
  import {changeNunbers} from "Api/request";
  import axios from 'axios'
  import qs from 'qs'

  export default {
    name: 'shopcart',
    components: {
      settlements
    },
    data() {
      return {
        cartIsNull: false,
      }
    },
    computed: {
      //获取购物车列表
      lists: function () {
        return this.$store.state.cart.cartLists
      },
      total:function() {
        return this.$store.getters.total
      }
    },
    mounted() {
      this.getShopcartdata()
    },
    methods: {
      isnumber: function (index) {
        let num = parseInt(this.lists[index].goodsNum)

        let listShopNum = {
          index,
          num
        }
        if (reg.test(this.lists[index].goodsNum) && this.lists[index].goodsNum != 0) {
          this.$store.commit('changeListNumber',listShopNum)
        } else {
          alert('您输入的数量不正确！')
          this.lists[index].goodsNum = 1
          this.$store.commit('changeListNumber',listShopNum)
        }
      },
      deleteList (index) {
        this.lists.splice(index, 1)
        this.$store.commit('changeCartLists', this.lists)
      },
      NumberSubtract: function (index) {
        let num = parseInt(this.lists[index].goodsNum)

        let listShopNum = {
          index,
          num
        }
        if (this.lists[index].goodsNum > 1) {
          this.lists[index].goodsNum --
          console.log(this.lists[index].goodsNum);
          this.$store.commit('changeListNumber',index,listShopNum)
          // this.changeNumber(0)
        }
      }
      ,
      NumberAdd: function (index) {
        let num = parseInt(this.lists[index].goodsNum)
        let listShopNum = {
          index,
          num
        }
        if (this.lists[index].goodsNum > 0) {
          this.lists[index].goodsNum ++
          this.$store.commit('changeListNumber',index,listShopNum)
          // this.changeNumber(1)
        }
      }
      ,
      ShopTotal: function () {

      },
      getShopcartdata: function () {
        if(this.lists.length === 0){
          this.cartIsNull=true
        }else{
          this.cartIsNull=false
        }

        getShopcart(
          {currentPage: 1}, (res) => {
            console.log(res);
          });
      },
      changeNumber: function (num) {
        changeNunbers(
          {
            goodsId: 8, math: num
          }, (res) => {
            console.log(res);
          });
      }
      ,
    }
  }
</script>
<style lang="less">
  .shopcart-nullcart-box {
    width: 1200px;
    height: 341px;
    margin: 0 auto;

    div {
      width: 460px;
      margin: 0 auto;
      padding: 98px 0px;
      .sn-n-box {
        float: left;
        width: auto;
        padding: 0px;
        margin-left: 25px;
        margin-top: 30px;
        p {
          font-size: 17px;
          margin-bottom: 5px;
        }
        a {
          width: 80px;
          height: 30px;
          background-color: #dc5551;
          color: #fff;
          text-align: center;
          line-height: 30px;
          display: inline-block;
        }
      }
      img {
        vertical-align: middle;
        float: left;
      }
      p {

      }
    }

  }

  /*.slt-Payment-process-box ul {*/
  /*background-position: left top;*/
  /*li:nth-child(1) {*/
  /*color: #fff;*/
  /*}*/
  /*li:nth-child(2) {*/
  /*color: #333;*/
  /*}*/
  /*}*/

  .spct-number-box {
    width: 357px;
    float: left;
    div {
      display: block;
      margin: 37px auto;
      width: 78px;
    }
    a {
      display: inline-block;
      width: 23px;
      height: 23px;
      border: 1px solid #ccc;
      color: #000000;
      border-radius: inherit;
      background: #f0f0f0;
      text-align: center;
    }
    input[type=text] {
      width: 33px;
      height: 23px;
      border: 1px solid #ccc;
      line-height: 21px;
      text-align: center;
      margin: 0px -5px -1px -5px;
      position: relative;
      vertical-align: middle;
      outline: none;
    }
  }

  .spct-remove-box {
    width: 182px;
    float: left;
    text-align: center;
    line-height: 95px;
    a {
      padding-left: 20px;
      background: url("../../../static/img/icon_del.gif") no-repeat left center;
    }
  }
</style>
