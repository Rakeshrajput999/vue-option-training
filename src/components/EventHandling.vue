<script>
export default {
    name:"EventHandling",
    data (){
        return {
            name:"rakesh",
            count:0
        }

    },
    methods:{
        hello(){
            alert("hello Developer")
        },

        increment(event){
            this.count++
            console.log(event)
        },
    decrement(){
            this.count--
        },
        changeName(dname ,event){
            this.name=dname
            console.log(dname,event)
            
        }
    }
}
</script>

<template>
 <div>
   <h1>hello from Event handling</h1>
   <h1>{{name}} {{count}}</h1>
   <div>
        <p></p>
        <button @click="hello()">alert hello</button>
       <button v-on:click="changeName('rohan',$event)">change name</button>
       <div><button @click="count++">+</button> {{ count }} <button @click="count--">-</button></div>
       <div><button @click="increment">+</button> {{ count }} <button @click="decrement">-</button></div>

       <!--  -->
   </div>
 </div>
</template>

<style scoped>

</style>