<!-- 新鲜好物 -->
<template>
    <div class="home-new">
      <homePanel title="新鲜好物" sub-title="新鲜出炉 品质靠谱">
        <template #right><moreLink path="/" /></template>
        <!-- 面板内容 -->
        <ul class="goods-list" ref="target">
          <li v-for="item in goods" :key="item.id">
            <RouterLink :to="`/product/${item.id}`">
              <img :src="item.picture" alt="">
              <p class="name ellipsis">{{item.name}}</p>
              <p class="price">&yen;{{item.price}}</p>
            </RouterLink>
          </li>
        </ul>
      </homePanel>
    </div>
  </template>
  <script>
  import {ref} from 'vue'
  import homePanel from './homePanel.vue'
  import moreLink from '../../../components/moreLink.vue'
  import {findNew} from '../../../api/category.js'
  import {useLazyData} from '@/hooks'
  export default {
    name: 'HomeNew',
    components:{homePanel,moreLink},
    setup () {
        // const goods=ref([]);
        // findNew().then((res)=>{
        //      goods.value=res.result;     
        // })
        const {result,target}=useLazyData(findNew)
         
        return {goods:result,target}
    }
  }
  </script>
  <style scoped lang="less">
  .goods-list {
    display: flex;
    justify-content: space-between;
    height: 406px;
    li {
      width: 306px;
      height: 406px;
      background: #f0f9f4;
      .hoverShadow();
      img {
        width: 306px;
        height: 306px;
      }
      p {
        font-size: 22px;
        padding: 12px 30px 0 30px;
        text-align: center;
      }
      .price {
        color: @priceColor;
      }
    }
  }
  </style>