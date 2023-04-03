<template>
    <navigationbar/>
    <div class="row">
    <div class="col-2">
    <sidenavbar/>
    </div>
    <div class="col-10">
        <router-view/>

    </div>
</div>

</template>


<script lang="ts" setup>
import navigationbar from "./components/navigationbar.vue"
import sidenavbar from "./components/sideNavbar.vue"


// function convertSeconds(seconds: number) {
//     let hours = Math.floor(seconds / 3600);
//     let minutes = Math.floor((seconds % 3600) / 60);
//     let remainingSeconds = seconds % 60;

//     if (hours < 10) {
//         hours = "0" + hours;
//     }
//     if (minutes < 10) {
//         minutes = "0" + minutes;
//     }
//     if (remainingSeconds < 10) {
//         remainingSeconds = "0" + remainingSeconds;
//     }

//     return hours + ":" + minutes + ":" + remainingSeconds;
// }

// console.log(convertSeconds(400000)); 
// console.log(convertSeconds(4700)); 



</script>

<style>

</style>

