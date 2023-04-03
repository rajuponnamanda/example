<template>
    <div class="container pt-5 ps-5">
      <div class="row">
    <div class="col-md-12">
      <div class="mt-3">
        <button class="btn btn-primary" v-on:click.middle="count+=2">Increment</button>&nbsp;
        <button class="btn btn-success" v-on:click.left="count-=2">Decrement</button>
        <div>
        <h2>{{  count }}</h2>
      </div>
      <div class="row">
      <div class="form-group">
        <label>Enter Your Name :-</label>
        <input type="text" clas="form-control" 
        v-on:input="setName($event, 'rama raju')"
        v-on:keyup.enter="setConformedName"/>
      </div>
    </div>
    
      <div v-once>
        Your Name is {{ name }}
        </div>
      <div v-once>
        Your Name is {{ conformedName }}
      
      <div class="mt-3">
  <form v-on:submit="submitForm">
    <input type="text" class="form-controle"/>&nbsp;
    <button>submit From </button>
  </form>
</div>
s
      </div>
    
      </div>
    </div>
      </div>
    </div>

  </template>
  <script lang="ts">
  
  import {  ref } from "vue"
  export default({
    data(){
      return {
    count:ref(0),
    name:'Raju',
      }
   },
    methods:{
        setConformedName(){
            this.conformedName=this.name;
        },
        submitForm(){
            alert('submitted')
        },
      increment() {
        this.count++;
      },
      decrement() {
        this.count--;
      },
      setName(event, lastName) {
        this.name = event.target.value + lastName;
      },
    },
    });
    
   
  </script>