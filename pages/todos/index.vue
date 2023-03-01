<template>
  <div>
    <form action="/action_page.php">
      <label for="fname">First name:</label><br />
      <input type="text" id="fname" name="fname" value="John" /><br />
      <label for="lname">Last name:</label><br />
      <input type="text" id="lname" name="lname" value="Doe" /><br /><br />
      <button>Add</button>
    </form>
  </div>
  <div class="task-list">
    <div v-for="todo in todos">
      <ItemTest :task="todo"></ItemTest>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useTaskStore } from "../../stores/main";
definePageMeta({
  layout: "todos",
});

const taskStore = useTaskStore();

const todos = computed(() => {
  return taskStore.tasks;
});

onMounted(() => {
  taskStore.fetchTodos();
});
</script>

<style scoped></style>
