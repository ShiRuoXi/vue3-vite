<template >
  <div>{{ msg }}</div>
</template>
<script>
// import { get, post } from "../api/request.js";
import service from "../api/request";
// import qs from "qs";
import { ref, onMounted, onUpdated, onUnmounted } from "vue";
import api from "../api/url";
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
      await service.post(api.url.testurl, null, { params: { hybm: 1, token: 1 } })
        .then((res) => {
          console.log("res=>", res.data.msg);
        });
    };

    return {
      msg,
    };
  },
};
</script>