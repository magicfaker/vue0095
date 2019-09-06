import VueRouter from 'vue-router'

import Homebar from './components/tabbar/Homebar.vue'
import Memberbar from './components/tabbar/Memberbar.vue'
import Searchbar from './components/tabbar/Searchbar.vue'
import Shopcarbar from './components/tabbar/Shopcarbar.vue'

// 3. 创建路由对象
var router = new VueRouter({
  routes: [//配置路由规则
    {path:'/',redirect:'/home'},
    {path:'/home',component: Homebar},
    {path:'/Memberbar',component: Memberbar},
    {path:'/Searchbar',component: Searchbar},
    {path:'/Shopcarbar',component: Shopcarbar}
  ],
  linkActiveClass:'mui-active'//覆盖默认高亮类
})

// 把路由对象暴露出去
export default router