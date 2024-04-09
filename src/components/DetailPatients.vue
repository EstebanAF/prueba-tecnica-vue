<template>
<tr class="cursor-pointer">
    <td class="px-6 py-4 whitespace-nowrap">{{ props.name}}</td>
    <td class="px-6 py-4 whitespace-nowrap">{{ props.email}}</td>
    <td class="px-6 py-4 whitespace-nowrap">{{ props.age}}</td>
    <td class="px-6 py-4 whitespace-nowrap">{{ props.gender}}</td>
</tr>
</template>

<script lang='ts' setup>
import {defineProps, ref, Ref} from 'vue'
    const props = defineProps({
        name : String,
        email: String,
        age: Number,
        gender: String,
    })
</script>

<style scope>

</style>