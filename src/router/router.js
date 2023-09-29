import { createRouter, createWebHistory } from 'vue-router'
import Register from '../components/Register.vue'
import Login from '../components/Login.vue'
import Dashboard from '../components/Dashboard.vue'
import { useAuthStore } from '../store/AuthStore.js'

const routes = [
    {
        path: '/',
        redirect: 'login'
    },
    {
        path: '/login',
        name: 'Login',  
        component: Login
    },
    {
        path: '/register',
        name: 'Register',
        component: Register
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard,
         meta:{
            requiresAuth: true
        }
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    const auth = useAuthStore()
    if(to.meta.requiresAuth && !auth.isAuthenticated){
        next('/login')
    }else{
        next()
    }
})

export default router