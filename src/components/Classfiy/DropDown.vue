<template>
      <div @mouseenter="classifyToggle(true)" @mouseleave="classifyToggle(false)"  class="drop-down">
        <div class="drop-down-name  fontSize-15">
          {{pangd[op].name}} <span class="el-icon-caret-bottom"></span>
        </div>
        <ul v-if="toggle" class="drop-down-box">
          <li class="drop-down-content mn-a fontSize-12" @click="dianji1">{{pangd[op].describe1}}</li>
          <li class="drop-down-content mn-a fontSize-12" @click="dianji2">{{pangd[op].describe2}}</li>
        </ul>
      </div>
</template>
<script>
export default {
  props: ['op'],
  data () {
    return {
      isHide: true,
      toggle: false,
      pangd: [{name: '价格',describe1: '价格（由低到高）',describe2: '价格（由高到低）'},
        {name: '销量',describe1: '销量（由低到高）',describe2: '销量（由高到低）'}]
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
    },
    dianji1 () {
      this.$emit('Sort', 'desc')
    },
    dianji2 () {
      this.$emit('Sort', 'asc')
    }
  }
}
</script>
<style lang="less">
</style>
