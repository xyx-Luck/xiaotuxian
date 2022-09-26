<template>
    <div class='home-category'>
        <ul class="menu">
            <li v-for="menu in menulist" :key="menu.id" @mouseenter="categoryId=menu.id">
                <RouterLink to="/">{{menu.name}}</RouterLink>
                <van-skeleton title avatar :row="1" :loading="loading">
                    <RouterLink to="/" v-for="menuChild in menu.children" :key="menuChild.id">{{menuChild.name}}
                    </RouterLink>
                </van-skeleton>
            </li>
        </ul>
        <!-- 弹出层 -->
        <div class="layer">
            <h4>推荐 <small>根据您的购买或浏览记录推荐</small></h4>
            <ul v-if="currentCategory && currentCategory.goods">
                <li v-for="goods in currentCategory.goods" :key="goods.id">
                    <RouterLink to="/">
                        <img :src="goods.picture" alt="">
                        <div class="info">
                            <p class="name ellipsis-2">{{goods.name}}</p>
                            <p class="desc ellipsis">{{goods.desc}}</p>
                            <p class="price"><i>¥</i>{{goods.price}}</p>
                        </div>
                    </RouterLink>
                </li>
            </ul>
            <!-- 品牌弹出层 -->
            <ul v-if="currentCategory && currentCategory.brands">
                <li class="brand" v-for="brand in currentCategory.brands" :key="brand.id">
                    <RouterLink to="/">
                        <img :src="brand.picture" alt="">
                        <div class="info">
                            <p class="place"><i class="iconfont icon-dingwei"></i>{{brand.place}}</p>
                            <p class="name ellipsis">{{brand.nameEn}}</p>
                            <p class="desc ellipsis-2">{{brand.name}}</p>
                        </div>
                    </RouterLink>
                </li>
            </ul>
        </div>
    </div>
    
</template>
  
<script>
import { useStore } from 'vuex';
import { reactive, computed, ref } from 'vue';
import { findBrandCategory } from '../../../api/category'

export default {
    name: 'HomeCategory',
   
    setup() {
        let loading = ref(true);
        //声明一个品牌对象
        const brand = reactive({
            id:'brand',
            name: '品牌',
            brands: [],
            children: [{ id: 'category-brand', name: '品牌推荐' }]

        })
        const store = useStore();
        // const list=store.state.category.list;
        const menulist = computed(() => {
            const list = store.state.category.list.map(item => {
                return {
                    id: item.id,
                    name: item.name,
                    goods: item.goods,
                    children: item.children.slice(0, 2)
                }
            })
            list.push(brand);

            return list;
        })
        //加载不同分类的弹层
        const categoryId = ref(null)
        const currentCategory = computed(() => {
            return menulist.value.find((item) => item.id === categoryId.value)
        })
        //品牌弹出层数据
        findBrandCategory().then((res) => {
            console.log(res)
            brand.brands = res.result;
            // console.log(brand.brands)
        })

        loading = false;

        return { menulist, currentCategory, categoryId, loading }
    }
}
</script>
  
<style scoped lang='less'>
.home-category {
    width: 250px;
    height: 500px;
    background: rgba(0, 0, 0, 0.8);
    position: relative;
    z-index: 99;
    float:left;

    .menu {
        li {
            padding-left: 40px;
            height: 50px;
            line-height: 50px;

            &:hover {
                background: @xtxColor;
            }

            a {
                margin-right: 4px;
                color: #fff;

                &:first-child {
                    font-size: 16px;
                }
            }
        }

        li.brand {
            height: 180px;

            a {
                align-items: flex-start;

                img {
                    width: 120px;
                    height: 160px;
                }

                .info {
                    p {
                        margin-top: 8px;
                    }

                    .place {
                        color: #999;
                    }
                }
            }
        }
    }

    .layer {
        width: 990px;
        height: 500px;
        background: rgba(255, 255, 255, 0.8);
        position: absolute;
        left: 250px;
        top: 0;
        display: none;
        padding: 0 15px;

        h4 {
            font-size: 20px;
            font-weight: normal;
            line-height: 80px;

            small {
                font-size: 16px;
                color: #666;
            }
        }

        ul {
            display: flex;
            flex-wrap: wrap;

            li {
                width: 310px;
                height: 120px;
                margin-right: 15px;
                margin-bottom: 15px;
                border: 1px solid #eee;
                border-radius: 4px;
                background: #fff;

                &:nth-child(3n) {
                    margin-right: 0;
                }

                a {
                    display: flex;
                    width: 100%;
                    height: 100%;
                    align-items: center;
                    padding: 10px;

                    &:hover {
                        background: #e3f9f4;
                    }

                    img {
                        width: 95px;
                        height: 95px;
                    }

                    .info {
                        padding-left: 10px;
                        line-height: 24px;
                        width: 190px;

                        .name {
                            font-size: 16px;
                            color: #666;
                        }

                        .desc {
                            color: #999;
                        }

                        .price {
                            font-size: 22px;
                            color: @priceColor;

                            i {
                                font-size: 16px;
                            }
                        }
                    }
                }
            }
        }
    }

    &:hover {
        .layer {
            display: block;
        }
    }
}
</style>