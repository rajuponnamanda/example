
  <template>
  <div>
 <h1>Event binding</h1>
<div>
 <input type="text" v-model="raju" />

 <h4>{{ raju }}{{ raju1 }}</h4>
</div>

<div>
 <input type="text" @keyup="raju1" v-model="raju1" />
 </div>

</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
   
const raju=ref('')
const raju1=ref('')

function result(){
  console.log(raju.value)
  console.log(raju1.value)
}

</script>      

<style scoped>
h1 {
text-align: center;
text-decoration: underline;
}
</style>