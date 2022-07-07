<template>
<div>
  <button @click="show = !show">Toggle</button>
  <Transition>
    <p v-show="show">hello</p>
  </Transition>
</div>  
</template>

<script>
export default {
    name:"transion",
    data(){
        return{
         show: true
        }
    },
    methods:{

    },
    computed:{

    },
    

}
</script>

<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.9s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: .6;
}
.v-enter-to{
  opacity:.2;
}
</style>