import { defineStore } from "pinia";

const useHomeStore = defineStore("home", {
  state: () => ({
    count: 1,
  }),
  actions: {
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    },
  },
});

export { useHomeStore };
