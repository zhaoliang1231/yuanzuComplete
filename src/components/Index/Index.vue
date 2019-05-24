<template>
    <div class="home-index">
      <HomeHeader/>
      <Recommend/>
      <HomeConten :typeName="'MUCH蛋糕'"/>
      <HomeConten :typeName="'元祖礼盒'"/>
      <HomeConten :typeName="'精致西点'"/>
      <HomeActivity/>
    </div>
</template>

<script>
import HomeHeader from './HomeHeader.vue'
import Recommend from './Recommend.vue'
import HomeConten from './HomeConten.vue'
import HomeActivity from './HomeActivity.vue'
export default {
  name: 'Index',
  components: {HomeHeader, Recommend, HomeConten, HomeActivity}
}
</script>

<style scoped>

</style>
