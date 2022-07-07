<template>
  <div>
    <h1> hello from non_Props data </h1>
    <p>note: props and non props data:
        props:dynamic,need to type define 
        non-props: static no need to define type

         </p>
         <h4>---currently the id is bind with main div  <br/>if we remove the div the id is not bind with any one to bind it with any element <br/>
         we use v-bind ="$attrs" </h4>
         <h4>---a attribute is implimented on parant as well as child <br>
         to deal with in script we add inharitAttrs:false</h4>


         <h1 v-bind ="$attrs">Peter</h1>
         <h1>Rakesh</h1>
         <h1>Anil</h1>
         <h2>{{data}}dddd</h2>
         



  </div>
</template>

<script>
export default {
name:"NonPropsData",
props:{
    data:String
},
data(){
   return {
    
   }
},
inheritAttrs:false,
method:{},
computed:{}
}
</script>

<style scoped>

</style>