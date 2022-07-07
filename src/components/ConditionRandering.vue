<script>
export default {
    name:"ConditionalRandering",
    data(){
        return{
          num:5,
          display:true, 
		  showElement:true
        }   
    },
    methods: {
        displayEle() {
            this.showElement= !this.showElement
        }
    }
}
</script>

<template>
    <div>
    <h1 v-bind:id="['heading']">hello from condition rendering</h1>
    <button @click="num++">increment value</button>
    <button @click="num--">decrement value</button>
    <h1 v-if="num<0">the number isless then zero</h1>
    <h1 v-else-if="num==0">the number is zero</h1>
    <h1 v-if="num>0">the number is greater then zero</h1>
    <h1 v-if="num==5">the number is 5</h1>
    <h1 v-if="num>5">greater then 5</h1>
    

    <h1>multiple tag rendoring</h1>
				<!-- use template instead of div tag to wrap multiple tag -->
    <template v-if="display">
    <p>rakesh</p>
    <h1>rohan</h1>
    <h3>ramesh</h3>
    </template>

				<!-- v-show directive it show and hide element based on condition assign to it  -->
				<h2>using v show directive</h2>
                <button @click="displayEle()"> demonstrate v-show</button>
				<h2 v-show="showElement">v show</h2>
				<!-- on inspect section the tag which contain v if will not be their and the tag which contain v-show will be there with dispaly none attiribute -->
				<!-- v-show is best  alternative than v-if mounting and unmounting tags become quit expansive for DOM -->
				<h2 v-if="showElement">v if</h2>

   
    </div>
</template>
<style scoped>
#heading{
    border:solid 4px green;
    font-size: 40px;
    margin-top: 50px;
}
</style>