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
        path: "/index",
        name: 'index',
        component: () => import("../views/layout"), // 公用layout的布局(用的container容器)
        children: [
            {
                path: "/products",
                name: 'products',
                component: () => import("../views/products"),
                meta: {
                    showMenuEnable: true,
                    title: "商品列表"
                }
            },
            {
                path: "/profile",  // TODO: 地址管理、个人信息、订单管理
                name: 'profile',
                component: () => import("../views/profile"),
                meta: {
                    showMenuEnable: true,
                    title: "个人中心"
                }
            }
        ]
    }
]

// 创建路由对象
const router = createRouter({
    history: createWebHistory(),
    routes // key和value同名时, 可以简写
})

// 导出。 vue中，只有设置为导出，才能被其他文件import使用
export default router