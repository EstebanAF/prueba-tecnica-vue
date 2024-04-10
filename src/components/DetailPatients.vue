<template>
<tr class="cursor-pointer " @click="handleClick">
    <td class="px-6 py-4 whitespace-nowrap">{{ props.name}}</td>
    <td class="px-6 py-4 whitespace-nowrap">{{ props.email}}</td>
    <td class="px-6 py-4 whitespace-nowrap">{{ props.age}}</td>
    <td class="px-6 py-4 whitespace-nowrap">{{ props.gender}}</td>
</tr>
</template>

<script lang='ts' setup>
import {defineProps, defineEmits, ref} from 'vue'
    const props = defineProps({
        name : String,
        email: String,
        age: Number,
        gender: String,
        id:Number
    })
    const emit = defineEmits(['sendData'])
    let msg = ref({
        name: props.name,
        email: props.email,
        age: props.age,
        gender: props.gender,
        id: props.id
    })
    const handleClick = () => {
        emit('sendData',msg.value)
    }
</script>

<style scope>

</style>