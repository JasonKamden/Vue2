import Vue from "vue";
import App from "@/App";
import Plugins from "@/plugins";

Vue.config.productionTip = false;

Vue.use(Plugins);

new Vue({
    el: "#app",
    render: h => h(App),
})