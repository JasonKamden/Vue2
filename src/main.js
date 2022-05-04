import Vue from "vue";
import App from "@/App";

//引入ElementUI的组件库
//import ElementUI from 'element-ui';
//import 'element-ui/lib/theme-chalk/index.css';

//Vue.use(ElementUI);

import { Button,Row,DatePicker} from 'element-ui';

Vue.use(Button);
Vue.use(Row);
Vue.use(DatePicker);

Vue.config.productionTip = false;
new Vue({
    el: "#app",
    render: h => h(App),
});
