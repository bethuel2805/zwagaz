import {createRouter, createWebHistory} from "vue-router"

const routes = [
    {
        name: "/",path: "/", component: ()=> import("../pages/Home.vue")
    },
    {
        name: "/show",path: "/show", component: ()=> import("../pages/AllGaz.vue")
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;