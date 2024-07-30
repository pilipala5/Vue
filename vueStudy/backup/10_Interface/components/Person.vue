<template>
    <div class="person">
        <h2>name : {{ person.name }}</h2>
        <h2>age : {{ person.age }}</h2>
        <hr>
        <div v-for="p in persons">
            <h2>name : {{ p.name }}</h2>
            <h2>age : {{ p.age }}</h2>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { ref } from 'vue';
    import {type personInterface, type personsInterface} from '@/types'

    let person = ref<personInterface>({
        name:'yellow',
        age:18
    })

    let persons = ref<personsInterface>([    // can also use Array<personInterface>, i think is better
        {
            name:'yel',
            age:18
        },
        {
            name:'low',
            age:19
        }
    ])
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