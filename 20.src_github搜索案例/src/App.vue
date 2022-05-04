<template>
    <div class="container">
      <Search></Search>
      <list></list>
  </div>
</template>

<script>
import List from "@/component/List";
import Search from "@/component/Search";

export default {
  name: "App",
  components: {Search, List}

};
</script>



