<template>
  <!-- <Headers /> -->
  <router-view></router-view>
</template>
<script>
//组件引用
//引入样式
import "./assets/css/reset.css";
import Headers from "./components/Headers.vue";
export default {
  components: { Headers },
};
</script>

<style lang="less">
@import "../src/assets/css/home.less";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: @color-default;
}
</style>