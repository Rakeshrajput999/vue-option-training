<script >
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
import ComponentsConcept from "./components/ComponentsConcept.vue";
import ArticleForComponent from "./components/ArticleForComponent.vue"
import NonPropAtttiribute from "./components/NonPropAtttiribute.vue";
import ProvideInject from "./components/ProvideInject.vue";
import CostomComponentEvents from "./components/CostomComponentEvents.vue";
import ComponentsAndVmodel from "./components/ComponentsAndVmodel.vue";
import NonPropsDataVue from "./components/NonPropsData.vue";
import SlotsParantVue from "./components/SlotParant.vue";
import DynamicComponentsVue from "./components/DynamicComponents.vue";
import LifeCycleMethodVue from "./components/LifeCycleMethod.vue";
import Routing from './components/Routing.vue';
import AxiosEmplementationVue from "./components/AxiosEmplementation.vue";
// if we not use satup word in script tag we have need to use this 
// piece of code
export default{
	name: "App",
	components:{
	Hello,
    ComponentsConcept,
    ArticleForComponent,
    NonPropAtttiribute,
    ProvideInject,
    CostomComponentEvents,
    ComponentsAndVmodel,
    NonPropsDataVue,
    SlotsParantVue,
    DynamicComponentsVue,
    LifeCycleMethodVue,
    Routing,
    AxiosEmplementationVue
	
},
	data(){
		return {
			name: "shahrukh khan",
		    heroname:"flash"
			   }
	},
	// provide:{
		// 	// userName:"rakesh"
	// 	// userName: this.name give error
	// },
		provide(){return{
			userName: this.name 

		}
		
	}
} 


</script>

<template>
	<routing/>
	<div :id="'disply'">
<div>
	<!-- <LifeCycleMethodVue/> -->
	<ComponentsConcept name ='rohan ' heroname='saktiman'/>
	<ComponentsConcept name ='rajveer ' heroname='hatim'/>
	<ComponentsConcept name ='raviraj ' heroname ='juniorji'/>
	<ComponentsConcept :name ='name ' :heroname ='heroname'/>
	<AxiosEmplementationVue/>
	<DynamicComponentsVue/>
	<SlotsParantVue/>
	<NonPropsDataVue data="some data" id="user"/>
	<ComponentsAndVmodel/>
	<CostomComponentEvents/>
	<ProvideInject/>
	<NonPropAtttiribute id="myNonAttr"/>
	<ArticleForComponent title="Article Title" likes=30 />
	<watchers/>
	<ComputedProperties/>
	<modifiers/>
	<FormHandling/>
	<EventHandling/>
    <MethodInVue/>
	<ConditionalListRendaring/>
	<ListRendering/>
	<ConditionRandering/>
	<Hello/>
</div>


</div>
</template>

<style>
@import './assets/base.css';

*{
	padding-left:4px;
}

#disply{display:none;}
</style>
