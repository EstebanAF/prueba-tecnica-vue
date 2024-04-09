<template>
<div >
    <div class="flex flex-row justify-center m-5">
        <h1 class="text-3xl">Patients</h1> <span class="bg-blue-200 text-blue-800 font-semibold py-1 px-3 text-lg
         rounded mx-3">{{ count_patients }}</span>
    </div>
    <hr>
</div>
</template>

<script lang='ts' setup>
import {ref,Ref} from 'vue'
import {IPatient} from '@/Interface/IPatient'

let count_patients:Ref<number> = ref(235)

</script>

<style scope>

</style>