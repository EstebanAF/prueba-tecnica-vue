<template>
<div >
    <div class="flex flex-col justify-center">
        <div class="flex flex-row justify-center mx-auto">
            <input type="search" name="search" id="search" class=" bg-gray-100 max-w-sm rounded px-5 py-1 border-2"
            v-model="search">
            <button class="ml-2 px-2 py-1 rounded bg-blue-500 text-white " @click="getSearch()">Search</button>
        </div>
        <div class="flex flex-row justify-center m-5">
            <h1 class="text-3xl">Patients</h1> 
            <span class="bg-blue-200 text-blue-800 font-semibold py-1 px-3 text-lg
            rounded mx-3">{{ count_patients }}</span>
            <button class="text-lg bg-blue-500 py-1 px-3 rounded-lg text-white "
            @click="openModalAdd()">
            Add Patient
            </button>
        </div>
    </div>
    <hr>

    <ModalPatient
        v-if="isModalOpen"
        :closeModal="closeModal"
        :patient="PatientModal"
    />
    <ModalPatientAdd
        v-if="isModalOpenAdd"
        :closeModal="closeModalAdd"
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
                    :id="patient.id"
                    @click="openModal"
                    @sendData="modalUpOrDel"
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
import IPatientUpdate from '@/Interface/IPatientUpdate'
import IPatient from '@/Interface/IPatient'
import ModalPatient from './ModalPatient.vue'
import ModalPatientAdd from './ModalPatientAdd.vue'
//import { Supabase } from '@supabase/supabase-js';
import { getPatients, getBySearch,} from "@/supabase/Crud"

let count_patients:Ref<number> = ref(0)

const patients:Ref<Array<IPatientUpdate>> = ref([])
const patientsAdd = async () => {
    let data = await getPatients()
    patients.value = data
    count_patients.value = patients.value.length
}
patientsAdd()

//this is for searech bar
let search = ref('')

const getSearch = async () => {
    console.log(search.value)
    if (search.value !== '') {
        let data = await getBySearch(search.value)
        patients.value = await data
        try {
            count_patients.value = patients.value.length
            
        }
        catch(error){
            count_patients.value = 0
        }
    }
    else{
        patientsAdd()
    }
} 
// this is for modal information
let PatientModal = {
    name : "",
    email: "",
    age: 1,
    gender: "",
    id: 0
}
const modalUpOrDel = (msg:IPatientUpdate) => {
    PatientModal = {
        name :msg.name,
        email:msg.email,
        age: msg.age,
        gender:msg.gender,
        id: msg.id,
    }

}

let isModalOpen = ref(false);
let isModalOpenAdd = ref(false);
const openModal = function() {
    isModalOpen.value = true;
}
const openModalAdd = function() {
    isModalOpenAdd.value = true;
}
const closeModal = function() {
    isModalOpen.value = false;  
}
const closeModalAdd = function() {
    isModalOpenAdd.value = false
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