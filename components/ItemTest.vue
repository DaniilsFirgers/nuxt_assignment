<template>
  <div class="border radius-lg norder-green-700">
    <div class="m-3">
      <h2>Urgency: {{ task.urgency }}</h2>
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
