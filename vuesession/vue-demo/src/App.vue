<template>
  <nav class="navbar bg-body-tertiary bg-warning nav-height ">
  <div class="container-fluid">
    <span class="navbar-brand mb-0 h1"> Vue  <i class="bi bi-3-square"></i></span>
  
    <div class="dropdown">
  <button class="btn btn-dark btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" >
    More
  </button>
  <ul class="dropdown-menu dropdown-menu-end">
    <li><a class="dropdown-item" >Login</a></li>
    <li><a class="dropdown-item" >Sign Up</a></li>
    <li><a class="dropdown-item" >Help </a></li>
  </ul>
</div>
  </div>
</nav>
<div class="container-fluid p-0 d-flex ">

<div class="col-2 bg-dark border-end border-2 content-height d-flex flex-column py-2">
  <router-link to="/nestedComponents" class="btn  my-2 mx-3 text-light ">Nested Component</router-link>
  <router-link to="/eventBinding" class="btn  my-2 mx-3 text-light ">Event Binding</router-link>
  <router-link to="/stringInterpolation" class="btn  my-2 mx-3 text-light ">String Interpolation</router-link>
  <router-link to="/twoWay" class="btn  my-2 mx-3 text-light ">Two Way Data Binding</router-link>
  <router-link to="/directives" class="btn  my-2 mx-3 text-light ">Directives</router-link>
  <router-link to="/routing" class="btn  my-2 mx-3 text-light ">Routing</router-link>
</div>
<div class="col-10 content-height">
  <router-view /> 

</div>
</div>
</template>

<script lang="ts" setup>

</script>
<style scoped>
.nav-height{
  height:6vh;
}
.content-height{
  height:95vh;
}
h1{
  color: darkgoldenrod;
  text-align: center;
  margin-top: 20vh;
  font-family:Comic Sans MS	;
  font-weight: 700;
}
h5{
  color: rgb(5, 67, 122);
  text-align: center;
 font-family:Comic Sans MS	;

}
</style>