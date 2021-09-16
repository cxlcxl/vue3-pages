import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Layout from '@/layout'

export const constantRoutes = [
    {
        path: '/',
        component: Layout,
        redirect: '/home',
        children: [
            {
                path: 'home',
                component: () => import('@/views/home/index'),
                name: '首页',
                meta: { title: '首页', icon: 'dashboard', affix: true }
            }
        ]
    },
    {
        path: '/',
        component: Layout,
        redirect: '/go',
        meta: {title: '编程语言'},
        children: [
            {
                path: 'go',
                component: () => import('@/views/golang/index'),
                name: 'golang',
                meta: { title: 'Golang', icon: 'golang', affix: true }
            }
        ]
    },
    // 隐藏的路由
    {
        path: '/',
        component: Layout,
        hidden: true,
        children: [
            {path: 'news/:id', component: () => import('@/views/home/new-detail')}
        ]
    }
]

const createRouter = () => new Router({
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
})

const router = createRouter()

export function resetRouter() {
    const newRouter = createRouter()
    router.matcher = newRouter.matcher // reset router
}

export default router
