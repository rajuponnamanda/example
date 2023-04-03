<script setup lang="ts">
import { ref } from "@vue/reactivity";
import ChildComponent from "./components/ChildComponent.vue";
let chocolates = ref(5)
let countChocolates = ref(0)
let response = ref('')
function sendTOChild() {
  if (chocolates.value <= 0) {
    window.alert("you don't have chocolates")
  }
  else {
    countChocolates.value++
    chocolates.value--
  }
}
function getMessage(event) {
  response.value = event
}
function recieveChoco(event) {
  if (countChocolates.value <= 0) {
    window.alert("Yup ! you don't have Chocolates")
  }
  else {
    chocolates.value++
    countChocolates.value--
  }
}
</script>

<template>
  <div class="container border border-primary border-3 p-3" style="height: 600px">
    <h2>Parent Component</h2>
    <div><span class="text-danger">No of Chocolates :</span><strong>{{chocolates}}</strong></div>
    <button class="btn btn-primary mt-2" @click="sendTOChild">send Chocolates to Child</button>
    <div class="m-2 p-2">
      <span>Response</span>: <strong class="text-primary">{{response}}</strong>
    </div>
    <hr>

    <ChildComponent :count="countChocolates" @sayThanks="getMessage" @resendChoco="recieveChoco" />
  </div>

</template>