<script>
export default {
    name:"MethodInVue",
    setup() {
        
    },
    data(){
        return{
           basMultiplier:5
        }
    },
    // methods is a pre diefined object which contain funcion for template
    methods:{          
        //   multiply:(num)=>{
        //          return num * this.basMultiplier
        //          },
        // this willcause error be couse this not works with arrow func
        // tion

           add:(...num)=>{
                return num.reduce((acc,n)=>{
                   return acc+n
               },0)
           },
           multiply(num){
                 return num * this.basMultiplier
                 },


    }
}
</script>

<template>
    <div>
        <h1>hello from method in vue</h1>
        <h1>{{6+3+5}}</h1>
        <h2>add method -{{add(1,2,3,4,5,6,6,7)}}</h2>
        <h2>add method -{{add(1,2,0,6,6,7)}}</h2>
        <h2>add method -{{add(1,2,0,6,3,4,5,6,7)}}</h2>
        <h4>multiply method -{{multiply(5)}}</h4>
        

    </div>
</template>