<template>
    <div class="person">
        <h2>name : {{ name }}</h2>
        <h2>age : {{ age }}</h2>
        <button @click="changeName">change name</button>
        <button @click="changeAge">change age</button>
        <button @click="showTel">check tel</button>
    </div>
</template>

<script lang="ts">
export default{
    name:"Person",
    data(){
        return {
            name: "yellow",
            age: 21,
            tel: "12344444"
        }
    },
    methods:{
        showTel(){
            alert(this.tel)
        },
        changeName(){
            this.name = "huang"
        },
        changeAge(){
            this.age += 1
        }
    }
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