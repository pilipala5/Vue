import { createRouter, createWebHashHistory } from "vue-router";
import Login from '@/views/Login.vue'
import page1 from '@/views/page1.vue'

const routes = [
    {
        path:'/Login',
        component:Login
    },
    {
        path:'/page1',
        component:page1
    },
    {
        path:'/',
        redirect:'/Login'
    },
]

const router = createRouter({
    history:createWebHashHistory(),
    routes
})

export default router