<script lang="ts" setup>
import { ref } from 'vue'

const count = ref(0)

function increment() {
  count.value++
}
import {ref} from 'vue'
const shilpa = ref(100)
function decrement() 
{
    shilpa.value--
}
</script>

<template>
    <h1>composition</h1>
  <button @click="increment">count is: {{ count }}</button>
  <button @click="decrement">count is: {{ shilpa }}</button>
</template>
<style scoped>
button{
    color: aqua;
    background-color: black;
    height: 30px;
    justify-content: space-between;
    border-style: ridge;
    border-color:white ;
    margin-right: 15px;
}
</style>