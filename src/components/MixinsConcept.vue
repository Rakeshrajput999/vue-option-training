<template>
  <div>
    <h1>mixin Concept</h1>
    <button @click="incrementCount">clicked {{count}} times</button>
  </div>
  <div>
  <!-- <EventBusDemo1/>
  <EventBusdemo2/> -->
  </div>
</template>

<script>
import counterMixin from '../mixins/counter'
// import EventBusDemo1 from './EventBusDemo1.vue'
// import EventBusdemo2 from './eventBusdemo2.vue'
export default {
    name: "MixinsConcept",
    mixins: [counterMixin],
    // components: { EventBusDemo1, EventBusdemo2 }
}

</script>

<style>

</style>