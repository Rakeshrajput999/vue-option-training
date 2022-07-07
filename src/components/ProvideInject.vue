<template>
  <div>
      <h1>provide and inject api in vue</h1>
      <p> the two api provide a way to pass data through the components <br>tree without having to pass down props manually at every level</p>
      <h3>{{userName}}</h3>
  </div>
</template>

<script>
export default {
    name:"ProvideInject",
    inject:['userName']

}
</script>

<style>

</style>