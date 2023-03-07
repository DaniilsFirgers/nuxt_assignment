import { defineStore } from "pinia";

type TaskStore = {
  tasks: any[] | null | { [key: string]: string };
  isLoading: boolean;
  isDisabled: boolean;
};
type Getters = {
  getUrgent: (state: any) => { todo: string; urgency: string }[];
};
type Actions = {
  fetchTodos: () => Promise<void>;
  addTodo: (task: any) => Promise<void>;
};
export const useTaskStore = defineStore<string, TaskStore, Getters, Actions>(
  "taskStore",
  {
    state: () => ({
      tasks: [],
      isLoading: false,
      isDisabled: false,
    }),
    getters: {
      getUrgent: (state) =>
        (state.tasks as { todo: string; urgency: string }[]).filter(
          (task) => task.urgency === "urgent"
        ),
    },
    actions: {
      async fetchTodos() {
        this.isLoading = true;
        try {
          const res = await useFetch("/api/todos");
          this.tasks = res.data.value;
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
          await useFetch("api/todos", {
            headers: { "Content-type": "application/json" },
            method: "POST",
            body: JSON.stringify(task),
          });

          await this.fetchTodos();
        } catch (err) {
          console.log(err);
        } finally {
          this.isDisabled = false;
          this.isLoading = false;
        }
      },
    },
  }
);
