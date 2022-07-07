<!-- diff between computed and method

Methods
They are static functions usually used to react to events which
 happen in the DOM and they accept arguments.
They are incredibly useful for connecting functionality
 to events, or even just creating small parts of logic
 to be reused. You can call a method inside another method,
  they are very versatile!

  They are often used to run a functionality from the DOM.

  Computed properties
They don’t accept arguments and they are very handy for 
composing new data from existing sources, they get dynamic 
values based on other properties.

i is cached it means it will not get  on re rendering when input is changes


 -->

 <!-- computed properti is read only 
 to resolve this issue we create getter setter  -->

<script>
export default{
    name:"ComputedProperties",
    data () {
        return {
            firstName:'bruce',
            lastName :'Wayne',
            items:[
                {id:1,title:"tv",price:100},
                {id:2,title:"phone",price:200},
                {id:3,title:"radio",price:234},
                {id:4,title:"laptop",price:123},
                {id:5,title:"iron",price:321},
            ]
        }

    },
    methods:{
        getTotal(){return this.items.reduce((total,current)=>{
        return total=total+current.price
    },0)},
    changeFullName(){
        return this.getFullName = "rohan kumar"
    }
    },
    computed:{
        

        fullName(){
            return `${this.firstName} ${this.lastname}`
        },
        total(){return this.items.reduce((total,current)=>{
        return total=total+current.price
    },0)},
    expensiveItem(){
        return this.items.filter((item)=>{return(item.price>100)})
    },

    getFullName:{
        get(){
             return `${this.firstName} ${this.lastName}`
        }, 
        set(value){
           const names = value.split(" ")
           this.firstName =names[0]
           this.lastName=names[1]
        },

    }
    },

}
</script>

<template>
    <div>
        <h1>hello from computed  properties</h1>
        <h1>
        {{firstName}} {{lastName}}
    </h1>
    <h1>computed fullName- {{fullName}}</h1>
    <!-- this is not a right approach write login in computed section  -->
    <h1>total cost-{{items.reduce((total,current)=>{
        return total=total+current.price
    },0)}} </h1>
     <h1>computed total cost : {{total}}</h1>
     <h1>method total cost :{{getTotal()}}</h1>
     <button @click="items.push({id:4,item:'drill',price:345})">add item</button>

<p>>>>>condition list rendering and computed</p>
<div v-for="item in items" :key="item.id">
<h1 v-if="item.price>200">{{item.title}}</h1>

</div>
<p>>>>computed way</p>
<h1 v-for="item in expensiveItem" :key="item.id">{{item.title}}</h1>

<p>>>>getter setter in method </p>
<button @click="changeFullName()">click me </button>
<h1>{{getFullName}}</h1>

    </div>
</template>

<style scoped>

</style>