<template>
  <div>
      <h1>hello from non prop attribute</h1>
      <p v-bind="$attrs">non prop attribute is an attribute that is <br> passed to a coponents, but does not have a corrosponding <br> proparty defined in the props option</p>
      <p>example : id class and style attributes</p>


  </div>
</template>

<script>
export default {
    name:"NonPropAtttiribute",
    props:[],
    data(){

    },
    inheritAttrs:false,

}
</script>

<style>

</style>