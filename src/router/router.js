import { createRouter, createWebHistory } from 'vue-router'
import Register from '../components/Register.vue'
import Login from '../components/Login.vue'
import Dashboard from '../components/Dashboard.vue'

const routes = [
    {
        path: '/',
        redirectTo: 'login'
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
        component: Dashboard
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router