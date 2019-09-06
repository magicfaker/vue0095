// 入口文件
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


import './lib/mui/css/mui.css'
import './lib/mui/css/mui-icons-extra.css'

//接口
import VueResource from 'vue-resource'
Vue.use(VueResource)



import { Swipe, SwipeItem, Header } from 'mint-ui';
// import { mui } from 'mui';

Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

//导入自己的router模块
import router from './router.js'

//导入app组件
import app from './app.vue'

var vm = new Vue({
    el:'#app',
    render:c=>c(app),
    router 
})
