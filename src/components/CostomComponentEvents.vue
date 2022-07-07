<template>
  <div><h1>hello from custom component event</h1>
  <p>pop up example</p>
  <button @click="ShowPopUp=true">show PopUp</button>
  <PopUp v-show="ShowPopUp" @close="closePopUp($event)"/>
  <p>{{value}}</p>

  </div>
</template>

<script>
import PopUp from './PopUp.vue'
export default {
name:"CustomComponentEvent",
components:{
    PopUp
},
data(){
    return{
        ShowPopUp:false,
        value: ''
    }
},
methods:{
    closePopUp(name){
           this.ShowPopUp=false
           this.value= name
           console.log('name',name)
    }
}


}
</script>

<style>

</style>