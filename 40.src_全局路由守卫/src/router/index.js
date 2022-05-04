import VueRouter from "vue-router";
import About from "@/pages/About";
import Home from "@/pages/Home";
import News from "@/pages/News";
import Message from "@/pages/Message";
import Detail from "@/pages/Detail";

const router = new VueRouter({
    routes: [
        {
            name: "guanyu",
            path: "/about",
            component: About,
            meta:{title:"关于"}
        },
        {
            name: "zhuye",
            path: "/home",
            component: Home,
            meta: {title: "主页"},
            children: [
                {
                    name: "xinwen",
                    path: "news",
                    component: News,
                    meta:{isAuth: true, title: "新闻"}
                },
                {
                    name: "xiaoxi",
                    path: "message",
                    component: Message,
                    meta: {isAuth: true, title: "消息"},
                    children: [
                        {
                            name: "xiangqing",
                            path: "detail",
                            component: Detail,
                            meta: {isAuth: true, title: "详情"},

                            //props:{a:1,b:"hello"}
                            //props:true

                            props($route) {
                                return {id: $route.query.id, title: $route.query.title}
                            },

                        }
                    ]
                }

            ]
        }
    ]
});

router.beforeEach((to, from, next) => {
    console.log("@");
    //if (to.path === '/home/news' || to.path === '/home/message') {
    //if (to.name === 'xinwen' || to.path === 'xiaoxi') {

    if (to.meta.isAuth) {
        if (localStorage.getItem("school") === "jason") {
            next();
        } else {
            alert("学校名不对。无权限查看");
        }
    } else {
        next();
    }

    router.afterEach((to, from) => {
        document.title = to.meta.title || "vue系统";
        console.log("后置路由守卫", to, from);
    });


});

export default router;
