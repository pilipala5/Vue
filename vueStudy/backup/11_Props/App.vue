<template>
  <!-- html -->
  <Person :list="personList" />
</template>

<script lang="ts" setup name="App">
  // js or ts
  import Person from './components/Person.vue'
  import { ref } from 'vue';
  import { type personsInterface } from './types';

  let personList = ref<personsInterface>([
    {
      name:'zhang san',
      age: 20
    },
    {
      name:'li si',
      age: 20
    },
    {
      name:'wang wu',
      age: 20
    },
  ])
</script>

<style>
/* css */
</style>

