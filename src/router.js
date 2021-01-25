//必须安装最新版本路由
import {
    createRouter,
    createWebHistory
} from "vue-router";
import Home from "./views/home.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [{
        path: "/",
        component: Home,
        //嵌套路由
        // children: [{
        //     path: 'profile',
        //     component: UserProfile
        // }, ]
    }, ],
});

export default router;