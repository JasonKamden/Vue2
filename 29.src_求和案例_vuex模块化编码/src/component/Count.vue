<template>
  <div>
    <h1>当前求和为:{{ sum }}</h1>
    <h1>当前求和放大十倍为:{{ bigSum }}</h1>
    <h3>我在{{ school }}学习{{ subject }}</h3>

    <h3 style="color: red">person总人数为：{{ personList.length }}</h3>


    <select name="number" v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment(n)">+</button>
    <button @click="decrement(n)">-</button>
    <button @click="incrementOdd(n)">当前求和为奇数再加</button>
    <button @click="incrementWait(n)">等一等再加</button>
  </div>
</template>

<script>
import {mapState, mapGetters, mapMutations, mapActions} from "vuex";

export default {
  name: "Count",
  data() {
    return {
      n: 1   //用户选择的数字
    };
  },
  computed: {
    ...mapState("countAbout", ["sum", 'school', "subject"]),
    ...mapState("personAbout", ["personList"]),
    ...mapGetters("countAbout",['bigSum']),
  },
  methods: {

    ...mapMutations("countAbout",{increment: "JIA", decrement: "JIAN"}),
    ...mapActions("countAbout",{incrementOdd: "jiaOdd", incrementWait: "jiaWait"}),

  },

  mounted() {

  }
};
</script>

<style>
button {
  margin-right: 10px;
}
</style>