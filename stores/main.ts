import { defineStore } from "pinia";
import axios from "axios";

export const useTaskStore = defineStore("taskStore", {
  state: () => ({
    tasks: [] as any[],
    isLoading: false,
    isDisabled: false,
  }),
  getters: {
    getUrgent: (state) =>
      state.tasks.filter((task) => task.urgency === "urgent"),
  },
  actions: {
    async fetchTodos() {
      this.isLoading = true;
      try {
        const res1 = await useFetch("/api/todos");
        console.log("res", res1.data.value);

        this.tasks = res1.data.value;
      } catch (err) {
        console.log("error", err);
      } finally {
        this.isLoading = false;
      }
    },
    async addTodo(task: any) {
      this.isDisabled = true;
      this.isLoading = true;
      try {
        await axios.post("api/todos", task);
        await this.fetchTodos();
      } catch (err) {
        console.log(err);
      } finally {
        this.isDisabled = false;
        this.isLoading = false;
      }
    },
  },
});
