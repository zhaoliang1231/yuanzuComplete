<template>
    <div>
        <div class="detail_nav">
             <span>
                 <router-link class="a-hover-pink" to="/">主页</router-link>
            </span>
            <span>></span>
            <span>
                <a class="a-hover-pink" href="">元祖商城</a>
            </span>
            <span>></span>
            <span>
                <a class="a-hover-pink" href="">元祖梦蛋糕</a>
            </span>
            <span>></span>
            <span>
                <a class="a-hover-pink" href="">巧克力蛋糕</a>
            </span>
            <span>></span>
            <span>
                <a class="a-hover-pink" href="">{{goodLists.goodsTitle}}</a>
            </span>
        </div>
        <div class="product">
            <div class="product_photo">
                <div class="jqzoom">
                    <vue-magnify  :previewImg="min_img"
                                  :zoomImg="min_img"
                    ></vue-magnify>
                </div>
                <div class="spec_n5">
                    <div class="spec_left">
                        <img src="../../../static/img/left.gif" alt="">
                    </div>
                    <div class="spec_list">
                        <ul>
                            <li @mouseenter="changeBg(i,index)" class="spec_list_img" :class="{ changeBg:index==current}" style="margin-left: 15px" v-for="( i ,index) in imgList">
                                <img :src="i.img" alt="">
                            </li>
                        </ul>
                    </div>
                    <div class="spec_right">
                        <img src="../../../static/img/right.gif" alt="">
                    </div>
                </div>
            </div>
            <div class="product_value">
                <h1>{{goodLists.goodsName}}</h1>
                <p class="summary">寓意祥云瑞起，吉祥安康</p>
                <!--产品价格-->
                <dl>
                    <dt>优惠价:</dt>
                    <dd>
                        <strong>¥{{goodLists.goodsPrice}}</strong>
                    </dd>
                </dl>
                <!--规格选择-->
                <div class="yCmsContentSlot">
                    <dl class="selector">
                        <dt class="selector_title">选择规格:</dt>
                        <dd>
                            <ul style="width:280px">
                                <li v-for=" ( i,index) in specifications" @click="changBorder(index)">
                                    <a class=" a-hover-pink" href="javascript:void(0);" :class="{change:index == current1}">{{i.name}}</a>
                                </li>
                            </ul>
                        </dd>
                    </dl>
                </div>
                <!--口味选择-->
                    <dl class="selector">
                        <dt class="selector_title">蛋糕夹层:</dt>
                        <dd>
                            <ul style="width:280px">
                                <li @click="changBorder1(index)" v-for="(i,index) in selectorList">
                                  <a :class="{change:index == current2}" class=" a-hover-pink" href="javascript:void(0);">{{i.name}}</a>
                                </li>
                            </ul>
                        </dd>
                    </dl>
                <!--添加到购物车-->
                <div class="buyBox">
                    <form action="" class="add_to_cart_form" method="" id="addToCar">
                        <dl>
                            <dt>数&nbsp;&nbsp;&nbsp;&nbsp;量：</dt>
                            <dd>
                                <ul><li class="number" data-input="box">
                                    <div class="left">
                                        <input id="qty" name="qty" autocomplete="off" size="1" type="text" :value="num" maxlength="3" data-input="input">
                                        <input type="hidden" name="productCodePost" value="100001416">
                                        <input type="hidden" name="taste" value="香芋+香芋（网红款">
                                    </div>
                                    <div class="right">
                                        <span class="plus" data-input="plus" @click="addNum">+</span>
                                        <span class="minus" data-input="minus" @click="reduceNum">-</span>
                                    </div>
                                </li>
                                </ul>
                                <router-link class="btn_buy" id="btn_buy" type="button" style="margin: 0 14px 0 0;width: 110px;text-align: center;line-height: 38px" to="/settlement/shopcart">
                                    立即购买
                                </router-link>
                                <button id="addToCartButton" class="btn_addcart" type="submit" @click="addCar">加入购物车</button>
                            </dd>
                        </dl>
                    </form>
                </div>
                <div class="chengnuo">
                    服务承诺
                    <img src="../../../static/img/00.gif" alt="">
                    精选食材
                    <img src="../../../static/img/00.gif" alt="">
                    品质保证
                    <img src="../../../static/img/00.gif" alt="">
                    五星服务
                    <img src="../../../static/img/00.gif" alt="">
                    贴心宅配
                    <img src="../../../static/img/00.gif" alt="">
                </div>
                <div class="share">
                    <div class="bianhao">商品编号：100001416</div>
                    <span :plain="true" @click="open" style="cursor: pointer" >
                        <img src="../../../static/img/icon_sc.gif" alt="">
                       收藏
                    </span>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
// 大图
import img1 from 'static/img/100001416_L.jpg'
// 小图路径
import img2 from 'static/img/100001416_L1.jpg'
import img3 from 'static/img/100001416_L2.jpg'
import {storeCollet} from  'Api/request'
import {getDetail} from 'Api/request'
import {getAddCar} from 'Api/request'
export default {
  name: 'DetaiBanner',
  props: ['id', 'detailId'],
  data () {
    return {
      num: 1,
      // 动态绑定class 标识
      current: 0,
      // 规格选项标识
      current1: 0,
      // 蛋糕夹层标识
      current2: 0,
      min_img: img1,
      imgList: [
        {img: img1},
        {img: img2},
        {img: img3}
      ],
      // 商品信息
      goodLists: [],
      //商品图片
      imgLists:[],
      // 规格数据
      specifications: [
        {name: '6号'},
        {name: '8号'}
      ],
      // 蛋糕夹层数据
      selectorList: [
        {name: '香芋+香芋（网红款）'},
        {name: "布丁+香芋"},
        {name: "布丁+燕麦"},
        {name: "水果+香芋"},
        {name: "水果+燕麦"},
        {name: "香芋+燕麦"}
      ]}
  },
  mounted () {
    getDetail({goodsId: this.$route.query.id}, (res) => {
      this.goodLists = res.data
      this.imgLists = res.data.imgs
      // console.log(res)
    })
  },
  methods: {
    // 鼠标移入选中图片边框
    changeBg: function (i,index) {
      this.current = index
      this.min_img = i.img
    },
    changBorder: function (index) {
      this.current1 = index
    },
    changBorder1: function (index) {
      this.current2 = index
    },
    addNum: function () {
      this.num++
    },
    reduceNum: function () {
      if (this.num > 1) {
        this.num--
      }
    },
    open: function () {
      storeCollet({goodsId: parseInt(this.$route.query.id),userId:window.localStorage.getItem('userId')}, (res) => {
        if (res.message == "success") {
          this.$message({
            message: '已加入购物车',
            type: 'success',
            duration: 1000
          })
        }else{
          this.$message.error('添加购物车失败!')
        }

      })
    },
    addCar: function (e) {
      e.preventDefault();
      getAddCar({goodsId:this.$route.query.id,userId:window.localStorage.getItem('userId')},(res)=>{
        console.log(res)
        if (res.message == "success") {
          this.$message({
            message: '已加入购物车',
            type: 'success',
            duration: 1000
          })
        }else{
          this.$message.error('添加购物车失败!')
        }
      })
    }
  }
}
</script>

<style scoped lang="less">
    @import "../../../static/css/common";
    .changeBg{
        background: #e93d6d;
    }
    .detail_nav{
        width: 100%;
        height: 45px;
        line-height: 45px;
    }
    .product {
        width: 991px;
        height: 580px;
        padding-top: 17px;
        background-color: @white;
        .product_photo{
            width: 477px;
            height: 563px;
            float: left;
            .jqzoom{
                width: 450px;
                height: 450px;
                margin: 0 auto;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
            .spec_n5{
                width: 477px;
                height: 69px;
                overflow: hidden;
                padding-top: 20px;
                box-sizing: content-box;
                .spec_left{
                    margin: 0px 10px;
                    float: left;
                    width: 17px;
                    height: 45px;
                    cursor: pointer;
                }
                .spec_list{
                    width: 420px;
                    height: 62px;
                    float: left;
                    overflow: hidden;
                    ul li{
                        float: left;
                        width: 62px;
                        height: 62px;
                        border: 1px solid #999999;

                        img{
                            padding-left: 2px;
                            padding-top: 2px;
                            width: 58px;
                            height: 58px;
                            margin: 0 auto;
                        }
                    }
                }
                .spec_right{
                    float: left;
                    width: 17px;
                    height: 45px;
                    cursor: pointer;
                }
            }
        }
        .product_value{
            width: 428px;
            height: 554px;
            margin-right: 40px;
            float: right;
            h1{
                height: 25px;
                line-height: 25px;
                overflow: hidden;
                font-size: 16px;
                font-weight: normal;
                margin-bottom: 0;
            }
            .summary{
                margin-bottom: 15px;
                color: #8e8e8e;
            }
            dl{
                width: 360px;
                line-height: 25px;
                position: relative;
                font-size: 14px;
                color: #8e8e8e;
                padding-left: 68px;
                box-sizing: content-box;
                margin-bottom: 15px;
                dt{
                    line-height: 25px;
                    font-size: 14px;
                    color: #8e8e8e;
                    position: absolute;
                    left: 0px;
                    font-weight: normal;
                }
                strong{
                    font-size: 24px;
                    color: #e70050;
                }
            }
            .selector{
                height: auto;
                display: inline-block;
            }
            .selector ul li{
                margin-right: 10px;
                text-align: center;
                display: block;
                margin-bottom: 5px;
                float: left;
                a{
                    display: block;
                    padding: 1px 7px;
                    float: left;
                    height: 21px;
                    line-height: 21px;
                    text-align: center;
                    font-size: 12px;
                    min-width: 53px;
                    border: 1px solid #cccccc;
                    box-sizing: content-box;
                    text-decoration: none;
                }
                .change{
                    padding: 0px 6px 0px 6px;
                    border:2px solid #e50150;
                }
            }
            /*添加购物车*/
            .buyBox{
                height: 40px;
                margin-bottom: 20px;
                    ul li.number {
                    border: 1px solid #ddd;
                    background-color: #fff;
                    margin-right: 20px;
                    float: left;
                    line-height: 38px;
                    height: 38px;
                        .left{
                            width: 45px;
                            height: 36px;
                            text-align: center;
                            border-right: 1px solid #ddd;
                            position: relative;
                            float: left;
                            input{
                                width: 100%;
                                height: 100%;
                                display: block;
                                border: 0;
                                outline: 0;
                                text-align: center;
                                font-size: 14px;
                            }
                        }
                        .right{
                            cursor: pointer;
                            float: right;
                            span{
                                display: block;
                                width: 15px;
                                height: 50%;
                                line-height: 18px;
                                text-align: center;
                                font-size: 14px;
                                font-weight: 400;
                            }
                        }
                }
                .btn_buy{
                    margin: 0 14px 0 17px;
                    float: left;
                    width: 148px;
                    height: 38px;
                    font-size: 20px;
                    color: #e70050;
                    background-color: #feedf3;
                    border: 1px solid #d5014b;
                    display: inline;
                    cursor: pointer;
                    &:hover{
                        color:black;
                    }
                }
                .btn_addcart{
                    float: left;
                    width: 150px;
                    height: 38px;
                    line-height: 38px;
                    font-size: 20px;
                    color: #fff;
                    padding-left: 20px;
                    background: #e4004f url(../../../static/img/icon_cart.gif) no-repeat 15px 12px;
                    border: 0;
                    cursor: pointer;
                }
            }
            .chengnuo{
                padding: 0 12px;
                line-height: 29px;
                color: #5a5a58;
                margin-bottom: 21px;
                background-color: #f7f3e8;
                img {
                    border: none;
                    vertical-align: middle;
                }
            }
            .share{
                height: 20px;
                line-height: 20px;
                padding-left: 12px;
                img {
                    border: none;
                    vertical-align: middle;
                }
                a{
                    float: left;
                }
                .bianhao{
                    float: left;
                    margin-right: 30px;
                    display: inline;
                }
            }
        }
        //放大镜样式
        /deep/.vue-magnify .zoom-box{
            width: 480px;
            height: 440px;
            border: 1px solid #eee;
            z-index: 500;
        }
    }
</style>
