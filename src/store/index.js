import { createStore } from 'vuex'
import { createVuexPersistedState } from "vue-persistedstate";
import cart from './modules/cart'
import category from './modules/category'
import user from './modules/user'
export default createStore({
  modules: {
    cart,
    category,
    user
  },
  plugins: [
    createVuexPersistedState({
      //本地存储名称
      key:'xiaotuxian-user',
      //指定用什么方式存储，默认localstorage
      storage:window.localStorage,
      //指定需要存储的模块
      paths:['users','carts']
    }),
  ],
})
