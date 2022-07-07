<template>
  <div>

      <h1>dynamic component in detail </h1>
    <button @click="tab='HellVue'">load hello</button>
    <button @click="tab='ArticleForComponentVue'">load article</button>
   
   <component :is="tab"/>


  </div>
</template>

<script>
import ArticleForComponentVue from './ArticleForComponent.vue'
import HellVue from './Hell.vue';
export default {
    name: "DynamicComponent",
    data() {
        return {
            tab:"hellVue"
        };
    },
    components: { ArticleForComponentVue, HellVue }
}
</script>

<style>

</style>