<template>
  <div>
    <h1>{{ task.todo }}</h1>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  task: { id: string; todo: string; urgency: string };
}>();
</script>

<style scoped></style>
