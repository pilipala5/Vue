<template>
    <div class="person">
        <ul>
            <li v-for="person in list">{{ person.name }} -- {{ person.age }}</li>
            <li v-for="p in x.list">{{ p.name }} -- {{ p.age }}</li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import type { personsInterface } from '@/types';

    let x = defineProps(['list'])
    console.log(x.list[0])

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