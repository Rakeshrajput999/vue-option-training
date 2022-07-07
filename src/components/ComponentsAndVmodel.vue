<template>
  <div>
      <h1>hello from components and v- model concepts</h1>
      <Input v-model="name"/>
  </div>
</template>

<script>
import Input from './Input.vue'
export default {
    name:"ComponentsAndVmodel",
    components:{
    Input
},
    data(){
        return{
            name: ''

        }
    }

}
</script>

<style>

</style>