import { defineStore } from "pinia";
import axios from "axios";

export const useTaskStore = defineStore("taskStore", {
  state: () => ({
    tasks: [],
  }),
  getters: {
    getTodos(state) {
      return state.tasks;
    },
  },
  actions: {
    async fetchTodos() {
      const res = await axios.get("api/todos");
      this.tasks = res.data;
    },
  },
});
