<template>
  <div>
		<button @click="isActive = !isActive">toggle</button>
   <button @click="classToggle">click me</button>
	 <div :class="{ active: isActive }">hello from class and style binding</div>
		<!-- active and textcolor is a class name -->
		<div
  class="static"
  :class="{ active: isActive, textColor: hasError }"
>to togle buttomn we use computed method</div>
  </div>
</template>

<script>
export default {
    name: "ClassAndStyleBinding",
    data(){
        return{
          isActive: true,
          hasError: false
        }
    },
		methods:{
			classToggle() {
				// if(this.hasError) {
				// 	const is = this.hasError = false
				// 	return is;
				// } else {
				// 	const is = this.hasError = true
				// 	return is;
				// }
				this.hasError = !this.hasError
				return this.hasError
			}
		}

}
</script>

<style>
.active{
	border-bottom:5px solid black ;
}
.textColor{
	color: red;
	font-size: 30px;
}
</style>