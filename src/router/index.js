import { createRouter, createWebHistory } from "vue-router"

const routes = [
    {
        path: "/",
        redirect: '/login',
    },
    {
        path: "/login",
        name: 'login',
        component: () => import("../views/login") 
    },
    {
        path: "/products",
        name: 'products',
        component: () => import("../views/products")
    },
    {
        path: "/profile",  // TODO: 地址管理、个人信息、订单管理
        name: 'profile',
        component: () => import("../views/profile")
    }
]

// 创建路由对象
const router = createRouter({
    history: createWebHistory(),
    routes // key和value同名时, 可以简写
})

// 导出。 vue中，只有设置为导出，才能被其他文件import使用
export default router