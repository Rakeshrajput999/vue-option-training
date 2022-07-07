<template>
  <div>
    <h1 v-font-size="fontSize">custom diractive </h1>
    <button @click="fontSize *= 2">bigger</button>
    <!-- arguments method  -->
    <p v-font-size:small>small</p>
    <p v-font-size:large>large</p>

    <!-- modifier method -->
    <p v-font-size.green>green </p>

  </div>
</template>

<script>
export default {
    name:"CustomDiractive",
    data(){
        return {
            fontSize:8
        }
    }

}
</script>

<style>

</style>