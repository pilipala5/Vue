<template>
    <div class="person">
      <h2>water temp: {{ temp }}</h2>
      <h2>water height: {{ height }}</h2>
      <button @click="addTemp">add temp</button>
      <button @click="addHeight">add height</button>
    </div>
</template>

<script setup lang="ts">
    import { ref, watchEffect } from 'vue';

    let temp = ref(10)
    let height = ref(10)

    function addTemp(){
        temp.value += 20
    }

    function addHeight(){
        height.value += 20
    }

    // automatically analyze objects under watching, but there are some bug about "||" ?
    watchEffect(()=>{
        if(temp.value >= 50 || height.value >= 50)
        {
            alert('pass message to serve')
        }
    })
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