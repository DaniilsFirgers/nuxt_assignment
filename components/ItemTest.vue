<template>
  <div>
    <h1>{{ task.title }}</h1>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  task: { id: number; title: string; isFav: boolean };
}>();
</script>

<style scoped></style>
