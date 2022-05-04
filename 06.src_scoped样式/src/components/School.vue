<template>
  <div class="demo">
    <h2  class="title">学校名称：{{ name }}</h2>
    <h2>地址：{{ address }}</h2>
  </div>
</template>

<script>

export default {
  name: "School",
  data() {
    return {
      name: "上海理工大学",
      address: "上海",
    }
  },
};
</script>

<style scoped>
.demo {
  background-color: #bfa;

}
</style>