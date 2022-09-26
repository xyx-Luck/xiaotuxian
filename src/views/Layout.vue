<template>
    <appTopNav></appTopNav>
    <appHeader></appHeader>
     <div class="main">
        <router-view></router-view>
     </div>
    <div>底部</div>
</template>
<script>
   import appTopNav from '../components/app-topnav.vue'
   import appHeader from '../components/app-header.vue'
   import { useStore } from 'vuex'
   export default{
     components:{
        appTopNav,
        appHeader
     },
     setup(){
        const store=useStore();
        //提交action
        store.dispatch('category/getCategoryList')
     }
    
   }
</script>
<style lang="less">

  .nav{
    .hoverShadow ();
    color:@xtxColor
  }
</style>