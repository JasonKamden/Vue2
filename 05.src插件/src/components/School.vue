<template>
  <div>
    <h2 @click="showName">学校名称：{{ name |mySlice }}</h2>
    <h2>地址：{{ address }}</h2>
  </div>
</template>

<script>
import {mixin} from "@/mixin";

export default {
  name: "School",
  data() {
    return {
      name: "上海理工大学",
      address: "上海",
    }
  },
  mixins: [mixin]
};
</script>

<style scoped>

</style>