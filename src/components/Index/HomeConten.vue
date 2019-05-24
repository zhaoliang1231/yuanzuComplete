<template>
    <div class="home-conten clearfix">
      <div class="home-conten-nav">
        <img class="home-conten-title-ico" :src="imags.icon[iconI]"/>
        <span class="fontSize-18">{{typeName}}</span>
        <ul class="fr">
          <li class=" home-conten-nav-name fl">
            <router-link to="">
              <span class="font-color-lightgrey mn-a"> 鲜奶蛋糕</span>
            </router-link>
            |
          </li>
          <li class=" home-conten-nav-name fl">
            <router-link to="">
              <span class="font-color-lightgrey mn-a"> 巧克力蛋糕</span>
            </router-link>
            |
          </li>
          <li class=" home-conten-nav-name fl">
            <router-link to="">
              <span class="font-color-lightgrey mn-a"> 慕思蛋糕</span>
            </router-link>
            |
          </li>
          <li class=" home-conten-nav-name fl">
            <router-link to="">
              <span class="font-color-lightgrey mn-a"> 婚庆蛋糕</span>
            </router-link>
            |
          </li>
          <li class=" home-conten-nav-name fl">
            <router-link to="">
              <span class="font-color-lightgrey mn-a"> 蛋糕配件</span>
            </router-link>
            |
          </li>
        </ul>
      </div>
      <div class="divider"></div>
      <div class="home-goos-modular clearfix">
        <div class="thumb fl">
          <img :src="imags.datubiao[iconI]"/>
        </div>
        <ul class="fl clearfix">
          <li :key="i" v-for="(findbytype,i) in findbytype" class="home-modular-goos li-hover-shadow li-transform-top fl">
            <router-link :to="'detail?id='+findbytype.goodsId">
              <img :title="findbytype.goodsTilte" :src="api+findbytype.imgs"/>
              <p class="fontSize-18 mn-a">{{findbytype.goodsName}}</p>
              <p class="mn-a"> {{findbytype.goodsTilte}}</p>
              <p class="fontSize-18 font-color-red">¥{{findbytype.goodsPrice}} </p>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
</template>
<script>
import {GoodsinfoFindByType} from 'Api/request_yf'
import {api} from 'Api/api'
import Much from 'static/img/Much.png'
import lihe from 'static/img/lihe.png'
import jingzhi from 'static/img/jingzhi.png'
import datubiao1 from 'static/img/home-datubiao1.jpg'
import datubiao2 from 'static/img/home-datubiao2.jpg'
import datubiao3 from 'static/img/home-datubiao3.jpg'
export default {
  props: ['typeName'],
  data () {
    return {
      api,
      findbytype: [],
      iconI: 0,
      imags: {
        icon: [Much, lihe, jingzhi],
        datubiao: [datubiao1, datubiao2, datubiao3]
      },
      contenType: 3
    }
  },
  beforeMount () {
    if (this.typeName === '元祖礼盒') {
      this.iconI = 1
      this.contenType = 1
    } else if (this.typeName === '精致西点') {
      this.iconI = 2
      this.contenType = 5
    }
    GoodsinfoFindByType({threeTypeId: this.contenType}, (res) => {
      this.findbytype = res.data
    })
  }
}
</script>
<style lang="less">
</style>
