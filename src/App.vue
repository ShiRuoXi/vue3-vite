<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <!-- <HelloWorld msg="Hello Vue 3 + Vite" /> -->
  <router-view></router-view>
</template>
<script>
//组件引用
// import HelloWorld from './components/HelloWorld.vue'
//引入样式
import "./assets/css/reset.css";
</script>

<style lang="less">
@import '../src/assets/css/home.less';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: @color-default;
}
</style>