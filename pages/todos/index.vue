<template>
  <div>
    <!-- <form submit|prevent>
      <label for="urgency">Urgency</label><br />
      <input type="text" id="fname" name="urgency" value="urgent" /><br />
      <label for="todo">Todo</label><br />
      <input
        type="text"
        id="ur"
        name="todo"
        value="Do the laundry"
      /><br /><br />
      <button
        @click="taskStore.addTodo({ urgency: 'urgent', todo: 'feed the cat' })"
      >
        Add
      </button>
    </form> -->
    <button
      @click="taskStore.addTodo({ urgency: 'urgent', todo: 'feed the dog' })"
    >
      Add
    </button>
  </div>
  <div class="task-list">
    <div v-for="todo in taskStore.tasks">
      <ItemTest :task="todo"></ItemTest>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useTaskStore } from "../../stores/main";
import { storeToRefs } from "pinia";

definePageMeta({
  layout: "todos",
});
const taskStore = useTaskStore();

taskStore.fetchTodos();
</script>

<style scoped></style>
