<template>
<div id="root" ref="root">
    <h1 >this is hai wen compnents{{msg}}</h1>   
    <button @click="chilema">chifanxiaohua</button>
    <p v-if="eat">chibaole</p>
    <p v-else>meichibao</p>
    <p>{{eat}}</p>
</div>

</template>

<script>
import {reactive, ref,onMounted} from 'vue'
export default {
    setup(){
        

        onMounted(() => {
            console.log("组件mounted 成功")
             console.log(root.value.tagName)
            console.log(root.value.innerText)
            console.log(root.value.innerHTML)
        })
        console.log("this is before mounted...")
        let msg="hello haiwen"
        let eat=ref(false)
        const root=ref(null)
        const person =reactive({
                name:"adam",
                age:19}) 
           
        function chilema(){
            // this.eat=!this.eat
            eat.value=!eat.value
            
           
            console.log(eat.value)
            console.log(person.name)
            console.log(person.age)
        }

        return{
            msg,
            eat,
            chilema,
            root,
        }
    }
}
</script>