import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import UserPage from "@/views/UserPage";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    }, {
        path: "/user?id=:id",
        name: "UserPage",
        component: UserPage
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router
