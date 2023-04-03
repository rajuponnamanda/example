<template>
  <div>
    <button class="btn btn-primary align" @click="toggleMessage()">
      Show/Hide
    </button>
    <div style="height:300px;" v-if="showMessage" class="content d-flex flex-wrap my-5 text-secondary">
      <div  v-for="user in users" :key="user.id" class="border border-1 m-2 p-2">
        <p>{{ user.id }}</p>
        <p>{{ user.name }}</p>
        <p>{{ user.username }}</p>
        <p>{{ user.email }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const showMessage = ref(true);
const message = ref("HAPPY NEW YEAR");

let users = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
  },
  {
    id: 3,
    name: "Clementine Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net",
  },
  {
    id: 4,
    name: "Patricia Lebsack",
    username: "Karianne",
    email: "Julianne.OConner@kory.org",
  },
  {
    id: 5,
    name: "Chelsey Dietrich",
    username: "Kamren",
    email: "Lucio_Hettinger@annie.ca",
  },
  {
    id: 6,
    name: "Mrs. Dennis Schulist",
    username: "Leopoldo_Corkery",
    email: "Karley_Dach@jasper.info",
  },
  {
    id: 7,
    name: "Kurtis Weissnat",
    username: "Elwyn.Skiles",
    email: "Telly.Hoeger@billy.biz",
  },
  {
    id: 8,
    name: "Nicholas Runolfsdottir V",
    username: "Maxime_Nienow",
    email: "Sherwood@rosamond.me",
  },
  {
    id: 9,
    name: "Glenna Reichert",
    username: "Delphine",
    email: "Chaim_McDermott@dana.io",
  },
  {
    id: 10,
    name: "Clementina DuBuque",
    username: "Moriah.Stanton",
    email: "Rey.Padberg@karina.biz",
  },
];

function toggleMessage() {
  if (showMessage.value == true) showMessage.value = false;
  else if (showMessage.value == false) showMessage.value = true;
}
</script>

<style scoped>
.content {
  text-align: center;
}
.align {
  margin-left: 39vw;
}
</style>
>
