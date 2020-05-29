import Vue from "vue"
import Vuex from  "vuex"
import Created from "vuex-persistedstate"
import axios from "axios"

Vue.use(Vuex)
let store=new Vuex.Store({
    //状态
    state:{
        done:false,
    },
    //方法
    mutations:{
       
       
    },
    //计算属性
    getters:{
        
    },
    //agax获取异步数据
    actions:{
        
    },
    //存储
    plugins:[Created()]

})
export default store