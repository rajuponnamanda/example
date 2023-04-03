<template>
    <button @click="changeName" class="btn btn-primary">Click me</button>
    <p>{{ name }}</p>
  </template>
  <script lang="ts" setup >
  import { ref } from 'vue'
  
      const name = ref('Raju ponnamanda brother of shilpa')
  
      function changeName() {
        name.value = 'Shilpa pathlavath'
      };
   
  </script>
  