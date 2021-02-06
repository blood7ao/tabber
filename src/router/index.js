import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../views/home/home')
const Shop = () => import('../views/shop/shop')
const Classify = () => import('../views/classify/classify')
const Mine = () => import('../views/mine/mine')

Vue.use(VueRouter)

const routes = [
    {
        path: '',
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home
    }, {
        path: '/classify',
        component: Classify,
    }, {
        path: '/mine',
        component: Mine
    },
    {
        path: '/shop',
        component: Shop
    }

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
