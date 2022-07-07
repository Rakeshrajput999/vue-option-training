
import { createApp, VueElement } from 'vue'
import App from './App.vue'
import router from "./Routes"


const app=createApp(App)

// vue.filter('Ucase',(value)=>{
//     return value.upperCase()
// })

 
app.directive('font-size',{
    beforeMount: (el,binding) => {
        // when use value from data method 
        // el.style.fontSize = binding.value + "px"

        // 2nd way
        let size =12
        switch(binding.arg) {
            case 'small':
                size =8
                break
            
            case 'large':
                size =50
                break
        }

        
        el.style.fontSize = size +'px'

        if(binding.modifiers.green){
            el.style.color='green'
        }
    },
    updated: (el,binding) => {
        el.style.fontSize = binding.value+"px"
    }
})

app.use(router)
app.mount('#app');
