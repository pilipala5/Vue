<template>
    <div class="person">
        <button @click="addDog">add a dog</button>
        <hr>
        <img v-for="dog in dogs" :src="dog" alt="">
    </div>
</template>

<script setup lang="ts" name="Person">
    import useDogs from '@/hooks/useDogs'

    let {dogs, addDog} = useDogs()
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

img {
    height: 100px;
    margin-right: 10px;
}
</style>