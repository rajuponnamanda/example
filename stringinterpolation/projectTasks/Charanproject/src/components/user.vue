<template>
    <p>{{user.id}}: <input v-model="user.name"></p>
  </template>
  
  <script>
  export default {
    props: ["user"],
    watch: {
      "user.name": function(newVal, previousVal) {
        console.log("new Value is " + newVal,
         "previous value is " + previousVal);
      }
    }
  };
  </script>