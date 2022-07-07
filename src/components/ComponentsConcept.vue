<!-- simmilar to react and angular vue also follow the component based architecture 
 -->

 <!-- 
what type of particular components

  -->
<script>
   export default {
       name:"ComponentsConcepts",
    //    props:['name','heroname'],
       props:{
        name:String,
        heroname:String
       },
       data(){
           return {

           }
       }
   }
</script>

<template>
    <div>
        <h1>Component concept and Props </h1>
        <h3>hello {{name}} aka {{heroname}}</h3>
        <h3 v-html="'<b>hello</b>'"></h3>
    
    </div>
</template>

<style scoped>

</style>

