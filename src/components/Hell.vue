<script>
export default {
	name:"Hello",
	data(){
		return{
			greet:"hello",
			name:"mustache normaly takes info fron data and dispalay here", 
			company:"<h4>v-html binding used to display html content<h4/>",
			headingId:"headingId",
			isDisabled:true,
			status:"danger",
			ispromoted:true,
			isSoldout: true,
			hightlightcolor:"#fff000",
			headerSize: "30px",
			headerStyleobject:{
				color:'orange',
				fontSize:'60px',
				border:'2px solid black',
				display:'flex',
				justifyContent:'center',
				alingItem:'center'
			}
		}
  }
}
</script>

<template>
	<div>
		<h1 v-bind:id="headingId">basics about</h1>
		<!-- mussatache syntex -->
		<h1>{{greet}} {{name}}</h1>
		<!-- diretive -->
		<h2 v-text="company"></h2>
		<div v-html="company"></div>
		<!-- dynamic arguments -->
		<button v-bind:disabled="isDisabled">uses of v-bind with tag attributes</button>
		<h2 class="underlined">static class</h2>
		<h2 class="underlined" v-bind:class="status">dynamic class</h2>
		<!-- dynamic event  -->
		<button @click="ispromoted=!ispromoted">changes ispromoted bbolean value </button>
		<h2 :class="ispromoted && 'promoted'">dynamic conditional randoring</h2>
		<h2 v-bind:class="isSoldout?'sold-out':'new'">uses of ternary operator with  v bind  </h2>
		<h2 v-bind:class="['new','promoted']">uses of array class binding</h2>
		<button @click="isSoldout=!isSoldout">change style </button>
		<h2 v-bind:class="isSoldout?['new','promoted']:'underlined'">uses of array class wit conditional randoring</h2>
		<h2 v-bind:class="{
			'promoted':ispromoted,
		 ' new':!isSoldout,
		'sold-out':isSoldout
		}">uses of object  class with conditional randoring</h2>
		<h2 v-bind:style="{
			color:hightlightcolor,
			fontSize:headerSize,
			padding:'20px'
		}">inline style and binding</h2>

		<h2 v-bind:style="headerStyleobject">style object in v-bind style</h2>
	</div>
</template>
<style scoped>

#headingId{
	font: 100;
	background: rgb(30, 83, 104);
	color: aliceblue;
}
.underlined{
	border: 4px solid black;
}
.danger{
	color: red;
}
.promoted{
	font-style: italic;
	
}
.new{
	color:green;

}
.sold-out{
	color:orange;
	
}
.highlight{
	color:aqua;}
</style>