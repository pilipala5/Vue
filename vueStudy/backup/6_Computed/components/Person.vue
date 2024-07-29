<template>
    <div class="person">
        First Name: <input type="text" v-model:="firstname"> <br>
        Family Name: <input type="text" v-model="familyname"> <br>
        Full Name: <span>{{ fullname }}</span>  <br>
        <button @click="changeFullname">change fullname</button>
    </div>
</template>

<script setup lang="ts">
    import { computed, ref } from 'vue';

    let firstname = ref('lebron')
    let familyname = ref('james')
    let fullname = computed({   // if firstname and familyname don't change, fullname will use cached value
        get(){
            return firstname.value.slice(0, 1).toUpperCase() + firstname.value.slice(1) + '--' +  familyname.value.slice(0, 1).toUpperCase() + familyname.value.slice(1)
        },
        set(val){   // if don't write setter, fullname is readonly
            let [fir, fam] = val.split('--')
            firstname.value = fir
            familyname.value = fam
        }
    })

    function changeFullname(){
        fullname.value = 'yuhan--huang'
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