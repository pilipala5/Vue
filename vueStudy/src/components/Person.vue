<template>
    <div class="person">
        <h2>name : {{ name }}</h2>
        <h2>age : {{ age }}</h2>
        <button @click="changeName">change name</button>
        <button @click="changeAge">change age</button>
        <button @click="showTel">check tel</button>
    </div>
</template>

<script setup lang="ts" name="Person123">
    import { ref } from "vue";
    
    let name = ref('yellow')    // return a RefImpl object
    let age = ref(18)
    let tel = 13888888888

    function changeName(){
        name.value = 'huang'
    }

    function changeAge(){
        age.value += 1
    }

    function showTel(){
        alert(tel)
    }
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