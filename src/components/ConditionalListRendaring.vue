<script>
export default {
    name:"ConditionalListRendaring",
    data(){
        return{
          nums:[1,2,3,4,5,6,7,8,9]
        }
    },

}
</script>
<!-- v-if has higher priority than v-for so it through some error whel 
we use it with in a single tag 
to resolve this issue we have 
two optioin 
i computed
second we can use a tag inside -->
<template>
    <div>
        <h1>coditional list rendaring</h1>
        <div v-for="num of nums" :key="num">
        <h5 v-if="num>5">{{num}}</h5></div>
    </div>



</template>

<style scoped>

</style>