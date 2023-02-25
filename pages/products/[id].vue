<template>
  <div>
    <p>product details for {{ id }}</p>
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto eos totam
      repudiandae corrupti soluta quisquam, laborum sequi ratione iste
      dignissimos eum maiores nobis vel reiciendis. Sapiente vel amet id atque.
    </p>
  </div>
</template>

<script setup lang="ts">
const { id } = useRoute().params;
</script>

<style scoped></style>
