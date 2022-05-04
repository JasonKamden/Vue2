<template>
  <div class="demo">
    <h2 class="title">姓名：{{ name }}</h2>
    <h2 class="qwe">性别：{{ sex }}</h2>
  </div>
</template>

<script>

export default {
  name: "Student",
  data() {
    return {
      name: "Jason",
      sex: "男",
    }
  }


};
</script>
<style  lang="less">
.demo{
  background-color: orange;
  .qwe{
    font-size: 40px;
  }
}
</style>
