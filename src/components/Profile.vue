<template>
 <div><h1>hello {{info}}</h1></div>
</template>

<script>
import {useRoute } from 'vue-router'
export default {
    name:'Profile',
      data(){
         return{
           info:""
         }
      },
        mounted(){
        const route =useRoute()
        console.log(route.params.name)
        this.info=route.params.name
        
    }

}
</script>

<style>

</style>