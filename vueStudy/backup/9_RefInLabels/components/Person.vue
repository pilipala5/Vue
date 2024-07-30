<template>
    <div class="person">
      <h2 ref="title2">my name</h2>
      <h2>my age</h2>
      <button @click="showName">show my name</button>
    </div>
</template>

<script setup lang="ts">
    import { ref } from 'vue';

    // Get Dom in html labels
    let title2 = ref()

    function showName(){
        console.log(title2.value)
    }

    let a = ref(0)
    let b = ref(1)

    // pass data to App.vue
    defineExpose({a, b})
</script>

<style>
.person {
    background-color: skyblue;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
}

button {
    margin: 0 5px;
}
</style>