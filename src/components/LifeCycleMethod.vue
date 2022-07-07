<template>
  <div>
    <h1>hello {{name}}</h1>
  </div>
</template>

<script>
export default {
    name:"LifeCycleMethod",
        data(){
            alert("hello  data")
            return {name:"rakesh",}
    },
    beforeCreate(){
        this.name="rajveer"
        alert("hello beforecreate")
    },
        created(){
            this.name="rohan"
        alert("hello  created")
    },
       beforeMount(){
        alert("hello beforemount",this.$el)
        console.warn("hello beforemount",this.$el);
       },
       mounted(){
        alert("hello mounted",this.$el)
        console.warn("hello mounted",this.$el)
       },
       beforeUpdate(){
        console.log("before Update")

       },
       updated(){
        console.log("updated")
       }
       


}
</script>

<style>

</style>