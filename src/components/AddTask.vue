
<template>
  <div class="w-1/3">
    <div class="flex flex-row space-x-6">
        <input v-model="taskName" @keyup.enter="addTask" placeholder="Add a new task" class="w-full border rounded px-3 py-2" />
        <button @click="addTask" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Add</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useTodoStore } from '../store/TodoStore.js';

const taskName = ref('');
const todoStore = useTodoStore();

const addTask = () => {
    if (taskName.value.trim() !== '') {
        todoStore.addTask(taskName.value);
        taskName.value = '';
    }
};
</script>