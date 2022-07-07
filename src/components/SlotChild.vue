<template>
  <div>
    <h1>hello from  child  slot {{data}} </h1>
    <slot></slot>
    <slot :text="hello" name="slotProps"></slot>

  </div>
</template>

<script>
export default {
    name:"SlotChild",
data(){
    return {

    }
},
computed:{},
method:{},
props:{
  data:String
},
watch:{},

}
</script>

<style>

</style>