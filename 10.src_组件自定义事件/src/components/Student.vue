<template>
  <div class="student">
    <h2>姓名：{{ name }}</h2>
    <h2>性别：{{ sex }}</h2>
    <h2>数量：{{ number }}</h2>
    <button @click="add">点我number++</button>
    <button @click="sendStudentName">把学生名给App</button>
    <button @click="unbind">解绑atguigu事件</button>
    <button @click="death">销毁当前student组件的实例(vc)</button>
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
    add() {
      console.log("add回调被调用了");
      this.number++;
    },
    sendStudentName() {
      this.$emit("atguigu", this.name, "多个参数");
      this.$emit("demo");
      console.log("触发Student组件实例身上的atguigu的事件");
    },
    unbind() {
      //this.$off("atguigu");
      //this.$off(["atguigu","demo"]);
      this.$off();
    },
    death() {
      this.$destroy();
    }

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
