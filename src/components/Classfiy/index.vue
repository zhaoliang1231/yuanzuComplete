<template>
  <div class="classfiy">
    <div v-if="typeNo==2" class="classfiy-top">
      <router-link to="/">
        <span class="mn-a">首页</span>
      </router-link> >
      <router-link to="/">
        <span class="mn-a">{{name}}</span>
      </router-link>
    </div>
    <div class="classfiy-banner">
      <img src="~static/img/classfiy-banner.jpg"/>
    </div>
    <div v-if="typeNo==2" class="results">
      <p class="fontSize-24">您搜索的是 "{{name}}"</p>
    </div>
    <div class="clearfix">
      <div class="classfiy-content fl">
        <el-tag v-if="false"
          :key="i"
          v-for="(tag,i) in dynamicTags"
          closable
          :disable-transitions="false"
          @close="handleClose(i,tag.op)">
          {{tag.name}}
        </el-tag>
        <el-collapse v-if="false">
          <el-collapse-item title="类别">
        <span
          :key="i"
          v-for="(classfiy,i) in classfiyArr"
          v-if="classfiy.isShow"
          @click="addTab(i,classfiy.op)"
          class="fontSize-15 mn-a font-color-lightgrey">
          {{classfiy.name}} （{{classfiy.Number}}）
        </span>
          </el-collapse-item>
          <el-collapse-item title="价格">
        <span
          :key="i"
          v-for="(rice,i) in PriceArr"
          v-if="rice.isShow"
          @click="addTab(i,rice.op)"
          class="fontSize-15 mn-a font-color-lightgrey">
          {{rice.name}} （{{rice.Number}}）
        </span>
          </el-collapse-item>
        </el-collapse>
        <div class="classfiy-nav">
          <ul>
            <li class="fl">
              <div class="zonghepaixu ">
               <span class="zonghepaixu-text fontSize-15 font-color-white">综合排序</span>
              </div>
            </li>
            <li class="fl">
              <DropDown v-on:Sort="sortprice" :op = "0"/>
            </li>
            <li class="fl">
              <DropDown v-on:Sort="sortsales" :op="1"/>
            </li>
            <!--<li class="fengye fr">-->
             <!--<span class=""> 1/7 </span> <span class="el-icon-arrow-right"></span>-->
            <!--</li>-->
            <!--<li class="shangp fontSize-14 fr">-->
            <!--共<span class="fontSize-14 font-color-red">79</span>件商品-->
            <!--</li>-->
          </ul>
        </div>
        <div class="classfiy-goods-lists">
          <div :key="i" v-for="(goodsinfommp, i) in goodsinfommp" class="classfiy-goods-list clearfix">
            <router-link :to="'detail?id='+goodsinfommp.goodsId">
              <img class="classfiy-goods-img fl" :title="goodsinfommp.goodsTilte" :src="api+goodsinfommp.imgs[0]"/>
            </router-link>
            <div class="classfiy-goods-miaoshu fl">
              <router-link :to="'detail?id='+goodsinfommp.goodsId">
                <p class="classfiy-goods-miaoshu-title mn-a fontSize-18">{{goodsinfommp.goodsName}}</p>
                <span class="fontSize-14">{{goodsinfommp.goodsTilte}}</span>
              </router-link>
            </div>
            <div class="classfiy-goods-Price fl">
              <span class="fontSize-24 font-color-red">¥{{goodsinfommp.goodsPrice}}</span>
            </div>
            <div class="classfiy-goods-Btn fl">
              <router-link :to="'detail?id='+goodsinfommp.goodsId">
                <span class="classfiy-goods-bt fontSize-18 font-color-white">立即购买</span>
              </router-link>
            </div>
          </div>
        </div>
        <div v-if="goodsinfommp.length>0" class="fr">
          <el-pagination
            background
            @current-change="handleCurrentChange"
            layout="prev, pager, next"
            :page-count="Total">
          </el-pagination>
        </div>
      </div>
      <GuessLike/>
    </div>
  </div>
</template>
<script>
import DropDown from './DropDown.vue'
import GuessLike from '../Detail/GuessLike/guessLike.vue'
import {GoodsInfoMmp, LikeContext} from 'Api/request_yf'
import {api} from 'Api/api'
export default {
  components: {DropDown, GuessLike},
  name: 'index',
  props: ['yid', 'eid', 'typeNo', 'name'],
  data () {
    return {
      api, // 域名
      parameter: {
        currentPage: 1 // 当前页
      },
      Total: 0, // 总页数
      sortPrice: '', // 价格排序
      sortSales: '', // 销售排序
      goodsinfommp: [],
      dynamicTags: [],
      classfiyArr:
        [{op: 1, name: '元祖卡卷', Number: 1, isShow: true},
          {op: 1, name: '元祖商城', Number: 1, isShow: true},
          {op: 1, name: '元祖梦蛋糕', Number: 1, isShow: true},
          {op: 1, name: '其他', Number: 1, isShow: true}],
      PriceArr:
        [{op: 2, name: '¥0-¥19.99', Number: 1, isShow: true},
          {op: 2, name: '¥20-¥49.99', Number: 1, isShow: true},
          {op: 2, name: '¥50-¥99.99', Number: 1, isShow: true},
          {op: 2, name: '¥200 以上', Number: 1, isShow: true}]
    }
  },
  methods: {
    handleClose (i, op) {
      let list = []

      if (op === 1) {
        list = this.classfiyArr
      } else if (op === 2) {
        list = this.PriceArr
      }
      for (let k = 0; k < list.length; k++) {
        if (list[k].name === this.dynamicTags[i].name) {
          if (op === 1) {
            list = this.classfiyArr[k].isShow = true
          } else if (op === 2) {
            list = this.PriceArr[k].isShow = true
          }
        }
      }
      this.dynamicTags.splice(i, 1)
    },
    addTab (i, op) {
      let list = {}

      if (op === 1) {
        list = this.classfiyArr[i]
      } else if (op === 2) {
        list = this.PriceArr[i]
      }
      if (this.dynamicTags.length > 0 && this.dynamicTags.length < 10) {
        let bo = true
        for (let k = 0; k < this.dynamicTags.length; k++) {
          if (this.dynamicTags[k].name === list.name) {
            bo = false
          }
        }
        if (bo) {
          this.dynamicTags.push(list)
          if (op === 1) {
            list = this.classfiyArr[i].isShow = false
          } else if (op === 2) {
            list = this.PriceArr[i].isShow = false
          }
        }
      } else if (this.dynamicTags.length <= 0) {
        this.dynamicTags.push(list)
        if (op === 1) {
          list = this.classfiyArr[i].isShow = false
        } else if (op === 2) {
          list = this.PriceArr[i].isShow = false
        }
      }
    },
    // 调接口
    classfiyAxiso () {
      if (this.sortPrice) {
        this.parameter.price = this.sortPrice
      }
      if (this.sortSales) {
        this.parameter.sales = this.sortSales
      }
      console.log('调接口')
      // 搜索框
      if (this.typeNo === '2') {
        console.log('搜索框加载调用接口')
        this.parameter.goodsName = this.name
        LikeContext(this.parameter, (res) => {
          console.log('搜索框接口调用成功')
          this.Total = res.totalPage
          this.goodsinfommp = res.data
        })
      } else {
        // 分类
        this.parameter.typeNo = this.typeNo // 一级商品类型：0二级商品类型：1
        if (this.typeNo === '0') {
          this.parameter.typeId = this.yid// 一级类型id
        } else if (this.typeNo === '1') {
          this.parameter.typeId = this.eid// 二级类型id
        }
        console.log('分类加载调用接口')
        GoodsInfoMmp(this.parameter, (res) => {
          console.log('分类接口调用成功')
          this.Total = res.totalPage
          this.goodsinfommp = res.data
        })
      }
    },
    // 分页调接口
    handleCurrentChange (val) {
      console.log('分页加载')
      this.parameter.currentPage = val
      this.classfiyAxiso()
    },
    // 价格排序调接口
    sortprice (val) {
      console.log('价格排序')
      this.sortPrice = val
      this.classfiyAxiso()
    },
    // 销售排序调接口
    sortsales (val) {
      console.log('销售排序')
      this.sortSales = val
      this.classfiyAxiso()
    }
  },
  watch: {
    // 搜索框调接口
    name (val) {
      if (val !== undefined) {
        console.log('搜索框加载')
        this.parameter = {
          currentPage: 1 // 当前页
        }
        this.classfiyAxiso()
      }
    },
    // 分类调接口
    yid (val) {
      if (val !== undefined) {
        console.log('一级分类加载')
        this.parameter = {
          currentPage: 1 // 当前页
        }
        this.classfiyAxiso()
      }
    },
    // 二级分类调接口
    eid (val) {
      if (val !== undefined) {
        console.log('二级分类加载')
        this.parameter = {
          currentPage: 1 // 当前页
        }
        this.classfiyAxiso()
      }
    }
  },
  beforeMount () {
    console.log('首次加载')
    this.classfiyAxiso()
  }
}
</script>

<style scoped lang="less">
</style>
