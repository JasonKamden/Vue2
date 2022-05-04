<tempplate>
<!--组件的结构-->
<div class="demo">
  <h2>学校名称:{{ schoolName }}</h2>
  <h2>学校地址:{{ address }}</h2>
  <button @click="showName">点击显示学校名</button>
</div>
</tempplate>

<script type="text/javascript">
//组件交互的代码(数据，方法等)

export default {
  name: "School",
  data() {
    return {
      schoolName: "皇家理工",
      address: "上海"
    }
  },
  methods: {
    showName() {
      alert(this.schoolName);
    },
  }
};

</script>

<style>
/*组件的样式*/
.demo {
  background-color: orange;
}

</style>
