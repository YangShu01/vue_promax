import {createRouter, createWebHistory} from "vue-router";
import LoginHome from "@/views/login/LoginHome.vue";
const routes = [
    {
        path:'/login',
        name:"login",
        component:LoginHome,
        meta:{
            title:"登录"
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