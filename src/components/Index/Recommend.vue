<template>
    <div class="recommend-content clearfix">
      <div class="recommend fl">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="元祖新品" name="first">
            <div class="home-goods-lists clearfix">
              <div :key="i" v-for="(newyuanzu,i) in titleall.title1" class="home-goods-list li-hover-shadow fl">
                <router-link :to="'/detail?id='+newyuanzu.goodsId">
                  <img :title="newyuanzu.goodsTitle" :src="newyuanzu.imgs[0]"/>
                  <span class="fontSize-14 mn-a">{{newyuanzu.goodsName}}</span>
                  <p class="fontSize-20 font-color-red">¥{{newyuanzu.goodsPrice}}</p>
                </router-link>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="热销商品" name="second">
            <div class="home-goods-lists clearfix">
              <div :key="i" v-for="(hotgoods,i) in titleall.title2" class="home-goods-list li-hover-shadow fl">
                <router-link :to="'/detail?id='+hotgoods.goodsId">
                  <img :title="hotgoods.goodsTitle" :src="hotgoods.imgs[0]"/>
                  <span class="fontSize-14 mn-a">{{hotgoods.goodsName}}</span>
                  <p class="fontSize-20 font-color-red">¥{{hotgoods.goodsPrice}}</p>
                </router-link>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="节庆民俗" name="third">
            <div class="home-goods-lists clearfix">
              <div :key="i" v-for="(jierigoods,i) in titleall.title3" class="home-goods-list li-hover-shadow fl">
                <router-link :to="'/detail?id='+jierigoods.goodsId">
                  <img :title="jierigoods.goodsTitle" :src="jierigoods.imgs[0]"/>
                  <span class="fontSize-14 mn-a">{{jierigoods.goodsName}}</span>
                  <p class="fontSize-20 font-color-red">¥{{jierigoods.goodsPrice}}</p>
                </router-link>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="元祖卡卷" name="fourth">
            <div class="home-goods-lists clearfix">
              <div :key="i" v-for="(kaquangoods,i) in titleall.title4" class="home-goods-list li-hover-shadow fl">
                <router-link :to="'/detail?id='+kaquangoods.goodsId">
                  <img :title="kaquangoods.goodsTitle" :src="kaquangoods.imgs[0]"/>
                  <span class="fontSize-14 mn-a">{{kaquangoods.goodsName}}</span>
                  <p class="fontSize-20 font-color-red">¥{{kaquangoods.goodsPrice}}</p>
                </router-link>
              </div>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
      <div class="ADplay fr">
        <img src="~static/img/home-img2.jpg"/>
      </div>
    </div>
</template>
<script>
import {TitleAll} from 'Api/request_yf'
import {api} from 'Api/api'
export default {
  data () {
    return {
      api,
      activeName: 'first',
      titleall: []
    }
  },
  methods: {
    handleClick (tab, event) {
    }
  },
  beforeMount () {
    // 元祖新品 热销商品 节庆民俗 元祖卡券
    TitleAll((res) => {
      this.titleall = res.data
      this.titleall.title1 = JSON.parse(res.data.title1)
      this.titleall.title2 = JSON.parse(res.data.title2)
      this.titleall.title3 = JSON.parse(res.data.title3)
      this.titleall.title4 = JSON.parse(res.data.title4)
    })
  }
}
</script>
<style lang="less">
</style>
