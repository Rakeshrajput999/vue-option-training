<template>
  <div>hello from vue axios implementation 
    <ul v-for="item in list" :key="item.id"><li>{{item.id}}</li>
    <li>{{item.title}}</li></ul>
    
    <h1>post method</h1>
    <input type="text" v-model="email">
    <input type="number" v-model="password">
    <button @click="addUser()">add user</button>
  </div>
</template>

<script>
import axios from "axios"
export default {
     name:"AxiosEmplementation",
     data(){
        return {
            list :[],
            email:"",
            password :""

        }
     },
     async created(){
        let result = await axios.get("https://fakestoreapi.com/products")
        console.warn(result.data)
        this.list= result.data
     },
     methods:{
       addUser(){
        console.log(this.email,this.password)
       }

     }
}
</script>

<style>

</style>