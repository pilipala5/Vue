<template>
    <div class="person">
        <h2>name : {{ person.name }}</h2>
        <h2>age : {{ person.age }}</h2>
        <button @click="changeName">change name</button>
        <button @click="changeAge">change age</button>
    </div>
</template>

<script setup lang="ts" name="Person123">
    import { reactive,  toRef, toRefs } from "vue";

    let person = reactive({
        name: 'yellow',
        age: 18
    })

    let {name, age} = toRefs(person)    // name and age are refImpl object
    let myage = toRef(person, 'age')

    function changeName(){      // passing a pointer? change name and age , person will change as well
        name.value += '~'
    }

    function changeAge(){
        age.value += 1
        console.log('@@', myage.value)
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