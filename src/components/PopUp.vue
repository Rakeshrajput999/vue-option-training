<template>
  <div>
      <h1>hello from popUp</h1>
      <p></p>
      <input type="text" v-model="name"/>
      <button @click="$emit('close',name)">close POPUp</button>
  </div>
</template>

<script>
export default {
    name:"PopUp",
    // emits:['close'],
    emits:{
         close:(name)=>{
             if(!name){
                 return false
             }
             else{
                 return true
             }
         }
    },
    data(){
        return{
            name: '',
        }
    }


}
</script>

<style>

</style>