<template>
    <h2>i am page1</h2>
    <h1>account:{{ account }}</h1>
    <h1>password: {{ password }}</h1>
</template>

<script setup lang="ts" name="page1">
import { ref } from 'vue';
import { useRoute } from 'vue-router'

let route = useRoute()
let account = route.query.account
let password = route.query.password
</script>