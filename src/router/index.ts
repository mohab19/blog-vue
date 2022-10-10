import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import RegisterView from '../views/RegisterView.vue'
import BlogsView from '../views/BlogsView.vue'
import PostView from '../views/PostView.vue'
import LoginView from '../views/LoginView.vue'

const isLoggin = localStorage.getItem('token')

const routes: Array<RouteRecordRaw> = [
    {
        path: '/register',
        name: 'register',
        component: RegisterView
    },
    {
        path: '/login',
        name: 'login',
        component: LoginView
    },
    {
        path: '/blog',
        name: 'blog',
        component: BlogsView,
        meta:{
            needAuth:true
        }
    },
    {
        path: '/post',
        name: 'post',
        component: PostView,
        meta:{
            needAuth:true
        }
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

router.beforeEach((to, from, next) => {
    if(to.meta.needAuth) {
        if(isLoggin)
            next();
        else
            next("/login");
    } else {
        next();
    }
});

export default router
