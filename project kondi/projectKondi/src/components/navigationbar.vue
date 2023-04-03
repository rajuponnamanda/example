<template>
  <nav class="navbar">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img
          src="https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Logo"
          width="50"
          height="50"
          class="d-inline-block align-text-middle text-white-50"
        />
        Virtual Currancy
      </a>
      <div>
      <input type="text" placeholder="Search" class="fa fa-search bg-dark text-light" aria-hidden="true" /> 
    </div>
      <h2>Making WebPage</h2>
    </div>
  </nav>
</template>
<script lang="ts" setup>
import { ref } from "vue";
</script>

<style>
h2{
    font-family: comic sans ms;
    color: rgb(255, 182, 182);
}
.navbar {
  background-color: rgb(131, 0, 0);
  text-align: center;
  
  height: 70px;
}
.bi-search{
    height: 25px;
    width: 25px;
    color: rgb(0, 55, 102);
}
img {
  padding: px;
  background-color: transparent;
}
input{
    border-radius:15px;
    height:35px;
    width: 500px;
    margin-left:300px ;
    border-style: ridge;
    border-color: rgb(252, 204, 204);
    border-width: 3px;
}



</style>
