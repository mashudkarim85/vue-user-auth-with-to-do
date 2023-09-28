<script setup>
import { ref , reactive } from 'vue'
import { useAuthStore } from '../store/AuthStore.js'
import { useRouter } from 'vue-router'

const router  = useRouter();

const auth = useAuthStore()


const formData = reactive({
  email: '',
  password: ''
});

const login = () => {
  const { email, password } = formData;

  if(auth.login({ email, password })) {
    router.push('/dashboard');
  } else {
    alert('Invalid email/password');
  }
};

</script>

<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-100">
      <div class="bg-white p-8 rounded shadow-md w-1/3">
        <h2 class="text-2xl font-semibold mb-4 text-center uppercase">Login</h2>
        <form @submit.prevent="login">
          <div class="mb-4">
            <label for="email" class="block text-gray-900">Email</label>
            <input type="email" id="email" placeholder="Enter your email Address" v-model="formData.email" required class="w-full border rounded px-3 py-2">
          </div>
          <div class="mb-4">
            <label for="password" class="block text-gray-900">Password</label>
            <input type="password" id="password"  placeholder="Enter your password" v-model="formData.password" required class="w-full border rounded px-3 py-2">
          </div>
         <div class="flex justify-between">
          <p >
            <span class="text-gray-400">Don't have an account? </span>
          <router-link :to="{ name: 'Register' }" type="button" class="px-4 py-2 rounded border hover:bg-gray-200">Register</router-link>
          </p>
          <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Login</button>
         </div>
        </form>
      </div>  
    </div>    
</template>
  