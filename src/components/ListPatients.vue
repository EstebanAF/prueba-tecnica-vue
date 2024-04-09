<template>
<div >
    <div class="flex flex-row justify-center m-5">
        <h1 class="text-3xl">Patients</h1> 
        <span class="bg-blue-200 text-blue-800 font-semibold py-1 px-3 text-lg
         rounded mx-3">{{ count_patients }}</span>
        <button class="text-lg bg-blue-500 py-1 px-3 rounded-lg text-white "
        @click="openModal()">
            Add Patient
        </button>
    </div>
    <hr>

    <ModalPatient
        v-if="isModalOpen"
        :closeModal="closeModal"
    />



    <div class="max-w-3xl mx-auto  m-2" >
        <div class="mx-auto m-9 sm:w-50 ">

            <table class="min-w-full bg-white rounded-lg overflow-hidden">
                <thead class="bg-gray-100 border-b border-gray-200">
                    <tr>
                        <th class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                        <th class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                        <th class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Age</th>
                        <th class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Gender</th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-gray-200">
                    <DetailPatient v-for="(patient,index) in patients" :key="index"
                        :name="patient.name" 
                        :email="patient.email"
                        :age="patient.age"
                        :gender="patient.gender"
                        @click="openModal"
                    />
                    <!-- Agrega más filas según sea necesario -->
                </tbody>
            </table>
        </div>
        
    </div>
</div>
</template>

<script lang='ts' setup>
import {ref,Ref} from 'vue'
import DetailPatient from './DetailPatients.vue'
import IPatient from '@/Interface/IPatient'
import ModalPatient from './ModalPatient.vue'
const patients:Ref<Array<IPatient>> = ref([
    {
    name : "John Doe",
    email: "john@example.com",
    age: 30,
    gender: "Male",
    },
    {
    name : "user 2",
    email: "user2@example.com",
    age: 54,
    gender: "Female",
    },
    {
    name : "user 2",
    email: "user2@example.com",
    age: 54,
    gender: "Female",
    },
    {
    name : "user 2",
    email: "user2@example.com",
    age: 54,
    gender: "Female",
    },
    {
    name : "user 2",
    email: "user2@example.com",
    age: 54,
    gender: "Female",
    },
    {
    name : "user 2",
    email: "user2@example.com",
    age: 54,
    gender: "Female",
    },
    {
    name : "user 2",
    email: "user2@example.com",
    age: 54,
    gender: "Female",
    },
    {
    name : "user 2",
    email: "user2@example.com",
    age: 54,
    gender: "Female",
    },
    {
    name : "user 2",
    email: "user2@example.com",
    age: 54,
    gender: "Female",
    },
    {
    name : "user 2",
    email: "user2@example.com",
    age: 54,
    gender: "Female",
    },
    {
    name : "user 2",
    email: "user2@example.com",
    age: 54,
    gender: "Female",
    },
    {
    name : "user 2",
    email: "user2@example.com",
    age: 54,
    gender: "Female",
    },
    {
    name : "user 2",
    email: "user2@example.com",
    age: 54,
    gender: "Female",
    },
    {
    name : "user 2",
    email: "user2@example.com",
    age: 54,
    gender: "Female",
    },

])
let count_patients:Ref<number> = ref(235)


let isModalOpen = ref(false);
const openModal = function() {
    isModalOpen.value = true;
    console.log(isModalOpen.value)
}
const closeModal = function() {
    isModalOpen.value = false;
    console.log(isModalOpen.value)
}

</script>

<style scope>
    .modal {
    display: none;
    }

    .modal-overlay {
    z-index: 40;
    }

    .modal-content {
    z-index: 50;
    }
</style>