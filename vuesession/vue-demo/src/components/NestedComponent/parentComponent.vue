<template>
    <div class="border border-dark mx-3">
    <h1>Hi Im Parent Component</h1>
   <childComponent/>
</div>
  
</template>

<script lang="ts" setup>
import childComponent from "./childComponent.vue"
</script>
<style scoped>
h1{
    color: rgb(0, 0, 0);
    text-align: center;
    margin-top: 10vh;
}
</style>