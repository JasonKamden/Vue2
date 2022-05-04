<template>
  <div>
    <h2 @click="showName">姓名：{{ name }}</h2>
    <h2>性别：{{ sex }}</h2>
    <input type="text" v-fbind:value="name">
  </div>
</template>

<script>
import {mixin} from "@/mixin";

export default {
  name: "Student",
  data() {
    return {
      name: "Jason",
      sex: "男",
    }
  },
  mixins: [mixin]


};

</script>
