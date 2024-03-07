import {createRouter, createWebHistory} from "vue-router";
import LoginHome from "@/views/login/LoginHome.vue";
import RegisterHome from "@/views/register/RegisterHome.vue";
import IndexHome from "@/views/index/IndexHome.vue";
const routes = [
    {
        path:'/',
        name:"home",
        component:IndexHome,
    },
    {
        path:'/login',
        name:"login",
        component:LoginHome,
        meta:{
            title:"登录"
        }
    },
    {
        path: '/register',
        name:"register",
        component: RegisterHome,
        meta:{
            title: "注册"
        }
    }
]
const router = createRouter({
    history:createWebHistory(process.env.BASE_URL),
    routes,
})
router.beforeEach((to,from,next)=>{
    if(to.meta.title)
    {
        document.title = to.meta.title
    }
    next()
})
export default router