<template>
  <h2>我是About的内容</h2>

</template>

<script>
export default {
  name: "About",
  //mounted() {
  //  console.log("About组件挂载完毕", this);
  //  window.aboutRoute = this.$route;
  //  window.aboutRouter = this.$router;
  //}
  beforeRouteEnter(to, from, next) {
        if (to.meta.isAuth) {
            if (localStorage.getItem("school") === "jason") {
                next();
            } else {
                alert("学校名不对。无权限查看");
            }
        } else {
            next();
        }
  },
  beforeRouteLeave(to, from, next) {
    console.log("about -beforeRouteLeave", to, from);
    next();
  },
}
</script>

<style scoped>

</style>