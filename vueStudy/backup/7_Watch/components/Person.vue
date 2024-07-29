<template>
    <div class="person">
       <h1>Watch basic data</h1>
       <h2>test1 : {{ test1 }} <button @click="addTest1">add 1</button></h2> 

       <hr>

       <h1>Watch object data defined by reactive</h1>
       <h2>name : {{ test2.name }}</h2>
       <h2>age : {{ test2.age }}</h2>
       <button @click="changeName">change name</button>
       <button @click="changeAge">change age</button>

       <hr>

       <h1>Watch object data defined by ref</h1>
       <h2>name : {{ test3.name }}</h2>
       <h2>age : {{ test3.age }}</h2>
       <button @click="changeName3">change name</button>
       <button @click="changeAge3">change age</button>

       <hr>
       <h1>Watch attribute of data</h1>
       <h2>name : {{ test5.name }}</h2>
       <button @click="changeName5">change name</button>
    </div>
</template>

<script setup lang="ts">
    import { ref, reactive, watch} from 'vue'

    let test1 = ref(1)
    let test2 = reactive({
        name: 'lbj',
        age: 38
    })
    let test3 = ref({
        name: 'lbj',
        age: 38
    })

    let test5 = ref({
        name:'lbj',
        family:{
            son1:'brone',
            son2:'braice',
        }
    })

    let stopWatchTest1 = watch(test1, (newValue, oldValue) => {
        console.log('test1 changed', newValue, oldValue)
        if(test1.value > 10)
        {
            alert('stop watch')
            stopWatchTest1()
        }
    })

    // in test2 & test3, we can alse change the whole object  (reactice -> object.assign)
    watch(test2, (newValue, oldValue) => {      // open deep watching by default, watch the address of data
        console.log('test2 changed', newValue, oldValue)
    })

    watch(test3, (newValue, oldValue) => {      // close deep watching by default, watch the address of data
        console.log('test3 changed', newValue, oldValue)
    }, {deep:true, immediate:true})

    watch(()=>test5.value.name, (newValue, oldValue)=>{
        console.log('test5 changed', newValue, oldValue)
    })

    function addTest1(){
        test1.value += 1
    }

    function changeName()
    {
        test2.name += '~'
    }

    function changeAge()
    {
        test2.age += 1
    }

    function changeName3()
    {
        test3.value.name += '~'
    }

    function changeAge3()
    {
        test3.value.age += 1
    }

    function changeName5()
    {
        test5.value.name += '~'
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