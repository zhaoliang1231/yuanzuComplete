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
            <li class="home-Notice-content">
              <router-link to="/notice">
                <span title="【公告】元祖2018年中秋月饼报废公告" class="mn-a fontSize-12">【公告】元祖2018年中秋月饼报废公告</span>
              </router-link>
            </li>
            <li class="home-Notice-content">
              <router-link to="/notice">
                <span title="【公告】元祖2018年中秋月饼报废公告" class="mn-a fontSize-12">【公告】元祖2018年中秋月饼报废公告</span>
              </router-link>
            </li>
            <li class="home-Notice-content">
              <router-link to="/notice">
                <span title="【公告】元祖2018年中秋月饼报废公告" class="mn-a fontSize-12">【公告】元祖2018年中秋月饼报废公告</span>
              </router-link>
            </li>
          </ul>
        </div>
        <img class="home-Notice-img" src="~static/img/home-Notice-img1.jpg"/>
      </div>
    </div>
</template>
<script>
import {homeBanner} from 'Api/request_yf'
import {api} from 'Api/api'
export default {
  data () {
    return {
      api,
      banner: []
    }
  },
  mounted () {
    homeBanner((res) => {
      for (let i = 0; i < res.data.length; i++) {
        this.banner.push(res.data[i])
      }
    })
    console.log(this.banner)
  }
}
</script>
<style lang="less">

</style>
