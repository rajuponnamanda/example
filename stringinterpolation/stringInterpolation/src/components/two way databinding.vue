<template>
  <h1>Two Way Binding</h1>
  <input type="text" v-model="count" />
  <p>{{ count }}</p>
  <button @click="showCount()">Show count</button>
</template>
<script lang="ts">
export default {
  name: "raju",
  data() {
    return {
      count:'',
    };
  },
  methods: {
    showCount() {
     this.count=''
    },
  },
};
</script>

<style scoped>
h2 {
  color: blue;
}
</style>
