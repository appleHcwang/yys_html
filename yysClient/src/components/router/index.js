import { createRouter, createWebHashHistory } from "vue-router";


import Login from '../views/login.vue'
import NotFound from '../views/NotFound.vue'
import Layout from '../views/layout/index.vue'

import Home from '../views/home/index.vue'
import Message from '../views/message/index.vue'
import Mine from '../views/mine/index.vue'
import Patient from '../views/patient/index.vue'

import CommonIframe from '../views/home/common-iframe.vue'

import DeptSelect from '../views/home/dept-select.vue'

import OcrRecognizeList from '../views/OCR/OcrRecognizeList.vue'

import OcrRecognizeResult from '../views/OCR/OcrRecognizeResult.vue'

import OcrRecognize from '../views/OCR/OcrRecognize.vue'


import QuoteOcrList  from '../views/OCR/QuoteOcrList.vue'

//登陆
export const loginRouter = {
    path: '/',
    name: 'login',
    meta: {
        title: '登录',
        index: 0,
    },
    hidden: true,
    component: Login
}


export const commonIframe = {
    path: '/commonIframe',
    name: 'commonIframe',
    meta: {
        title: 'commonIframe',
        index: 3,
    },
    hidden: true,
    component: CommonIframe

}

export const otherRouter = [
    {
        path: '/DeptSelect',
        name: 'DeptSelect',
        meta: {
            title: '',
            index: 4,
        },
        hidden: true,
        component: DeptSelect

    },
    {
        path: '/OcrList/:id',
        name: 'OcrList',
        meta: {
            title: '',
            index: 5,
        },
        hidden: true,
        component: OcrRecognizeList

    },
    {
        path: '/OcrRecognize',
        name: 'OcrRecognize',
        meta: {
            title: 'OCR识别',
            index: 6,
        },
        hidden: true,
        component: OcrRecognize
    },

    {
        path: '/QuoteOcrList',
        name: 'QuoteOcrList',
        meta: {
            title: '引用OCR',
            index: 7,
        },
        hidden: true,
        component: QuoteOcrList
    },
    {
        path: '/OcrRecognizeResult',
        name: 'OcrRecognizeResult',
        meta: {
            title: 'OCR识别结果',
            index: 7,
        },
        hidden: true,
        component: OcrRecognizeResult
    },
    //
    //
]

export const patientRouter =[
    {
        path:'/patient-index/:hosId',
        name:'patient-index',
        meta:{ title:'患者详情' },
        component:()=>import('../views/patient/PatientIndex.vue')
      },
  
]

// 作为Main组件写在mainRouter里
export const mainRouter = {
    path: '/mainTabbar',
    name: 'mainTabbar',
    redirect: '/home',
    meta: {
        notCache: true,
        title: '首页',
        index: 2
    },
    component: Layout,
    children: [
        {
            path: '/home',
            name: 'home',
            component: Home,
            meta: {
                title: '首页',
                index: 2,
            }
        },
        {
            path: '/patient',
            name: 'patient',
            component: Patient,
            meta: { title: '患者', index: 2, },
        },
        {
            path: '/message',
            name: 'message',
            component: Message,
            meta: { title: '消息', index: 2, }
        },
        {
            path: '/mine',
            name: 'mine',
            component: Mine,
            meta: { title: '我的', index: 2, }
        },
    ]
}

const routes = [
    mainRouter,
    loginRouter,
    commonIframe,
    ...patientRouter,
    ...otherRouter,
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: NotFound
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
