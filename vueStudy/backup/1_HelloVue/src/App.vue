<template>
  <!-- html -->
  <div class="app">
    <h1>Hello Vue3!</h1>
    <Person/>
  </div>
</template>

<script lang="ts">
// js or ts
import Person from './components/Person.vue'

export default {
  name:'App',
  components: {Person}   // register the components
}
</script>

<style>
/* css */
.app  {
  box-shadow: 0 0 10px;
  border-radius: 10px;
  background-color: #ddd;
  padding: 20px;
}
</style>

