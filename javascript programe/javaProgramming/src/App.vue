 <template>
  <div>
    <java/>
  </div>
</template>
<script setup >
import java from "./components/javaTaskOne.vue"

const months = { 1: "A", 2: "B", 3: "C", 4: "D", 5: "E", 6: "H",
7: "L", 8: "M", 9: "P", 10: "R", 11: "S", 12: "T" };

let vowels = ["A", "E", "I", "O", "U"];

const firstCode = (person) => {
  let firstCode = [];
  let surname = person.surname.toUpperCase();
  let a = 0;
  let b = "";
  for (let i = 0; i < surname.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
        if (surname[i] == vowels[j]) {
      
        a += 1;
      }
    }
    if (a === 0) {
        firstCode.push(surname[i]);
        b += surname[i];
      }
      a = 0;
    if (firstCode.length === 3) {
      break;
    }  
  }
  let c = firstCode.length;
  if (firstCode.length < 3) {
      for (let i = 0; i < surname.length; i++) {
        for (let j = 0; j < vowels.length; j++) {
          if (surname[i] == vowels[j]) {
            firstCode.push(surname[i]);
            b += surname[i];
            c += 1;
       
        }
      }
        if (c === 3) {
              break;
        }
    }
  }
  return b;
}

const secondCode = (person) => {
  let secondCode = [];
  let name = person.name.toUpperCase();
  let a = 0;
  let b = "";
  for (let i = 0; i < name.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
        if (name[i] == vowels[j]) {
       
        a += 1;
      }
    }
    if (a === 0) {
        secondCode.push(name[i]);
      }
      a = 0;
  }
  
  let d = 0;
  for(let i = 0; i < secondCode.length; i++) {
    if (secondCode.length <= 3) {
      b += secondCode[i];
    } else {
        if(i === 1) {
        continue;
      }
      d += 1;
      b += secondCode[i];
      if (d === 3) {
        break;
      }
      
    }
  }
  let c = secondCode.length;
  if (secondCode.length < 3) {
      for (let i = 0; i < name.length; i++) {
        for (let j = 0; j < vowels.length; j++) {
          if (name[i] == vowels[j]) {
            secondCode.push(name[i]);
            b += name[i];
            c += 1;
         
        }
      }
        if (c === 3) {
              break;
        }
    }
  }
  return b;
};



const thirdCode = (person) => {
  let thirdCode = "";
  let gender = person.gender.toUpperCase();
  let dobinDdMm = person.dob;
  dobinDdMm = dobinDdMm.split("/");
  let dob = [dobinDdMm[1], dobinDdMm[0], dobinDdMm[2]].join("/");
  // let a = [];
  let dobData = new Date(dob);
  let date = dobData.getDate();
  let month = dobData.getMonth();
  month += 1;
  let f = [];
  let h = "";
  let FullYear = dobData.getFullYear();
  FullYear = parseInt(FullYear);
  while (FullYear > 99) {
    f.unshift(FullYear % 10);
    FullYear = parseInt(FullYear / 10);
  }
  f = f[0].toString() + f[1].toString();
  let g = months[month];
  if (gender === "F") {
    date += 40;
  }
  date = date.toString();
  let dateArr = [];
  for(let i = 0; i < 2; i++) {
    dateArr.push(date[i]);
  }
  if (dateArr[1] === undefined) {
    dateArr[1] = dateArr[0];
    dateArr[0] = "0";
    h = dateArr[0] + dateArr[1];
  } else h = date;
  thirdCode = f + g + h;
  return thirdCode;

 
};



function fiscalCode(person) {
  let code1 = firstCode(person);
  let code2 = secondCode(person);
  let code3 = thirdCode(person);

  if (code1.length < 3) {
    for (let i = code1.length; i < 3; i++) {
      code1 += "X";
    }
  }
  if (code2.length < 3) {
    for (let i = code2.length; i < 3; i++) {
      code2 += "X";
    }
  }
  let finalCode = code1 + code2 + code3;
  return finalCode;
};

console.log(fiscalCode({
  name: "Matt",
  surname: "Edabit",
  gender: "M",
  dob: "1/1/1900"
}));

console.log(fiscalCode({
  name: "Helenn",
  surname: "Yu",
  gender: "F",
  dob: "1/12/1950"
}));
console.log(fiscalCode({
  name: "Mickey",
  surname: "Mouse",
  gender: "M",
  dob: "16/1/1928"
}));
</script>





















<!-- <template>
  <div>
  
  <div>LIFE CYCLE HOOKS</div>
  <div>{{ state.name }}</div>

  <div>
    <button @click="state.name='Update Nmae'">Update</button>

    <button v-if="showLifeCycle" @click="showLifeCycle = !showLifeCycle">Destroy</button>
  </div>
  
  </div>
  </template>
  <script lang="ts" setup> 
import {reactive, onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, onUnmounted, onUpdated,ref} from 'vue'
  
const showLifeCycle=ref(false)

  const state =reactive({
    name:'JHON BRUCLEE',

  })
  onBeforeMount(()=>{
    console.log('before Mount')
})
onMounted(()=>{
    console.log('onMounted')
})
onBeforeUpdate(()=>{
    console.log('onBeforeUpdate')
})
onUpdated(()=>{
    console.log('onUpdated')
})
onBeforeUnmount(()=>{
    console.log('onBeforeUnmount')
})
onUnmounted(()=>{
    console.log('onUnmounted')
})</script> -->
<!--   
  <script lang="ts" setup>
  function addTime(timestamp: string, hrs: number,min: number,sec: number){
      let date= new Date("1970-02-01T"+ timestamp +"Z");
      date.setHours(date.getHours()+hrs);
      date.setHours(date.getMinutes()+min);
      date.setHours(date.getSeconds()+sec);
      let newTimestamp =date.toISOString().substring(11,19);
      
      return newTimestamp;
  }
  
  console.log(addTime("12:30:00",2 ,15,30));
  console.log(addTime("23:45:00",4,0,0)); -->
<!-- 
  </script> -->
