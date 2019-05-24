<template>
    <div class="home-header clearfix">
      <div class="home-banner fl">
        <el-carousel height="438px" indicator-position="outside">
          <el-carousel-item v-for="(item,i) in banner" :key="i">
            <router-link :to="'detail/'+item.id">
              <img :src="api+item.imgPath"/>
            </router-link>
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="home-Notice-box fl">
        <div class="home-Notice">
          <div class="home-Notice-title">
            <span class="fontSize-15">元祖公告</span>
          </div>
          <ul class="home-Notice-content-box">
            <li class="home-Notice-content" v-for="item in lists">
              <router-link :to="'/notice?id='+item.id">
                <span :title="item.annTiale" class="mn-a fontSize-12">{{item.annTiale}}</span>
              </router-link>
            </li>
          </ul>
        </div>
        <img class="home-Notice-img" src="~static/img/home-Notice-img1.jpg"/>
      </div>
    </div>
</template>
<script>
import {homeBanner, getNotices} from 'Api/request_yf'
import {api} from 'Api/api'
export default {
  data () {
    return {
      api,
      banner: [],
      lists: []
    }
  },
  beforeMount () {
    homeBanner((res) => {
      for (let i = 0; i < res.data.length; i++) {
        this.banner.push(res.data[i])
      }
    })
  },
  mounted () {
    getNotices({}, (res) => {
      this.lists = res.data
    })
  }
}
</script>
<style lang="less">

</style>
