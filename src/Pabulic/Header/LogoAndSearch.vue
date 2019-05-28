<template>
  <div class="search-centainer">
    <router-link to="/">
      <img class="logo" :src="Logo">
    </router-link>
    <div class="search-box">
      <div class="search">
        <input class="search-input" @click="isShow(true)" v-model="message"   type="text"/>
        <router-link :to="'classfiy?name='+sousuo+'&typeNo=2'">
          <a @click="addHistory" class="search-btn">搜索</a>
        </router-link>
        <ul v-if="HistoryList.length>0&&HistoryIsShow" @mouseleave="isShow(false)" class="History">
          <li :key="index" v-for="(list, index) in HistoryList" class="line" @click="sel($event)">{{list}}</li>
        </ul>
      </div>
      <div class="search-text ">
        <span class="font-color-lightgrey">热门搜索：</span>
        <router-link to="/">
          <span class="font-color-lightgrey">元祖梦蛋糕</span>
        </router-link>
        <router-link to="/">
          <span class="font-color-lightgrey">精致西点</span>
        </router-link>
        <router-link to="/">
          <span class="font-color-lightgrey">端午季</span>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import Logo from 'static/img/logo.png'
export default {
  data () {
    return {
      message: '',
      Logo,
      HistoryIsShow: true,
      sousuo: ''
    }
  },
  methods: {
    sel (e) {
      this.message = e.target.innerText
    },
    isShow (bool) {
      this.HistoryIsShow = bool
    },
    addHistory () {
      this.$store.dispatch('addRecord', this.message)
      this.sousuo = this.message
      setTimeout(() => {
        this.message = ''
      }, 500)
    }
  },
  computed: {
    HistoryList () {
      return this.$store.getters.getRecord
    }
  }
}
</script>
<style lang="less">
  .History{
    position: absolute;
    width: 420px;
    background: #fff;
    border: 1px solid red;
    border-top: #fff;
    left: -2px;
    top: 30px;
    z-index: 1;
    .line{
      width: 100%;
      height: 30px;
      line-height: 30px;
      padding-left: 20px;
      cursor: pointer;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .line:hover{
      background: #ccc;
      color: red;
    }
  }
</style>
