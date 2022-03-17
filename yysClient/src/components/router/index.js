import { createRouter, createWebHistory } from "vue-router";
import Login from '../views/login.vue'
import NotFound from '../views/NotFound.vue'
import Layout from '../views/layout/index.vue'

import Home from '../views/home/index.vue'
import Message from '../views/message/index.vue'
import Mine from '../views/mine/index.vue'
import Patient from '../views/patient/index.vue'

//登陆
export const loginRouter = {
    path: '/login',
    name: 'login',
    meta: {
        title: '登录'
    },
    hidden: true,
    component: Login


}

// 作为Main组件写在mainRouter里
export const mainRouter = {
    path: '/',
    name: 'mainTabbar',
    // redirect: '/user-center',
    meta: {
        notCache: true,
        title: '首页'
    },
    component: Layout,
    children: [
        {
            path: '',
            name: 'home',
            component: Home,
            meta: { title: '首页', }
        },
        {
            path: '/patient',
            name: 'patient',
            component: Patient,
            meta: { title: '患者' },
        },
        {
            path: '/message',
            name: 'message',
            component: Message,
            meta: { title: '消息', }
        },
        {
            path: '/mine',
            name: 'mine',
            component: Mine,
            meta: { title: '我的', }
        },
    ]
}

const routes = [
    mainRouter,
    loginRouter,
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
