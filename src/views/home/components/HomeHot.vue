<!-- 人气推荐 -->
<template>
    <homePanel title="人气推荐" sub-title="人气爆款 不容错过">
      <ul ref="target" class="goods-list" >
        <li v-for="item in goods" :key="item.id">
          <RouterLink to="/">
            <img :src="item.picture" alt="">
            <p class="name">{{item.title}}</p>
            <p class="desc">{{item.alt}}</p>
          </RouterLink>
        </li>
      </ul>
    </homePanel>
  </template>
  
  <script>
    import {ref} from 'vue'
  import homePanel from './homePanel.vue'
  import {findHot} from '../../../api/category.js'
  import {useLazyData} from '@/hooks/index.js'
  export default {
    name: 'HomeNew',
    components:{homePanel},
    setup () {
    //    const goods=ref([]);
    //    findHot().then(res=>{
    //      goods.value=res.result
    //    })
    const {target,result}=useLazyData(findHot);
    // console.log(result)
       return {goods:result,target}
    }
  }
  </script>
  
  <style scoped lang='less'>
  .goods-list {
    display: flex;
    justify-content: space-between;
    height: 426px;
    li {
      width: 306px;
      height: 406px;
      .hoverShadow();
      img {
        width: 306px;
        height: 306px;
      }
      p {
        font-size: 22px;
        padding-top: 12px;
        text-align: center;
      }
      .desc {
        color: #999;
        font-size: 18px;
      }
    }
  }
  </style>