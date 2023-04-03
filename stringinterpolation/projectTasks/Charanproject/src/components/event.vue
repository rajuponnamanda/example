 
<template>
<div class="container">
  <input class="line" type="text" v-model="message1">
  <button @click="copyMessage" class="btn btn-warning ms-3 mb-3 ">Click Me</button>
  <br/> 
  <input type="text" v-model="message2">
</div>
<dhamaka/>
<vif/>
</template>



<script setup lang="ts">

import { ref } from 'vue'
import dhamaka from "./components/event.vue" 
import vif from "./components/v-if.vue"

const message1=ref('')
const message2=ref('')

function copyMessage (){
message2.value = message1.value
}

</script>

<style scoped>
.container{
text-align: center;
margin-left: 30px;
margin-top: 30px;
}

 .top{
display:inline;

 }
 .line{
  border-color:rgb(255, 118, 118) ;
 }

</style> -->

<!-- <template>
  <h1 v-if="showMessage()">Raju Ponnamanda</h1>
  <h3 v-else>I'm from Madhapur</h3>

  <button>
  Submit
  </button>
</template>
<script setup lang="ts">
import { ref } from 'vue'
function showMessage(){
  return false;

}

</script> -->

<!-- 

<!-- <template>
  <main>
    <p>{{ numberOne }}</p>
    <button  @click="numberone++">Increase</button>
    <p>{{ numberTwo }}</p>
  </main>
</template>
<script setup lang="ts">

const numberTwo=2;
</script>
<script>

export default {
  data(){
    return{
      numberOne:1
    }
  }
}
</script> --> 
<!-- <template>
  <div id="topPage">
    <div class="page1">
    <h1>main page1</h1>
    <h1>main page2</h1>
    <h1>main page3</h1>
      </div>
  </div>
  <button @click="topPage()"> Go Top </button>
</template>
<style>
h1{
height: 100vh;
width: auto;
text-align: center;
}
</style>
<script lang="ts" setup>
import { ref } from 'vue'
function topPage(){
ref()
  
  } -->

  <template>
    <button @click="handleShow">Show</button>
    <ul v-if="showDropdown">
      <li v-for="item in items">{{ item }}</li>
    </ul>
  </template>
  
  <script lang="ts" setup>
  import { ref } from "vue";
  
  const showDropdown = ref(true);
  const item = ref([{id:1, name: 'raju'},
  {id:2, name: 'yaswanth'},
  {id:3, name: 'shilpa'},
  {id:4, name: 'yusuf'},
  {id:5, name: ' ramya '}]);
  
  function handleShow() {
    showDropdown.value = !showDropdown.value;
  
    return {
      showDropdown,
    };
  }
  </script>
  <!-- <template>
      <ul v-if="showDropdownX">
        <li>This is X</li>
        <li>This is X</li>
        <li>This is X</li>
      </ul>
      <button @click="handleShowX">Toggle dropdown X</button>
    
      <ul v-if="showDropdownY">
        <li>This is Y</li>
        <li>This is Y</li>
        <li>This is Y</li>
      </ul>
      <button @click="handleShowY">Toggle Dropdown Y</button>
    </template>
    
    <script>
    import { ref } from "@vue/reactivity";
    export default {
      setup() {
        const showDropdownX = ref(false);
        const showDropdownY = ref(false);
    
        const handleShowX = () => {
          showDropdownX.value = !showDropdownX.value;
          showDropdownY.value = false;
        };
        const handleShowY = () => {
          showDropdownY.value = !showDropdownY.value;
          showDropdownX.value = false;
        };
    
        return {
          showDropdownX,
          showDropdownY,
          handleShowX,
          handleShowY,
        };
      },
    };
    </script> -->
     -->
    <!-- <template>
        <ul v-if="showDropdownX">
          <li>This is X</li>
          <li>This is X</li>
          <li>This is X</li>
        </ul>
        <button @click="handleShowX">Toggle dropdown X</button>
      
        <ul v-if="showDropdownY">
          <li>This is Y</li>
          <li>This is Y</li>
          <li>This is Y</li>
        </ul>
        <button @click="handleShowY">Toggle Dropdown Y</button>
      </template>
      
      <script>
      import { ref } from "@vue/reactivity";
      export default {
        setup() {
          const showDropdownX = ref(false);
          const showDropdownY = ref(false);
      
          const handleShowX = () => {
            showDropdownX.value = !showDropdownX.value;
            showDropdownY.value = false;
          };
          const handleShowY = () => {
            showDropdownY.value = !showDropdownY.value;
            showDropdownX.value = false;
          };
      
          return {
            showDropdownX,
            showDropdownY,
            handleShowX,
            handleShowY,
          };
        },
      };
      </script> -->
      <!-- <template>
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
    </script> -->
     <!-- <template>
<button @click='increment()'>increase :- </button>
<button @click='decrement()'>decrement :- </button>
<h2>{{ state }}</h2>
<h4>{{ item[state].name  }}</h4>
</template>

<script setup lang="ts">
import { reactive,ref,computed } from 'vue' 

// const state =reactive({ count:0 })
const state =ref(0)

const fullName=computed(()=> {
  return 
   item={[
  {id:1, name: 'raju'},
  {id:2, name: 'yaswanth'},
  {id:3, name: 'shilpa'},
  {id:4, name: 'yusuf'},
  {id:5, name: ' ramya '}
]}
function increment(){
state.value++

}

function decrement(){
state.value--

  }
const obj= reactive({
  nested:{count:0},
  arr:['foo','bar']
})
function mutateDeeply(){
  obj.nested.count++
  obj.arr.push('baz')
} 
</script> -->
<!-- <template>
  <div>
    <div class="search-wrapper panel-heading col-sm-12">
      <input type="text" v-model="search" placeholder="Search" /> <br />
      <br />
    </div>
    <table class="table" id="myTable">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Category</th>
          <th>Quantity</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.id">
          <td>{{ product.id }}</td>
          <td>{{ product.name }}</td>
          <td>{{ product.category }}</td>
          <td>{{ product.quantity }}</td>
          <td>{{ product.status }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [
      {id:1, name: 'raju'},
  {id:2, name: 'yaswanth'},
  {id:3, name: 'shilpa'},
  {id:4, name: 'yusuf'},
  {id:5, name: ' ramya '}
      ]
    };
  }
};
</script> -->

<!-- <template>
  

      <div id = "databinding">
         <button v-on:click = "displaynumbers">Click ME</button>
         <h2> Add Number 100 + 200 = {{total}}</h2>
      </div>
    </template>
      <script lang="ts">
        import {ref}from'vue'
        function displaynumbers(){
            el: '#databinding',
            data: {
               num1: 100,
               num2 : 200,
               total : ''
            }
            methods : {
               displaynumbers : function(event) {
                  console.log(event);
                  return this.total =  this.num1+ this.num2;
               }
      </script> -->
    