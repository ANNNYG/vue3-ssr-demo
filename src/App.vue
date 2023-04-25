<template>
  <div class="app">
    <h2>Vue App</h2>
    <div>{{ count }}</div>
    <button @click="addCount">+1</button>
  </div>
</template>

<script setup>
import { ref } from "vue";

const count = ref(0);
function addCount() {
  count.value++;
}
</script>
