<template>
  <div>
    <h4>22222222</h4>
    <router-link to="/">去home</router-link>
    <div id="box" :style="{width: '300px', height: '300px'}"></div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  },
  props: {},
  components: {},
  mounted() {
      this.arr()
  },
  methods: {
    arr() {
         // 基于准备好的dom，初始化echarts实例
    let myChart = this.$echarts.init(document.getElementById('box'));
      myChart.setOption({
            title: {
                     text: 'vue中使用echarts绘制折线图',
                     subtext: '1111'
                        },
                series: [
                {
                    name: "访问来源",
                    type: "pie",
                    radius: "55%",
                    data: [
                    { value: 235, name: "视频广告" },
                    { value: 274, name: "联盟广告" },
                    { value: 310, name: "邮件营销" },
                    { value: 335, name: "直接访问" },
                    { value: 400, name: "搜索引擎" }
                    ]
                }
                ]
            });
    }
  }
};
</script>

<style scoped lang="scss">
</style>