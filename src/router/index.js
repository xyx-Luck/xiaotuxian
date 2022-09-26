import { createRouter, createWebHashHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    component: ()=>import ('../views/Layout.vue'),
    children:[
      {
        path:'/',
        component:()=>import ('../views/home/index.vue')

      },
      {
        path:'/category/:id',
        component:()=>import('../views/category/index.vue')
      },
      {
        path:'/category/sub/:id',
        component:()=>import('../views/category/sub.vue')
      },
    ]
  },
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
