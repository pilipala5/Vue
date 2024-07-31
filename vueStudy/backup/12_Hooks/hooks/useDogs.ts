import { onMounted, reactive } from "vue";
import axios from "axios";

export default function()
{
    let dogs = reactive([])

    async function addDog(){
        try {
            let respond = await axios.get('https://dog.ceo/api/breed/pembroke/images/random')
            dogs.push(respond.data.message)
        } catch (error) {
            alert(error)
        }
    }

    onMounted(()=>{
        addDog()
    })

    return {dogs, addDog}
}