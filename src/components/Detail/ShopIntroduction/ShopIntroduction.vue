<template>
    <div>
        <div class=" productTabs">
            <ul class="clearfix tabs_list">
                <li @click="addClasss" :class="{active:flag}">
                    <router-link :to="{path:'/detail',query:{id:id}}" >商品介绍</router-link>
                </li>
                <li :class="{active:flag1}" @click="addClassfiy">
                    <router-link :to="{path: '/detail/evaluate', query: {id: id}}" >商品评价</router-link>
                </li>
            </ul>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'ShopIntroduction',
    data () {
      return {
        flag: true,
        flag1 : false,
        id:0,
      }
    },
    methods: {
      addClasss : function () {
        this.flag = true
        this.flag1 = false
      },
      addClassfiy : function () {
        this.flag = false
        this.flag1 = true
      }
    },
    mounted () {
      this.id = this.$route.query.id
    }
  }
</script>

<style scoped lang="less">
    .productTabs{
        width: 991px;
        .tabs_list{
            width: 100%;
            height: 30px;
            background-color: #999999;
            li{
                float: left;
                a{
                    float: left;
                    width: 120px;
                    height: 30px;
                    line-height: 30px;
                    text-align: center;
                    font-size: 14px;
                    color: #fff;
                    &:hover{
                        background: #b6ab8f;
                    }
                }
            }
            .active{
                background: #b6ab8f;
            }
        }
    }
</style>