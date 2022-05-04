<template>
  <div class="container">

    <category title="游戏">
      <template  v-slot="{games}">
        <ul>
          <li v-for="(g,index) in games" :key="index">{{ g }}</li>
        </ul>
      </template>
    </category>


    <category title="游戏">
      <template  v-slot="{games}">
        <ol>
          <li style="color: red" v-for="(g,index) in games" :key="index">{{ g }}</li>
        </ol>
      </template>
    </category>

    <category title="游戏">
      <template v-slot="{games}">
        <ol>
          <li style="color: red" v-for="(g,index) in games" :key="index">{{ g }}</li>
        </ol>
      </template>
    </category>




  </div>
</template>

<script>
import category from "@/component/Count";

export default {
  name: "App",
  components: {category},


};
</script>
<style scoped>
.container, .foot {
  display: flex;
  justify-content: space-around;
}

img {
  width: 100%;
}

video {
  width: 100%;
}

h4 {
  text-align: center;
}
</style>


