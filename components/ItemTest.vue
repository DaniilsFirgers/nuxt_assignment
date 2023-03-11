<template>
  
  <div
    class="bg-gray-200/90 border rounded-lg border-green-700 mb-2 hover:shadow-md hover:shadow-gray-400 "
  >
    <div class="flex justify-center m-1">
      <h2 v-if="task.urgency.toLocaleLowerCase() === 'very urgent'" class="mx-auto font-sans"> This task is <b>{{ task.urgency.toLocaleLowerCase() }}</b></h2>    
      <h2 v-else class="mx-auto font-sans">This task is {{ task.urgency.toLocaleLowerCase() }}</h2>
    </div>
    <div class="flex flex-row items-center">
      
    <div class="my-3 w-6/12 flex flex-col ml-3">
      
      <h1 class="">{{ task.todo }}</h1>
    </div>
    <div class="my-3 w-6/12 flex mr-3 justify-end">

      <button class="btn bg-red-600 hover:bg-red-700" @click="()=>onDeleteHandle(task._id)">Delete
      </button>
    </div>
  </div>
</div>
</template>

<script setup lang="ts">
import { defineEmits } from 'vue'

const emit = defineEmits<{
  (e: 'onDelete', id: string): void

}>()
defineProps<{
  task: { _id: string; todo: string; urgency: string };

}>();

function onDeleteHandle(id: string){
  emit('onDelete', id)
}
</script>

<style scoped></style>
