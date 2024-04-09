<template>
<div class="modal-overlay fixed inset-0 overflow-y-auto">
    <div class="flex items-center justify-center min-h-screen">
      <div class="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
        <!-- Contenido del modal -->
        <div class="modal-content py-4 text-left px-6">
          <!-- Título del modal -->
          <div class="flex justify-between items-center pb-3">
            <p class="text-2xl font-bold">Agregar Usuario</p>
            <button @click="props.closeModal" class="modal-close cursor-pointer z-50">
              <svg class="fill-current text-black" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                <path d="M13.06 4.94a.75.75 0 010 1.06L9.56 9l3.5 3.5a.75.75 0 11-1.06 1.06L8.5 10.06l-3.5 3.5a.75.75 0 11-1.06-1.06l3.5-3.5-3.5-3.5a.75.75 0 111.06-1.06l3.5 3.5 3.5-3.5a.75.75 0 011.06 0z"/>
              </svg>
            </button>
          </div>
          <!-- Formulario -->
          <form @submit.prevent="addUser">
            <!-- Campo Name -->
            <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
                Name
              </label>
              <input v-model="newUser.name" class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Enter name">
            </div>
            <!-- Campo Email -->
            <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
                Email
              </label>
              <input v-model="newUser.email" class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Enter email">
            </div>
            <!-- Campo Age -->
            <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="age">
                Age
              </label>
              <input v-model="newUser.age" class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="age" type="number" placeholder="Enter age">
            </div>
            <!-- Campo Gender -->
            <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="gender">
                Gender
              </label>
              <select v-model="newUser.gender" class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="gender">
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <!-- Botones -->
            <div class="flex justify-end">
              <button type="submit" class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2">Add</button>
              <button @click="deleteUser" class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Delete</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>



<script lang='ts' setup>
import {defineProps, ref, Ref} from 'vue'
import IPatient from '@/Interface/IPatient'
const props = defineProps({
    isModalOpen: Boolean,
    closeModal: Function,
})
const newUser:IPatient =  {
    name: '',
    email: '',
    age: 1,
    gender: 'male' // Valor predeterminado
}

const deleteUser = () => {
    console.log("deleting")
}
</script>

<style scope>

</style>