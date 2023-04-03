<template>
    <form>
      <input  class="data my-5 text-center" v-model="message" type="text" placeholder="Two Way Data Binding">
      
      <p>{{ message }}</p>
    </form>
  </template>
  
  <script lang="ts">
  export default {
    data() {
      return {
        message:''
      }
    }
  }
  </script> 
  <style scoped>
  .data{
      align-content: center;
      margin-left: 36vw;
      
  }
  </style>