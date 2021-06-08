import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    add(state) {
      // 不要再mutations函数中，执行异步操作
      // 延时函数
      // setTimeout(() => {
      //   state.count++
      // },1000)
      state.count++
    },
    addN(state,step) {
      state.count += step
    },
    sub(state) {
      state.count--
    },
    subN(state,step) {
      state.count -= step
    }
  },
  actions: {
    addAsync(context) {
      setTimeout(() => {
        context.commit('add')
      },1000)
    },
    addAsyncN(context,step) {
      setTimeout(() => {
        context.commit('addN',step)
      },1000)
    },
    subAsync(context) {
      setTimeout(() => {
        context.commit('sub')
      },1000)
    },
    subAsyncN(context,step) {
      setTimeout(() => {
        context.commit('subN',step)
      },1000)
    }
    
  },
  getters: {
    showNum(state) {
      return '当前最新的数量是【'+ state.count +'】'
    }
    
  },
  modules: {
  }
})
