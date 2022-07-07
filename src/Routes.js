import {createWebHistory,createRouter} from 'vue-router'
import Hello from "./components/Hell.vue"
import ConditionRandering from "./components/ConditionRandering.vue";
import ListRendering from "./components/ListRendering.vue";
import ConditionalListRendaring from "./components/ConditionalListRendaring.vue";
import MethodInVue from "./components/MethodInVue.vue";
import EventHandling from "./components/EventHandling.vue";
import FormHandling from "./components/FormHandling.vue";
import Modifiers from "./components/Modifiers.vue";
import ComputedProperties from "@/components/ComputedProperties.vue";
import watchers from "./components/watchers.vue";
import Profile from "./components/Profile.vue"
import PageNotFound from "./components/PageNotFound.vue"
import ClassAndStyleBInding from './components/ClassAndStyleBInding.vue';
import Transion from './components/Transion.vue'
import CustomDiractive from './components/CustomDiractive.vue'
import MixinsConcept from './components/MixinsConcept.vue';
import SlotParant from './components/SlotParant.vue';
import DynamicComponents from './components/DynamicComponents.vue';
import CostomComponentEvents from './components/CostomComponentEvents.vue';
import RefInVue from './components/RefInVue.vue'
const routes =[
    {
        name:'Hello',
        path:"/",
        component: Hello
    },
    {
        name:'Hello',
        path:"/",
        component: Hello
    },
        {
        name:'FormHandling',
        path:"/FormHandling",
        component: FormHandling
    },
     {
        name:'EventHandling',
        path:"/EventHandling",
        component:EventHandling
    },
    {
        name:'CostomComponentEvents',
        path:"/CostomComponentEvents",
        component: CostomComponentEvents
    },
    {
        name: 'DynamicComponents',
        path: "/DynamicComponents",
        component: DynamicComponents
    },
    {
        name:'ClassAndStyleBInding',
        path:"/ClassAndStyleBInding",
        component: ClassAndStyleBInding
    },
    {
        name:'ConditionRandering',
        path:"/ConditionRandering",
        component: ConditionRandering
    },
    {
        name:'ListRendering',
        path:"/ListRendering",
        component: ListRendering
    },
    {
        name:'ConditionalListRendaring',
        path:"/ConditionalListRendaring",
        component:ConditionalListRendaring
    },
    {
        name:'profile',
        path:"/profile/:name",
        component:Profile
    },
    {
        name:'ComputedProperties',
        path:"/ComputedProperties",
        component: ComputedProperties
    },
    {
            name:'Transion',
         path:'/Transion',
         component:Transion
    },
     {
        name:'CustomDiractive',
        path:"/CustomDiractive",
        component:CustomDiractive
    },
        {
        name:'MixinsConcept',
        path:"/MixinsConcept",
        component:MixinsConcept
    },
        {
        name:'SlotParant',
        path:"/SlotParant",
        component:SlotParant
    },





    {
        name:'pageNotFound',
        path:'/:pathMatch(.*)*',
        component:PageNotFound
    }

]



const router =createRouter({
    history:createWebHistory(),
    routes
})


export default router