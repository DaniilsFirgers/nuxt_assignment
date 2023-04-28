<template>
  <div>
    <div v-if="isLoading">Loading</div>

    <select
      name="urgency"
      id="urgency"
      v-model="selectedTaskUrgency"
      class="border rounded-md pl-1"
      @change="HandleSelectUrgency"
    >
      <option value="all">All</option>
      <option value="very urgent">Very urgent</option>
      <option value="urgent">Urgent</option>
    </select>
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
          id="todo"
          name="todo"
          v-model="newTask.todo"
          placeholder="Type here.."
          class="border rounded-md pl-2 bg-gray"
        />
        <h1 v-if="emptyTodo" class="text-red-500 mx-auto">
          This field is required!
        </h1>
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
  <div class="flex flex-col items-center h-80 overflow-y-auto">
    <div
      v-for="task in getAll"
      class="w-2/5"
      v-if="selectedTaskUrgency === 'all'"
    >
      <ItemTest
        :task="task"
        @onDelete="(id: string) => onDelete(id)"
      ></ItemTest>
    </div>

    <div
      v-for="task in getUrgent"
      class="w-2/5"
      v-if="selectedTaskUrgency === 'urgent'"
    >
      <ItemTest
        :task="task"
        @onDelete="(id: string) => onDelete(id)"
      ></ItemTest>
    </div>
    <div
      v-for="task in getVeryUrgent"
      class="w-2/5"
      v-if="selectedTaskUrgency === 'very urgent'"
    >
      <ItemTest
        :task="task"
        @onDelete="(id: string) => onDelete(id)"
      ></ItemTest>
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

let selectedTaskUrgency = ref<String>("all");
let emptyTodo = ref<Boolean>(false);

definePageMeta({
  layout: "default",
});

const taskStore = useTaskStore();
let { tasks, isDisabled, isLoading, getUrgent, getVeryUrgent, getAll } =
  storeToRefs(taskStore);

function HandleSelectUrgency(e: Event) {
  const urgency = (e.target as HTMLInputElement).value;
  if (urgency === "all") {
    tasks;
  } else if (urgency === "urgent") {
    tasks = getUrgent;
  } else if (urgency === "very urgent") {
    getVeryUrgent;
  }
}

function handleSubmit(e: Event) {
  console.log(newTask.value);
  e.preventDefault();
  if (newTask.value.todo.trim() === "") {
    emptyTodo.value = true;
    return;
  }

  taskStore.addTodo(newTask.value);
  newTask.value.urgency = "";
  newTask.value.todo = "";
  emptyTodo.value = false;
}

function onDelete(id: string) {
  taskStore.deleteTodo(id);
}

taskStore.fetchTodos();
</script>

<style scoped></style>
