<tempplate>
<!--组件的结构-->
<div>
  <h2>学生姓名:{{ name }}</h2>
  <h2>学生年龄:{{ address }}</h2>
</div>
</tempplate>

<script type="text/javascript">
//组件交互的代码(数据，方法等)
export default {
  name: "Student",
  data() {
    return {
      name: "Jason",
      age: 18
    }
  }
};
</script>