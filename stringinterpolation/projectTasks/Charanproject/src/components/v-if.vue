
<!-- <template>
  <ul>
    <li v-for='item in items' :key="item.id">{{ item.name }}</li>
  </ul>
</template>
<script setup lang="ts">import { ref } from 'vue';

const name=ref('items')
item:[
  {id:1, name: 'Item 1'},
  {id:2, name: 'Item 2'},
  {id:3, name: 'Item 3'},
  {id:4, name: 'Item 4'},
  {id:5, name: 'Item 5'}
]
    
</script> --> 

<!-- 
<template>
  <ul>
    <li v-for="(value, key) in object" :key="key">{{ key }}: {{ value }}</li>
  </ul>
</template>

<script lang="ts" setup>
 
     let object: {
        key1: 'Value 1',
        key2: 'Value 2',
        key3: 'Value 3'
      }
</script>
 <!-- <template>
        <h3 class="m-3">Details Of The Students</h3>
        <input v-model="getDetails" type="text" placeholder="search" class="m-3" >
        <br/>
        <ul>
         <li>{{ list[getDetails-1].id }}</li> --> -->
        <li>{{ result[getDetails].name }}</li>
      </ul>
      <button @click="handleShow()" class="m-3 mt-1 btn btn-danger">Show</button>
     
    </template>
    
    <script lang="ts" setup>
    import { ref } from "vue";
    
    const getDetails = ref(0)
    const result = ref([
  {id:1, name: 'raju'},
  {id:1, name: 'ponnamanda'},
  {id:1, name: '100 feet road'},
  {id:2, name: 'yaswanth'},
  {id:3, name: 'shilpa'},
  {id:4, name: 'yusuf'},
  {id:5, name: ' ramya '}]);
    
    function handleShow() {
return this.handleShow.resul

      return {
        result,
      }
    }
    </script> 