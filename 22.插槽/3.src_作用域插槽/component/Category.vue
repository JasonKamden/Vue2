<template>
  <div class="category">
    <h3>{{ title }}分类</h3>
    <ul slot="center">
      <slot :games="games">我是一些默认的内容</slot>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Category",
  props: ["title"],
  data() {
    return {
      games: ['红色警戒', '穿越火线', '劲舞团',"超级玛丽"],
    }
  },
}
</script>

<style scoped>
.category {
  background-color: #bfa;
  width: 200px;
  height: 300px;
}

h3 {
  text-align: center;
  background-color: orange;
}

</style>