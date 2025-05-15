<script setup>
import { ref, computed } from 'vue';
const count = ref(0)
const squaredCounter = computed (() =>
    count.value ** 2
)

const increementCounter = () =>{
    count.value ++
}
</script>

<template>
    <h1>Counter: {{ count }}</h1>
    <h1>Squared Counter: {{ squaredCounter }}</h1>
    <button @click="increementCounter">+</button>
</template>