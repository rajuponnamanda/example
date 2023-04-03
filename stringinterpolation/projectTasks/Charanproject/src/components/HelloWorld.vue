<!-- 
      <template>
        <h3 class="m-3">Details Of The Students</h3>
        <input v-model="getDetails" type="text" placeholder="search" class="m-3" >
        <br/>
    
        <!-- <li>{{ list[getDetails-1].id }}</li> -->
        <!-- <h3 v-if="checkRes">{{ data }}</h3>
   
      <button @click="handleShow()" class="m-3 mt-1 btn btn-danger">Show</button>
     
    </template>
    
    <script lang="ts" setup>
    import { ref } from "vue";
    
    const getDetails = ref()
    let data=ref('');
    let checkRes=ref<boolean>(false)
    const result =[
  {id:1, name: 'raju'},
  {id:2, name: 'ponnamanda'},
  {id:3, name: '100 feet road'},
  {id:4, name: 'yaswanth'},
  {id:5, name: 'shilpa'},
  {id:6, name: 'yusuf'},
  {id:7, name: ' ramya '}];
    
    function handleShow() {    
      data.value=result[getDetails.value].name 
      checkRes.value=true     
    }
    </script> 