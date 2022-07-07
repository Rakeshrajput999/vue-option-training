<template>
  <div>
  <div class="link-Div">
  <router-link class="router-link" to="/">Home</router-link>
  <router-link class="router-link" to="/EventHandling">EventHandling</router-link>
  <router-link class="router-link" to="/ComputedProperties">ComputedProperties</router-link>
  <router-link class="router-link" to="/ClassAndStyleBInding">ClassAndStyleBInding</router-link>
  <router-link class="router-link" to="/DynamicComponents">DynamicComponents</router-link>
  <router-link class="router-link" to="/RefInVue">RefInVue</router-link>

  <router-link class="router-link" to="/ConditionRandering">ConditionRandering</router-link>
  <router-link class="router-link" to="/ListRendering">ListRendering</router-link>
  <router-link class="router-link" to="/ConditionalListRendaring">ConditionalListRendaring</router-link>
  <router-link class="router-link" to="/FormHandling">FormHandling</router-link>
  <router-link class="router-link" to="/Profile/rakesh">profile</router-link>
  <router-link class="router-link" to="/Transion">transition</router-link>
  <router-link class="router-link" to="/CustomDiractive">CustomDiractive</router-link>
  <router-link class="router-link" to="/MixinsConcept">MixinsConcept</router-link>
  <router-link class="router-link" to="/SlotParant">SlotParant</router-link>
  <router-link class="router-link" to="/CostomComponentEvents">CostomComponentEvents</router-link>
  


  </div>
  <hr>
  <router-view></router-view>
  </div>
</template>

<script>

export default {
    name:"Routing",
    data(){

    },



}
</script>

<style>
.link-Div{
  border-bottom: 4px solid black;
  overflow-y: scroll;
}
.link-Div .router-link{
  border: 2px solid black;
  margin:2px;
  text-decoration: none;
  font-size: 2em;
  
}

</style>