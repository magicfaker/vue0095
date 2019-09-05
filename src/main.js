// 入口文件
import Vue from 'vue'
import './lib/mui/css/mui.css'

import { Header } from 'mint-ui';
// import { mui } from 'mui';

Vue.component(Header.name, Header);

//导入app组件
import app from './app.vue'

var vm = new Vue({
    el:'#app',
    render:c=>c(app)
})
