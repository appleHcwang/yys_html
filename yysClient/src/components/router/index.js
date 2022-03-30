import { createRouter, createWebHistory } from "vue-router";
import Login from '../views/login.vue'
import NotFound from '../views/NotFound.vue'
import Layout from '../views/layout/index.vue'

import Home from '../views/home/index.vue'
import Message from '../views/message/index.vue'
import Mine from '../views/mine/index.vue'
import Patient from '../views/patient/index.vue'

import CommonIframe from '../views/home/common-iframe.vue'

//登陆
export const loginRouter = {
    path: '/',
    name: 'login',
    meta: {
        title: '登录',
        index:0,
    },
    hidden: true,
    component: Login
}


export const  commonIframe  = {
    path: '/commonIframe',
    name: 'commonIframe',
    meta: {
        title: 'commonIframe',
        index:3,
    },
    hidden: true,
    component: CommonIframe

}

// 作为Main组件写在mainRouter里
export const mainRouter = {
    path: '/mainTabbar',
    name: 'mainTabbar',
     redirect: '/home',
    meta: {
        notCache: true,
        title: '首页',
        index:2
    },
    component: Layout,
    children: [
        {
            path: '/home',
            name: 'home',
            component: Home,
            meta: { title: '首页',
            index:2, }
        },
        {
            path: '/patient',
            name: 'patient',
            component: Patient,
            meta: { title: '患者', index:2, },
        },
        {
            path: '/message',
            name: 'message',
            component: Message,
            meta: { title: '消息',  index:2,}
        },
        {
            path: '/mine',
            name: 'mine',
            component: Mine,
            meta: { title: '我的', index:2, }
        },
    ]
}

const routes = [
    mainRouter,
    loginRouter,
     commonIframe,
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: NotFound
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
