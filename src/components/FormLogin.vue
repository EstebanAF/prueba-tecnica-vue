<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div v-if="!user">
      <div class="max-w-md w-full bg-white p-8 shadow-md">
        <h2 class="text-2xl font-bold mb-4">Inicio de Sesión</h2>
        <form @submit.prevent="submitForm">
          <div class="mb-4">
            <label for="email" class="block text-gray-700 font-semibold mb-2">Email</label>
            <input type="email" id="email" v-model="email" class="w-full border-b-2 border-gray-300 px-2 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50">
          </div>
          <div class="mb-4">
            <label for="password" class="block text-gray-700 font-semibold mb-2">Contraseña</label>
            <input type="password" id="password" v-model="password" class="w-full border-b-2 border-gray-300 px-2 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50">
          </div>
          <div class="mb-4">
            <button type="submit" class="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Iniciar Sesión</button>
          </div>
        </form>
      </div>
    </div>
    <div v-else>
      <button @click="logoutApp" class="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600">Cerrar sesión</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {ref,Ref} from 'vue'
import {login,logout,getCurrentUser} from "@/supabase/Crud"

let user:Ref = ref()
let email:Ref =  ref('')
let password:Ref = ref('')

const submitForm = async ()=> {
  // Aquí puedes agregar la lógica para enviar el formulario
  let data = await login(email.value,password.value)
  user.value = await getCurrentUser()
  
}

const logoutApp = async ()=> {
  // Aquí agregarías la lógica para cerrar sesión
  console.log('Cerrando sesión...');
  let error  = await logout()
  user.value = await getCurrentUser()
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
