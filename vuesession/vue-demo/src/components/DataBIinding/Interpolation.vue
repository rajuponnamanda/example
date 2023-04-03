<template>
   <h5>First Name:   {{ firstName }}</h5> 
   <h5>Gender :  {{ gender }} </h5>
   <h5>Qualification:   {{ qualification }}</h5>
  </template>

  <script setup lang="ts">

  const firstName=' Jhon Doe'
  const gender=' Male'
  const qualification=' Graduation'
  
  </script>
  
  <style scoped>
h5{
    text-align: center;
    margin-top:4vh;
}
  </style> 
  
  
  