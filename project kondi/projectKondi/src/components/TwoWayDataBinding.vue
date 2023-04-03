<template>
    <div>
        <input v-model="message" type="text" placeholder="Type here">
        <p>{{message}}</p>
    </div>
</template>
<script lang="ts" setup>
import {ref} from 'vue'
function message(){
   let name='Hi Im Raju Ponnamanda'
}

</script>
