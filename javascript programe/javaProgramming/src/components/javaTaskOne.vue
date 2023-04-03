<template>
  <div>
  
  <div>Article Page</div>
  
  </div>
  </template>
  
  <script lang="ts" setup>
  function addTime(timestamp: string, hrs: number,min: number,sec: number){
      let date= new Date("1975-01-01T"+ timestamp +"Z");
      date.setHours(date.getHours()+hrs);
      date.setHours(date.getMinutes()+min);
      date.setHours(date.getSeconds()+sec);
      let newTimestamp =date.toISOString().substring(11,19);
      
      return newTimestamp;
  }
  
  console.log(addTime("12:30:00",2 ,15,30));
  console.log(addTime("23:45:00",4,0,0));
  console.log(addTime("15:59:59",4,8,8));
  </script>




<template>
  <div class="root">
    <h2>Create an Account</h2>
    <p>
      <input type="text" placeholder="email" v-model="state.email"/>
      <span v-if="v$.email.$error"> {{ v$.email.$errors[0].$message }}</span>
    </p>
    <p>
      <input type="password" placeholder="password"  v-model="state.password.password"/>
      <span v-if="v$.password.password.$error"> {{ v$.password.password.$errors[0].$message }}</span>

    </p>
    <p>
      <input type="password" placeholder="Confirm password"  v-model="state.password.confirm"/>
      <span v-if="v$.password.confirm.$error"> {{ v$.password.confirm.$errors[0].$message }}</span>

    </p>
    <button @click="submitForm()">Submit</button>
  </div>
</template>

<script setup lang="ts">
import useValidate from '@vuelidate/core';
import  {required, email, minLength,sameAs,maxLength } from '@vuelidate/validators';
import { reactive,  computed} from 'vue';

const  state =reactive({
    email:'',
    password:{
        password:'',
        confirm:''
    }
});
const rules = computed (()=>{
    return{
        email:{
            required,email
        },
        password:{
            password:{required,
            minLength:minLength(3)},
            confirm:{required,
                sameAs:(state.password.password)},
            }
        }
    
});
const v$ =useValidate(rules,state)

function submitForm(){
    
    if(!v$.$validate){
        alert('From Successfully Submitted.')
    }else{
        alert('Form failed validation')
    }
}


</script> 



<template>
  <div class="root">
    <h2>Create an Account</h2>
    <p>
      <input type="text" placeholder="Email" v-model="state.email" />
      <span v-if="v$.email.$error">
        {{ v$.email.$errors[0].$message }}
      </span>
    </p>
    <p>
      <input
        type="password"
        placeholder="Password"
        v-model="state.password.password"
      />
      <span v-if="v$.password.password.$error">
        {{ v$.password.password.$errors[0].$message }}
      </span>
    </p>
    <p>
      <input
        type="password"
        placeholder="Confirm Password"
        v-model="state.password.confirm"
      />
      <span v-if="v$.password.confirm.$error">
        {{ v$.password.confirm.$errors[0].$message }}
      </span>
    </p>
    <button @click="submitForm()">Submit</button>
  </div>
</template>

<script setup lang="ts">

import { required, email, minLength, sameAs, helpers } from '@vuelidate/validators'
import { computed, reactive } from 'vue'
import useVuelidate from '@vuelidate/core';

const mustBeLearnVue = (value: string|string[]) => value.includes('learnvue')


    const state = reactive({
      email: '',
      password: {
        password: '',
        confirm: '',
      },
    })
    const rules = computed(() => {
  return {
    email: { required, email },
    password: {
      password: { required, minLength: minLength(6) },
      confirm: { required, sameAs: sameAs(state.password.password) },
    },
  }
})
 function submitForm() {
      this.v$.$validate() 
      if (!this.v$.$error) {
        alert('Form successfully submitted.')
      } else {
        alert('Form failed validation')
      }
    }



const v$ = useVuelidate(rules, state)





</script>