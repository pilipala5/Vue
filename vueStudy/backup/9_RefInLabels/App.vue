<template>
  <!-- html -->
  <Person ref="a"/>
  <button @click="showInfo">show info</button>
</template>

<script lang="ts" setup name="App">
  // js or ts
  import Person from './components/Person.vue'
  import { ref } from 'vue';

  // Get components
  let a = ref()

  function showInfo(){
    console.log(a.value)
  }
</script>

<style>
/* css */
</style>

