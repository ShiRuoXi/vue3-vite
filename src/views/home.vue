<template >
  <div>{{ msg }}</div>
</template>
<script>
import { get, post } from "../api/request.js";
import { ref, onMounted, onUpdated, onUnmounted } from "vue";
export default {
  setup() {
    let msg = ref("2020---");

    // 页面挂载
    onMounted(() => {
      console.log("mounted,挂载");
      init();
    });
    // 数据更新
    onUpdated(() => {
      console.log("updated,更新");
    });
    // 卸载
    onUnmounted(() => {
      console.log("unmounted,卸载");
    });

    const init = async () => {
      await getFissionCourseList({ name: "2077", data: {} }).then((res) => {
      });
      await getGetrequs({ name: "7788", data: {} }).then((res) => {
      });
    };

    return {
      msg,
    };
  },
};
</script>