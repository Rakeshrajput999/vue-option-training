<template>
  <div>
    <h1>article section</h1>
    <h3> title :{{title}}</h3>
    <h6>likes :{{likes}}</h6>
  </div>
</template>

<script>
export default {
    name:"ArticleForComponent",
    props:{
      // title:String,
      title: {
        type:String,
        required:true,
        default:"article default value rander"
      },

      likes:Number
    }

}
</script>

<style>

</style>