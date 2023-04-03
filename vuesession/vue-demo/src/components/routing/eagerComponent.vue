<template>
  <button class="btn btn-outline-primary" @click="showLazyComponent()">
    Show lazy component
  </button>
  <span v-if="showLazyComp">
    <lazyComponent />
  </span>
  <span v-else class="d-block"> Click to show lazy loaded component </span>
</template>

<script lang="ts" setup>
import { defineAsyncComponent, ref } from "vue";

const lazyComponent = defineAsyncComponent(() => import("./lazyComponent.vue"));
let showLazyComp = ref(true);

function showLazyComponent() {
  if (showLazyComp.value == true) showLazyComp.value = false;
  else if (showLazyComp.value == false) showLazyComp.value = true;
}
</script>

<style scoped></style>
