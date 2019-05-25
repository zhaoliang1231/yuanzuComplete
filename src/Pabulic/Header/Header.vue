<template>
  <div class="he-top-nav clearfix">

    <div v-if="flag1">
        <div  class="he-top-nav-list fr a-hover-pink" style="cursor: pointer" @click="signOut">退出</div>
        <span class="fr">|</span>
    </div>
    <router-link to="/settlement">
      <div class="he-top-nav-list fr a-hover-pink">购物车</div>
    </router-link>
    <span class="fr">|</span>
    <router-link to="/MemberCenter/PersonalCenter/PersonalData">
      <div class="he-top-nav-list fr a-hover-pink">会员中心</div>
    </router-link>
    <span class="fr">|</span>
    <router-link to="/Login">
      <div v-if="flag" class="he-top-nav-list fr a-hover-pink">登录/注册</div>
    </router-link>
      <div v-if="!flag" class="he-top-nav-list fr">
          <span style="color: #e93d6d">亲</span>
          <span>,</span>
          <span class="a-hover-pink" style="cursor: pointer">{{token}}</span>
          <span>你好</span>
      </div>
  </div>
</template>
<script>
export default {
  name: 'Header',
  data (){
    return {
      token:'',
      flag:true,
      flag1:false
    }
  },
  mounted () {
    let token =  window.localStorage.getItem('token')
    //判断localStorage是否有值 标识是否登录
    if(token == null){
      this.flag = true
      this.flag1 = false
    }else{
      this.flag = false
      this.token = token
      this.flag1 = true
    }
  },
  methods : {
    signOut(){
      window.localStorage.removeItem("token")
      window.location.href = '/'
    }
  }


}
</script>
<style scoped lang="less">
</style>
