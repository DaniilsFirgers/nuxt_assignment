import { defineStore } from "pinia";
import axios from "axios";

export const useTaskStore = defineStore("taskStore", {
  state: () => ({
    tasks: [],
    isLoading: false,
  }),
  getters: {
    getItems(state) {
      return this.tasks;
    },
  },
  actions: {
    async fetchTodos() {
      this.isLoading = true;
      const res = await axios.get("api/todos");
      this.tasks = res.data;
      this.isLoading = false;
    },
    async addTodo(task: any) {
      this.isLoading = true;
      console.log(task);
      await axios.post("api/todos", task);
    },
  },
});
