<template>
  <div class="student">
    <h2>姓名：{{ name }}</h2>
    <h2>性别：{{ sex }}</h2>
    <button @click="sendStudentName"> 把学生名给school组件</button>

  </div>
</template>

<script>

export default {
  name: "Student",
  data() {
    return {
      name: "Jason",
      sex: "男",
      number: 10
    }
  },
  methods: {
    sendStudentName() {
      this.$bus.$emit("hello", this.name);
    },
  },
  mounted() {
    //console.log("student",this.$bus);
  }
};
</script>
<style lang="less" scoped>
.student {
  background-color: orange;
  padding: 5px;
  margin-top: 5px;
}
</style>
