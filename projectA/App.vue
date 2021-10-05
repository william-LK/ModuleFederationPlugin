<template>
  <div>
    <div>解析vue文件</div>
    <p>{{ name }}</p>
  </div>
</template>
<script>
import { defineComponent, ref } from "vue";
export default defineComponent({
  setup() {
    const name = ref("w-32211121------hahah112222-");
    return {
      name,
    };
  },
});
</script>
