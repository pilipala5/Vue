<template>
    <div class="person">
        <h2>name : {{ person.name }}</h2>
        <h2>age : {{ person.age }}</h2>
        <button @click="changeName">change name</button>
        <button @click="changeAge">change age</button>
        <button @click="showTel">check tel</button>
        <button @click="changePerson">change person</button>

        <hr>

        <h2>family:</h2>
        <ul>
            <li v-for="f in family">name : {{ f.name }} , relationship: {{ f.relationship }}</li>
        </ul>
    </div>
</template>

<script setup lang="ts" name="Person123">
    import { ref } from "vue";
    
    let person = ref({
        name:'Yellow Huang',
        age:18,
        tel: 13188888888
    })

    let family = ref([
        {
            relationship:'father',
            name:'yellow'
        },
        {
            relationship:'mother',
            name:'red'
        }
    ])
    
    function changeName(){
        person.value.name = 'Yuhan Huang'
    }

    function changeAge(){
        person.value.age += 1
    }

    function showTel(){
        alert(person.value.tel)
    }
    
    function changePerson(){
        person.value = {
            name:'handsome',
            age:20,
            tel:13188888888
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