<template>
    <input v-bind:value="message"/>
    
</template>
<script setup lang="ts">
import { ref } from 'vue'
const message = ref('Hi Raju');



</script>