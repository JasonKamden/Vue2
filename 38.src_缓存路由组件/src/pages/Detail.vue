<template>
  <ul>
    <li>消息标题：{{id}}</li>
    <li>消息编号：{{title}}</li>
  </ul>
</template>

<script>
export default {
  name: "Detail",
  props:["id","title"],
  mounted() {
    console.log(this.$route);
  },
  //computed: {
  //  id() {
  //    return this.$route.query.id;
  //  },
  //  title() {
  //    return this.$route.query.title;
  //  },
  //},

}
</script>

<style scoped>

</style>