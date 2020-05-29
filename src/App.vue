<template>
  <div>
    <transition name="transition">
      <router-view class="position"/>
    </transition>
    <Loading v-show="this.$store.state.done"/>
    <div>
     
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data() { 
    return {
        
    }
  },
  props: {

  },
  components:{
  },
  mounted() {
    
  },
  methods:{

  },
created(){
  
},
 }
</script>

<style scoped lang="scss">
.position{
  position: absolute;
  width:100%;
}
/* shop入场 动画起始位置 */
.transition-enter{
  transform: translateX(100%);
  opacity: 0;
}
/* shop 动画终止位置 */
.transition-enter-to{
  transform: translateX(0);
  opacity: 1;
}
.transition-enter-active,.transition-leave-active{
  transition: all 1s;
}

/* 离开出场动画 */
.transition-leave{
  transform: translateX(0);
  opacity: 1;
}

.transition-leave-to{
  transform: translateX(-100%);
  opacity: 0;
}
.ul{
  display: flex;
  justify-content: space-around;
  height: 50px;
  background: blue;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  li{
    flex: 1;
    text-align: center;
    line-height: 50px;
    color: white;
  }
}

</style>