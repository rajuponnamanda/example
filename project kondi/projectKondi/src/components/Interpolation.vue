<template>
  <div class="main-cocntainer m-0 p-0">

 <img src="https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
 class="img"/>
 <div class="container d-flex text-white ">
  <div>
 <h5>First Name:-</h5> 
 <h5>Last Name:-</h5> 
 <h5>Gender :- </h5>
 <h5>Qualification:- </h5>
 <h5>Contact:- </h5>
</div>
<div>
<h5>{{ firstName }}</h5>
 <h5>{{ lastName }}</h5>
 <h5>{{ gender }}</h5>
 <h5>{{ qualification }}</h5>
 <h5>{{ contact }}</h5>
</div>
</div>
<div class="button">
<button class="btn btn-light m-5">Follow Me</button>
<button class="btn btn-light m-5">Share</button>
<button class="btn btn-light m-5">Subscribe</button>
</div>
</div>
</template>
{}
<script setup lang="ts">
import {ref} from'vue'
const firstName=ref('Raju')
const lastName=ref('Ponnamanda')
const gender=ref('Male')
const qualification=ref('B-Tech')
const contact=ref(9959444552)

</script>

<style scoped>
.img{
  height:250px;
  width:250px;
  border-radius:150px;
  margin-left: 45%;
  margin-top: 50px;
  border-color: rgb(3, 3, 3);
  border-width:5px;
  border-style: ridge;
}
.container{
  margin-left: 43%;
  margin-top: 25px;
}
.main-cocntainer{
  background-image:url("https://images.pexels.com/photos/2618992/pexels-photo-2618992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
  background-size: cover;
 
  height: 98vh;
}
.button{
  text-align: center;
  margin-top: 30px;
}
</style> 


