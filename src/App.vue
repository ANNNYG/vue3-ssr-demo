<template>
  <div class="app">
    <h2>Vue App</h2>
    <div>{{ count }}</div>
    <button @click="addCount">+1</button>
    <div>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";

import { useHomeStore } from "./store/home";

const homeStore = useHomeStore();
const { count } = storeToRefs(homeStore);

function addCount() {
  count.value++;
}
</script>
