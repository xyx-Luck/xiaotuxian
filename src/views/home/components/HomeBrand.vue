<template>
    <homePanel title="热门品牌" sub-title="国际经典 品质保证">
      <template v-slot:right>
        <a href="javascript:;" :class="{disabled:index===0}" class="iconfont icon-angle-left prev" @click="toggle(-1)"></a>
        <a href="javascript:;" :class="{disabled:index===1}" class="iconfont icon-angle-right next"  @click="toggle(1)"></a>
      </template>
      <div class="box" ref="target">
        <ul class="list" >
          <li v-for="item in brand" :key="item.id" :style="{transform:`translateX(${-index*1240}px)`}">
            <RouterLink to="/">
              <img :src="item.picture">
            </RouterLink>
          </li>
        </ul>
      </div>
    </homePanel>
  </template>
  
  <script>
  import homePanel from './homePanel'
  import {findBrand} from '@/api/category'
  import {ref} from 'vue'
  import {useLazyData} from '@/hooks'
  export default {
    name: 'HomeBrand',
    components:{homePanel},
    setup(){
        // const brand=ref([]);
        // findBrand().then(res=>{
        //     console.log(res)
        //     brand.value=res.result
        // }) 
        //数据懒加载
        const {result,target}=useLazyData(findBrand)
        //点击按钮切换效果,前提只有0和1两页
        const index=ref(0);
        const toggle=(step)=>{
            const newIndex=index.value+step;
            if(newIndex<0 || newIndex>1) return;
                index.value=newIndex;
        }

        return {brand:result,index,toggle,target}
    },
    // components: { HomePanel,brand }
  }
  </script>
  
  <style scoped lang='less'>
  .home-panel {
    background:#f5f5f5
  }
  .iconfont {
    width: 20px;
    height: 20px;
    background: #ccc;
    color: #fff;
    display: inline-block;
    text-align: center;
    margin-left: 5px;
    background: @xtxColor;
    &::before {
      font-size: 12px;
      position: relative;
      top: -2px
    }
    &.disabled {
      background: #ccc;
      cursor: not-allowed;
    }
  }
  .box {
    display: flex;
    width: 100%;
    height: 345px;
    overflow: hidden;
    padding-bottom: 40px;
    .list {
      width: 200%;
      display: flex;
      transition: all 1s;
      li {
        margin-right: 10px;
        width: 240px;
        &:nth-child(5n) {
          margin-right: 0;
        }
        img {
          width: 240px;
          height: 305px;
        }
      }
    }
  }
  </style>