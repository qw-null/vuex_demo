<template>
  <div>
    <!-- <h3>当前count的值：{{$store.state.count}}</h3> -->
    <h3>{{ $store.getters.showNum }}</h3>
    <button @click="btnClick">+1</button>
    <div></div>
    <button @click="btnNClick">+3</button>
    <div></div>
    <button @click="btnNClick1">+1 Async</button>
    <div></div>
    <button @click="btnNClick2">+3 Async</button>
  </div>
</template>

<script>

export default ({
  data() {
    return{}
    
  },
  methods:{
    btnClick(){
      this.$store.commit('add')
    },
    btnNClick(){
      // commit 的作用就是调用某个 mutation 函数
      this.$store.commit('addN',3)
    },
    // 异步让count 自增1
    btnNClick1(){
      this.$store.dispatch('addAsync')
    },
    // 异步让count 自增N
    btnNClick2(){
      this.$store.dispatch('addAsyncN',3)
    }
  }
})
</script>
