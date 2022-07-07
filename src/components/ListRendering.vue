<script>
export default {
	name:"ListRendering",
	data(){
		return{
      parentMessage: 'Parent',
      numbers: [1, 2, 3, 4, 5],
      items: [
        { message: 'Foo' }, 
        { message: 'Bar' }],
      names:['bruce',"clerk","Diana"],

      FullName:[
        {first:"Bruce",last:"Wayde"},
        {first:"clark",last:"kent"},
        {first:"Princess",last:"diana"}
      ],

      actors:[
        {name:"ritik",movies:["krish","koi mil gya"]},
        {name:"sahrukh",movies:["kabhi khushi kabhi gum","fan"]},
        {name:"salman",movies:["veer","ready"]},
      ]
		}
	},
  computed: {
    evenNumbers() {
      return this.numbers.filter(n => n % 2 === 0)
    }
  }



}
</script>

<template>
<div>
	<h1>LIST RENDERING</h1>
  <!-- we going to use v-for directive with 
  arrayof objects
  arrayof arrays
  block of html
  object key value pairs
   -->
   <!-- on array -->
<h2 v-for="(name,index) in names" :key="index">{{index+1}} .{{name}} </h2>
<!-- on object  -->
<h3 v-for ="({first,last},index) in FullName" :key="index">{{index+1}}.{{first}} {{last}}</h3>

<!-- on arrays of array -->
<div v-for="(actor,index) in actors" :key="index" >
<h1>{{actor.name}} works on movies {{actor.movies[0]}} and {{actor.movies[1]}} .</h1>
</div>
<!-- socond approach -->
<div v-for="(actor,index) in actors" :key="index" >
<h1>{{actor.name}} works on movies <div v-for="(movie,index) in actor.movies" :key="index">{{movie}}</div>.</h1>
</div>

<ol>
  <li v-for="(item, index) in items" :key="index">
  {{ names[index] }} - {{ index }} - {{ item.message }}
</li>
</ol>
	<!-- v-for with range  -->
  <span v-for="n in 10" :key="n">{{ n }}</span>

  <li v-for="n in evenNumbers" :key="n">{{ n }}</li>
</div>
</template>

<style scoped>
*{padding-left:30px;}
</style>