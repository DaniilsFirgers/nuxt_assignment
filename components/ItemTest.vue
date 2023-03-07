<template>
  <div
    class="bg-gray-200/90 border rounded-lg border-green-700 mb-2 hover:shadow-md hover:shadow-gray-400"
  >
    <div class="m-3">
      <h2 v-if="task.urgency.toLocaleLowerCase() === 'very urgent'">
        This task is <b>{{ task.urgency.toLocaleLowerCase() }}</b>
      </h2>
      <h2 v-else>This task is {{ task.urgency.toLocaleLowerCase() }}</h2>
      <h1>{{ task.todo }}</h1>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  task: { id: string; todo: string; urgency: string };
}>();
</script>

<style scoped></style>
