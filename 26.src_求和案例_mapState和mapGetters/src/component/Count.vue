<template>
  <div>
    <h1>当前求和为:{{ sum }}</h1>
    <h1>当前求和放大十倍为:{{ bigSum }}</h1>
    <h3>我在{{ school }}学习{{ subject }}</h3>

    <select name="number" v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">当前求和为奇数再加</button>
    <button @click="incrementWait">等一等再加</button>
  </div>
</template>

<script>
import {mapState,mapGetters} from "vuex";

export default {
  name: "Count",
  data() {
    return {
      n: 1   //用户选择的数字
    };
  },
  computed: {
    //he() {
    //  return this.$store.state.sum;
    //},
    //xuexiao() {
    //  return this.$store.state.school
    //},
    //xueke() {
    //  return this.$store.state.subject;
    //},

    //...mapState({sum: "sum", school: "school", subject: "subject"}),
    //前面是函数名，后面是参数
    //...mapState({he: "sum", xuexiao: "school", xueke: "subject"}),
    ...mapState(["sum", "school", "subject"]),
    /**********************************/
    //bigSum() {
    //  return this.$store.getters.bigSum;
    //},
    //...mapGetters(['bigSum']);

  },
  methods: {
    increment() {
      this.$store.dispatch("jia", this.n);

    },
    decrement() {
      this.$store.dispatch("jian", this.n);
    },
    incrementOdd() {
      this.$store.dispatch("jiaOdd", this.n);
    },
    incrementWait() {
      this.$store.dispatch("jiaWait", this.n);
    },

  },
  mounted() {
    const x = mapState({sum: "sum", school: "school", subject: "subject"});
    console.log(x);
  }
};
</script>

<style>
button {
  margin-right: 10px;
}
</style>