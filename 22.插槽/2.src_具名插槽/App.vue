<template>
  <div class="container">
    <category title="美食">
      <img slot="center" src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg" alt="图片无法加载">
      <a slot="footer" href="https://baidu.com">更多美食</a>
    </category>
    <category title="游戏">
      <ul slot="center">
        <li v-for="(g,index) in games" :key="index">{{ g }}</li>
      </ul>
      <div class="foot" slot="footer">
        <a href="https://baidu.com">单机游戏</a>
        <a href="https://baidu.com">网络游戏</a>
      </div>
    </category>

    <category title="电影">
      <video slot="center" controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
      <template v-slot:footer>
        <div class="foot">
          <a href="https://baidu.com">经典</a>
          <a href="https://baidu.com">热门</a>
          <a href="https://baidu.com">推荐</a>
        </div>
        <h4 slot="footer"> 欢迎前来观看</h4>
      </template>
    </category>

  </div>
</template>

<script>
import category from "@/component/Count";

export default {
  name: "App",
  components: {category},
  data() {
    return {
      foods: ['火锅', '烧烤', '小龙虾'],
      games: ['红色警戒', '穿越火线', '劲舞团'],
      films: ['《教父》', '《拆弹专家》', '《你好，李焕英》']
    }
  },

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


