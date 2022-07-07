<!-- capture user input 
inputs
Text Area 
single select dropdown control 
multi select 
 checkbox 
 checkbox group
 radio -->
<script>
export default{
    name:"FormHandling",
    data(){
        return {
            formvalues:{
                name:"",
                profileSummery:"",
                country:"",
                joblocation:[],
                remotework: false,
                health:"no",
                skillset:[],
                yearsofexperience:''

            }
             
        }
    },
      methods:{
          submitForm(event){
              event.preventDefault()
              console.log("event",this.formvalues);

          }

      }
}
</script>

<template>
 <div>
  <h1> hello from form handling</h1>
  <div><pre>{{JSON.stringify(formvalues,null,1)}}</pre></div>
<form action="" @submit="submitForm">
    <label for="">name</label>
    <div>
        <input type="text" id="" v-model="formvalues.name">
    </div>
    <label for="profileSummery">Profile Summery:</label>
    <div>
         <textarea name="profileSummery" id="p-summery" spellcheck="true" cols="30" rows="10" v-model="formvalues.profileSummery"></textarea>
    </div>
    <!-- select with single option -->
    <label for="country">coutry</label>
    <div>
        <select name="country" id="select" v-model="formvalues.country">
            <option value="" disabled>select a country</option>
            <option value="india">india</option>
            <option value="australia" selected>australia</option>
            <option value="bangladesh">bangladesh</option>
        </select>
    </div>
   <!-- select with multiple option -->
   <label for="joblocation">Job Location</label>
 <div>
    <select name="joblocation" id="select" multiple v-model="formvalues.joblocation">
        <option value="" disabled>select a country</option>
        <option value="india">india</option>
        <option value="australia" selected>australia</option>
        <option value="bangladesh">bangladesh</option>
    </select>
  </div>
<!-- single checkbox Form Control  -->
<div >
    <label for="remoteWork">Remote Work </label>
   <input type="checkbox" name="remoteWork" id="" v-model="formvalues.remotework"/>
</div>
<div >
    <label for="remoteWork">healthy </label>
   <input type="checkbox" name="remoteWork" id="" true-value="yes" false-value="no" v-model="formvalues.health"/>
</div>

<!-- multiple checkbox form control -->
    <label for="skills">Skill Sets</label>
<div>
    <input type="checkbox" name="html" id="html" value="html" v-model="formvalues.skillset">
    <label for="html">html</label>
    <br>
    <input type="checkbox" name="css" id="html" value="css" v-model="formvalues.skillset">
    <label for="html">css</label>
    <br>
    <input type="checkbox" name="javascript" id="html" value="javascript" v-model="formvalues.skillset">
    <label for="html">javscript</label>

</div>
    <button type="submit">Submit</button>
</form>

</div>
</template>

<style scoped>

</style>