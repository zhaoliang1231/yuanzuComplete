<template>
  <div class="mn-main-nav">
    <div class="clearfix">
      <div @mouseenter="classifyToggle(true)" @mouseleave="classifyToggle(false)" class="mn-main-nav-classify fl" :class="{active:!isHide}">
        <div class="mn-classify-name">
          <a class="font-color-white fontSize-16">全部商品菜单</a>
        </div>
        <ul v-if="toggle" class="mn-classify-lists">
          <li v-for="(classify, i) in classify" :key="i" :style="{background:icon[i], backgroundSize: 30+'px'}" class="mn-classify-list">
            <router-link :to="'/classfiy?yid='+classify.id+'&typeNo=0'">
              <span class="mn-classify-list-title fontSize-14 mn-a">{{classify.goodsTypeName}}</span>
            </router-link>
              <router-link :key="k" v-for="(goodstypetwo,k) in classify.erjtypeInfo" :to="'/classfiy?eid='+goodstypetwo.id+'&typeNo=1'">
                <span class="fontSize-12 mn-a">{{goodstypetwo.goodsTypeNameTwo}} </span>
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
import {AllgoodstypeAndTwo} from 'Api/request_yf'
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
    AllgoodstypeAndTwo((res) => {
      this.classify = res.data
      for (let i = 0; i < this.classify.length; i++) {
        this.classify[i].icon = this.classify[i].icon.replace(/\\/g, '/')
        this.icon.push(`url(${this.api}${this.classify[i].icon}) no-repeat 0px 15px`)
      }
    })
  }
}
</script>
<style>
</style>
