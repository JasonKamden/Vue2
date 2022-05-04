<template>
  <div class="school">
    <h2>学校名称：{{ name }}</h2>
    <h2>地址：{{ address }}</h2>
  </div>
</template>

<script>
import pubsub from "pubsub-js";
export default {
  name: "School",
  props: ["getSchoolName"],
  data() {
    return {
      name: "上海理工大学",
      address: "上海",
    }
  },
  mounted() {
    //console.log("school", this);
    //this.$bus.$on("hello", (data) => {
    //  console.log("我是school事件", data);
    //});

    this.pubId = pubsub.subscribe("hello",(msgName,data) =>{
      console.log("有人发布了hello消息，hello消息的回调执行了");
      console.log("函数名：" + msgName);
      console.log("数据：" + data);
    });

  },
  beforeDestroy() {
    //  this.$bus.$off("hello");
    pubsub.unsubscribe(this.pubId);
  }

};
</script>

<style scoped>
.school {
  background-color: #bfa;
  padding: 5px;

}
</style>