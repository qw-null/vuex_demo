<template>
  <div>
    <!-- <h3>当前count的值：{{count}}</h3> -->
    <h3>{{ showNum }}</h3>
    <button @click="btnClick">-1</button>
    <div></div>
    <button @click="btnNClick">-3</button>
    <div></div>
    <button @click="subAsync">-1 Async</button>
    <div></div>
    <button @click="btnNClick2">-3 Async</button>
  </div>
</template>

<script>
import {mapState,mapMutations,mapActions,mapGetters} from 'vuex'
export default ({
  data() {
    return {} 
  },
  computed:{
    ...mapState(['count']),
    ...mapGetters(['showNum']),
  },
  methods:{
    ...mapMutations(['sub','subN']),
    ...mapActions(['subAsync','subAsyncN']),
    btnClick(){
      this.sub()
    },
    btnNClick(){
      this.subN(3)
    },
    // btnClick1(){
    //   this.subAsync()
    // },
    btnNClick2(){
      this.subAsyncN(3)
    }

  }
})
</script>
