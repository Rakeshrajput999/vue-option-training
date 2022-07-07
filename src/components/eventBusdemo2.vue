
<template>
  <div class="component2">
    <button @click="count">Click</button>
  </div>
</template>
  
<script>
  import  EventBus  from '../EventBus'; 

  export default {
    name: "Component2",
    data() {
      return {
        nclick : 0,
      };
    },
    methods: {
      count() {
        this.nclick += 1;
        // Emitting a custom-event via the Event Bus
        EventBus.$emit("change_n", this.nclick);
      },
    },
  }
</script>
  
<style scoped>
  .component2 {
    display: block;
    background-color: grey;
    height: 15em;
    text-align: center;
    padding-top: 5em;
  }
  </style>
