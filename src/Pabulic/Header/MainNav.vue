<template>
  <div class="mn-main-nav">
    <div class="clearfix">
      <div @mouseenter="classifyToggle(true)" @mouseleave="classifyToggle(false)" class="mn-main-nav-classify fl" :class="{active:!isHide}">
        <div class="mn-classify-name">
          <a class="font-color-white fontSize-16">全部商品菜单</a>
        </div>
        <ul v-if="toggle" class="mn-classify-lists">
          <li v-for="(classify, i) in classify" :key="i" :style="icon[i]" :class="{'mn-bg': i > 0}" class="mn-classify-list">
            <router-link :to="'/classfiy'+classify.id">
              <span class="mn-classify-list-title fontSize-14 mn-a">{{icon[i]}}</span>
            </router-link>
            <router-link to="/classfiy">
              <span class="fontSize-12 mn-a">纸质提货券</span>
            </router-link>
            <router-link to="/classfiy">
              <span class="fontSize-12 mn-a">端午礼盒</span>
            </router-link>
            <router-link to="/classfiy">
              <span class="fontSize-12 mn-a">电子提货券</span>
            </router-link>
          </li>
        </ul>
      </div>
      <div class="mn-main-nav-list fl">
        <router-link to="/">
          <span class="mn-a font-color-black fontSize-16">元祖商城</span>
        </router-link>
      </div> <span class="fl">|</span>
      <div class="mn-main-nav-list fl">
        <router-link to="/">
          <span class="mn-a font-color-black fontSize-16">品牌故事</span>
        </router-link>
      </div> <span class="fl">|</span>
      <div class="mn-main-nav-list fl">
        <router-link to="/">
          <span class="mn-a font-color-black fontSize-16">元祖推荐</span>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import {api} from 'Api/api'
import {goodstype} from 'Api/request_yf'
import {goodstypetwo} from 'Api/request_yf'
export default {
  data () {
    return {
      api,
      isHide: true,
      toggle: false,
      icon: [],
      classify: []
    }
  },
  mounted () {
    if (!this.isHide) {
      this.toggle = true
    }
  },
  methods: {
    classifyToggle (bool) {
      if (this.isHide) {
        this.toggle = bool
      }
    }
  },
  beforeMount () {
    goodstype((res) => {
      this.classify = res.data
      for (let i = 0; i < this.classify.length; i++) {
        this.icon.push(`background:url(${this.classify[i].icon}) no-repeat 0px 15px`)
        goodstypetwo({id: this.classify[i].id}, (data) => {
          this.classify[i].goodstypetwo = data.data
        })
      }
    })
  }
}
</script>
<style>
</style>
