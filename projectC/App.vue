<template>
  <div>
    <div>解析vue文件</div>
    <p>{{ name }}</p>
    <div id="vue2"></div>
    <componentA />
  </div>
</template>
<script>
import componentA from 'teamB/componentA';
import { defineComponent, ref } from "vue";
import { vue2ToVue3 } from "./utils/transform";
export default defineComponent({
  setup() {
    const name = ref("w-32211121------hahah112222-");
    return {
      name,
    };
  },
  components: {
    componentA: vue2ToVue3(componentA, 'vue2')
  }
});
</script>
