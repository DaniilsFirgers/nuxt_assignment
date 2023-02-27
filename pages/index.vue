<template>
  <div>
    <h2>About</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
      aperiam deleniti nulla, minus inventore labore mollitia ab rerum. Maxime
      maiores fuga libero sunt debitis laboriosam minima, tempora consequatur
      sequi veniam!
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
      aperiam deleniti nulla, minus inventore labore mollitia ab rerum. Maxime
      maiores fuga libero sunt debitis laboriosam minima, tempora consequatur
      sequi veniam!
    </p>
  </div>
</template>

<script setup lang="ts">
import { useTaskStore } from "../stores/main";
const taskStore = useTaskStore();
onMounted(() => {
  console.log(taskStore);
});
</script>

<style scoped>
h2 {
  margin-bottom: 20px;
  font-size: 36px;
}
p {
  margin: 30px 0px;
}
</style>
