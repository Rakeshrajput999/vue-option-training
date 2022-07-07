<template>
  <div>
    <h1>hello from  parant slot </h1>

    <SlotChildVue data="to kaise hain aaplog"/>
    <SlotChildVue data="thik hun bhai">
      <template v-slot="slotProps">
      <h1>hello every one hello from slots {{ slotProps.text }}</h1>
      <h1><a href="#" target="_blank" rel="noopener noreferrer">click me </a></h1>
      
      </template>
      </SlotChildVue>
 
  </div>
</template>

<script>
import SlotChildVue from './SlotChild.vue'

export default {
    name: "slotParant",
    data() {
        return {};
    },
    computed: {},
    method: {},
    props: {},
    watch: {},
    components: { SlotChildVue }
}
</script>

<style>

</style>