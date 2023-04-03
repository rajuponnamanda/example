<template>
  <div class="detail-Page">
    <h1>Profile Details</h1>
    <raju />
    <baaapu/>
    <!-- <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600"/> -->
    <!-- <h3>First name : {{firstName}}</h3>
    <h3>Last name : {{secondName}}</h3>
    <h3>Gender: {{gender}}</h3>
    <h3>From : {{from}}</h3>
    <h3>Email : {{email}}</h3>
    <h3>Contact : {{contact}}</h3>
    <ponnemanda/>
    <shilpa/>
  <raj/> -->
  
 
  <a href="https://blogonyourown.com/best-blogs/" target="_blank">
  <button class="button">
    Click Me
  </button>
</a>

<compositionVue></compositionVue>
</div>
</template>
<script setup lang="ts">
import raju from './components/v-bind.vue'
import baaapu from './components/two way databinding.vue'
// import compositionVue from './components/composition.vue';
// import shilpa from './components/variable binding.vue';
// import raj from './components/methods.vue';
// import ponnemanda from'./components/eventbinding.vue'
//    const firstName='Raju'
//    const secondName='Ponnamanda'
//    const gender='Male'
//    const from='Andhrapradesh'
//    const email='rponnamanda333@gmail.com'
//    const contact=9998899541
</script>

<style scoped>
.detail-Page{
padding: 10px;
/* margin: 15px; */
background-image: url("https://images.pexels.com/photos/2328863/pexels-photo-2328863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
text-align: center;
background-size: cover;
height: auto;
padding-top: 150px;


}
h1{
  color: rgb(179, 76, 3);
 font-style: italic;
  font-family:"roboto";
  text-decoration:underline;
}
h3{
  color: rgb(246, 244, 244);
 font-size:15px;
 font-style: italic;

  font-family:comic sans;
}
img{
  height: 150px;
  width: 200px;
  border-radius:70px;
  border-style:ridge;
  border-width: 5px;
  border-color: rgb(174, 174, 174);
  box-shadow:10px;
}
.button{
  height: 30px;
  width: 100px;
  border-radius: 30px;
  background-color: rgb(0, 0, 0);
  color: ghostwhite;
  border-style: ridge;
  border-color: aliceblue;
  border-width: 4px;

}
</style>