
<script setup>
    import AddTask  from './AddTask.vue'
    import TaskList  from './TaskList.vue'
    import { useAuthStore } from '../store/AuthStore.js'
    import { useRouter } from 'vue-router'

    const router = useRouter();

    const authStore = useAuthStore();

    const logout = () => {
        authStore.logout();
        router.push({ name: 'Login' })
    }

</script>

<template>
    <header class="bg-blue-700 border-b-light-100 border-b h-20 text-white p-5">
        <div class="flex flex-row justify-between items-center">
            <div class="text-2xl">Dashboard</div>
            <div>{{ authStore.user?.email }}</div>
            <div>
                <button @click="logout()" class="px-2 py-1 text-white rounded">Logout</button>
            </div>
        </div>
    </header>
   <div class="flex flex-col items-center mt-14">
        <AddTask></AddTask>
        <TaskList></TaskList>
   </div>
</template>