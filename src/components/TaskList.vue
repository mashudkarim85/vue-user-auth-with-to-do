<script setup>
    import { useTodoStore } from '../store/TodoStore.js'

    const todoStore = useTodoStore();
    const tasks = todoStore.tasks;

    function removeTask(index) {
        todoStore.removeTask(index);
    }

</script>

<template>
    <table class="table-auto border-collapse border border-slate-400 mt-10">
            <thead>
                <tr class="bg-gray-100">
                    <th class="border border-slate-300 w-48 text-left p-2">Task Name</th>
                    <th class="border border-slate-300  w-48 text-left p-2">Status</th>
                    <th class="border border-slate-300  w-48 text-left p-2">Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(task, index) in tasks" :key="index">
                    <td class="border border-slate-300 p-2">{{ task.name }}</td>
                    <td class="border border-slate-300 p-2">
                        <div class="flex space-x-3">
                            <input type="checkbox" class="form-check-input" v-model="task.done">
                            <label class="form-check-label">{{ task.done ? 'Done' : 'Undone' }}</label>
                        </div>
                    </td>
                    <td class="border border-slate-300 p-2">
                        <button @click="removeTask(index)" class="bg-red-700 px-2 py-1 text-white rounded">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
</template>
  

