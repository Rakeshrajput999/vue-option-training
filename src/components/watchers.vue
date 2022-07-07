<!--1. allow you to watch any data or computed property
 and execute some code in responce to change the value. 
 example volume tracker create volume increase and decrease -->
<!-- immidiate and  -->

<script>
export default {
    name:"watchers",
    data(){
        return{
           volume:0,
           movie:'raja hindustani',
           movieInfo:{
               title: '',
               actor :'',
           },
           movieList:["dhoom","race"]

        }
    },
    methods:{

    },
    computed:{

    },
    watch:{
        volume(newValue,oldValue){
            if(newValue ===16 &&oldValue<16){
                alert("listening to a high volume for a long time may damage your hearing")
            }
        },
        
        movie:{
            handler(newValue){
             console.log(`calling API With movie name =${newValue}`)
        },
        immediate:true
        },
        movieInfo:{
            handler(newValue){
                console.log(`calling api title = ${newValue.title} and actor ${newValue.actor}`);
            },
            deep:true
        },
        movieList:{
            handler(newValue){
            console.log(`${newValue}`);
        },
        deep:true
        }
    }
}
</script>

<template>
    <div>
        <p>whatsv=cher </p>
        <h1>watchers concept component</h1>
        <br>
        <h2>volume tracker (1-20)</h2>
        <h3>current volume -{{volume}}</h3>
        <button @click="volume += 1">high</button>
        <button @click="volume -= 1">low</button>

    <p>immidiate ,deep watcher</p>
    <input type="text" v-model="movie">
    <input type="text" v-model="movieInfo.title">
    <input type="text" v-model="movieInfo.actor">

    <button @click=" movieList.push('wonder Woman')">add movies</button>



    </div>
</template>

<style scoped>

</style>