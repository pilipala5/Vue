<template>
    account: <input type="text" v-model="account"> <br>
    password: <input type="text" v-model="password">
    <button @click="login">login</button>
</template>

<script lang="ts" setup name="Login">
    import {useRouter} from 'vue-router'
    import { ref } from 'vue';

    let account = ref('')
    let password = ref('')
    let router = useRouter()
    function login(){
        router.push({
            path:'/page1',
            query:{
                account:account.value,
                password:password.value
            },
            
        })
    }
</script>

<style>

</style>