<script setup lang="ts">
const props = defineProps<{
  count: number
}>()
let message = 'Thank You'
let countResend = 0
const emit = defineEmits<{
  (event: 'sayThanks', message: string): void
  (event: 'resendChoco', countResend: number): void
}>()
function sendMessage() {
  emit('sayThanks', message)
}
function send() {
  emit('resendChoco', countResend)
}
</script>

<template>
  <div class="container border border-danger border-2 p-4" style="height: 300px">
    <h3>Child Component</h3>
    <h5 class="text-primary">Chocolates recieved from Parent : <strong>{{count}}</strong></h5>
    <div class="m-2">
      <button class="btn btn-warning" @click="sendMessage()">Say 'Thank You ' to Parent</button>
    </div>
    <div class="m-2">
      <button class="btn btn-info" @click="send()">send Chocolates to Parent</button>
    </div>
  </div>


</template>