<template>
  <div>
    <div v-if="isLoading">heyyyasdasasd</div>
    <div class="flex justify-center">
      <form
        class="flex flex-col justify-center bg-green-100/95 w-fit border border-green-700 rounded-lg p-3 m-3"
      >
        <label for="urgency" class="text-green-800 mb-1">Urgency</label>
        <select
          name="urgency"
          id="urgency"
          v-model="newTask.urgency"
          class="border rounded-md pl-1"
        >
          <option value="Very urgent">Very urgent</option>
          <option value="Urgent">Urgent</option>
          <option value="Not urgent">Not urgent</option>
        </select>
        <label for="todo" class="text-green-800 my-1">Todo</label>
        <textarea
          type="text"
          id="ur"
          name="todo"
          v-model="newTask.todo"
          class="border rounded-md pl-2 bg-gray"
        />
        <button
          :disabled="isDisabled"
          @click="handleSubmit"
          class="btn bg-green-700 mt-3 w-fit mx-auto hover:bg-green-800 h-fit"
        >
          Add
        </button>
      </form>
    </div>
  </div>
  <div class="flex flex-col items-center h-56 overflow-y-auto">
    <div v-for="task in tasks" class="w-2/5">
      <ItemTest :task="task" @onDelete="(id)=>onDelete(id)"></ItemTest>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useTaskStore } from "../../stores/main";
import { storeToRefs } from "pinia";

let newTask = ref<{ urgency: string; todo: string }>({
  urgency: "Urgent",
  todo: "",
});

definePageMeta({
  layout: "default",
});

const taskStore = useTaskStore();
let { tasks, isDisabled, isLoading } = storeToRefs(taskStore);

function handleSubmit(e: Event) {
  console.log(newTask.value);
  e.preventDefault();

  taskStore.addTodo(newTask.value);
  newTask.value.urgency = "";
  newTask.value.todo = "";
}

function onDelete(id: string){
  taskStore.deleteTodo(id)
}

taskStore.fetchTodos();
</script>

<style scoped></style>
