// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'swiper/dist/css/swiper.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import store from "./store"
Vue.use(VueAwesomeSwiper)
//全局移入elementui 
import Element from "element-ui"
//引入elementui杨式库
import 'element-ui/lib/theme-chalk/index.css'
import echarts from "echarts"
Vue.prototype.$echarts = echarts

import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);
//让vue使用她
Vue.use(Element)
//导入axios 
import axios from "axios"
//把axios添加到vue原型中
Vue.prototype.$axios=axios
//axios 试用拦截器
axios.interceptors.request.use(
  //config代表是你请求的一些信息
  config=>{
    store.state.done=true
    return config
  },
  error=>{
    return Promise.error(error)
  }
);
//响应拦截
axios.interceptors.response.use(
  response=>{
    if(response.status==200){
      store.state.done=false
      return Promise.resolve(response)
    }else{
      return Promise.reject(response)
    }
  },
  error=>{
    if(error.response.status){
      return Promise.reject(error.response)
    }
  }
)
//导入Loading ,并在全局component 试用
import Loading from "./components/Loading"
Vue.component("Loading",Loading)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
