 <!-- <template>
        <h3 class="m-3">Details Of The Students</h3>
        <input v-model="getDetails" type="text" placeholder="search" class="m-3" >
        <br/>
        <ul>
         <li>{{ list[getDetails-1].id }}</li> 
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
      </script>  -->
      <template>
        <div >
          <button class="button" @click="navigateToFoo"><h5>home</h5></button>
        </div>
      </template>
      
      <script lang="ts" setup>
import router from '../router/index'
      
          function navigateToFoo() {
            router.push('/router-view');
          }
      </script>
      <style>
      .button{
        border-style:none;
        color: brown;
        height: 40px;
        width: 138px;
        margin-left: 5px;
        border-radius: 10px;
        font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        background-color: black;

    
      }
    </style>
      
      