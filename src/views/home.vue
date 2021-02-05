<template >
  <div class="Home-layout">
    <div class="Home-layout-div">
      <div>
        <div class="getCodeMsg">
          <input type="tel" maxlength="1" name="code" pattern="[0-9]*" />
          <input type="tel" maxlength="1" name="code" pattern="[0-9]*" />
          <input type="tel" maxlength="1" name="code" pattern="[0-9]*" />
          <input type="tel" maxlength="1" name="code" pattern="[0-9]*" />
        </div>
        {{ msg }}
      </div>
    </div>
  </div>
</template>
<script>
// import { get, post } from "../api/request.js";
import service from "../api/request";
// import qs from "qs";
import { ref, onMounted, onUpdated, onUnmounted } from "vue";
import api from "../api/url";
export default {
  setup() {
    $(".getCodeMsg input").keyup(function (event) {
      // 删除往前 添加往后
      if ($(this).index() < 6) {
        if (event.keyCode == 46 || event.keyCode == 8) {
          $(this).prev("input").focus();
        } else {
          $(this).next("input").focus();
        }
      }
    });

    let msg = ref("开启档案");

    // 页面挂载
    onMounted(() => {
      console.log("mounted,挂载");
      //数据请求
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
      await service
        .post(api.url.testurl, null, { params: { hybm: 1, token: 1 } })
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