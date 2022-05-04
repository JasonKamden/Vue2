<template>
  <div class="app">
    <h1>{{ msg }},学生的姓名为:{{studentName}}</h1>
    <School :getSchoolName=" getSchoolName"></School>
    <hr>
    <!--<Student v-on:atguigu="getStudentName"></Student>-->
    <Student @atguigu="getStudentName" @demo="m1"></Student>
    <!--<Student ref="student"></Student>-->


  </div>
</template>

<script>
import Student from "@/components/Student";
import School from "@/components/School";

export default {
  name: "App",
  components: {Student, School},
  data() {
    return {
      msg: "你好呀！",
      studentName:""
    }
  },
  methods: {
    getSchoolName(name) {
      console.log("app收到学校名:", name)
    },
    getStudentName(name,...params) {
      console.log("app收到学生名:", name, params);
      this.studentName = name;
    },
    m1() {
      console.log("demo事件被触发了");
    },
  },
  mounted() {
    //setTimeout(() => {
    //  this.$refs.student.$on("atguigu", this.getStudentName);
    //}, 3000);
  }
};
</script>

<style scoped>
.app {
  background-color: grey;
  padding: 5px;
}
</style>