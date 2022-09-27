<template>
    <div>
        <homeCategory></homeCategory>
        <carousel></carousel>
        <HomeNew></HomeNew>
        <HomeHot></HomeHot>
        <HomeBrand></HomeBrand>
        <HomeProducts></HomeProducts>
        <HomeSpecial></HomeSpecial>
    </div>
  </template>
  <script>
  import homeCategory from './components/home-category.vue';
  import carousel from '../../components/library/xtx-carousel.vue'
  import HomeNew from './components/HomeNew.vue'
  import HomeHot from './components/HomeHot.vue'
  import HomeBrand from './components/HomeBrand.vue'
  import HomeProducts from './components/Home-products.vue'
  import HomeSpecial from './components/Home-special.vue';
  export default {
    name: "homePage",
    components:{
      homeCategory,
      carousel,
      HomeNew,
      HomeHot,
      HomeBrand,
      HomeProducts,
      HomeSpecial
    },
    setup() {
      
    },
  };
  </script>
  <style lang="less">
  
  </style>
  