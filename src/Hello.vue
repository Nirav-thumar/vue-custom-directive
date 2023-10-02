<template>
    <div>Hello Normal font</div>

<!-- 1) custom directive 1 -->
    <!-- <div v-font-size>Hello from custom directive</div> -->

<!--2)  passing value to custom directive 2-->
    <!-- <div v-font-size="60">Hello from custom directive</div> -->

<!-- 3) passing value to custom directive  -->
    <!--  <div v-font-size="fontSize">Hello from custom directive</div>
    <button @click = "fontSize +=10 ">increase font size</button> -->

 <!-- 4) passing argument to custom directive (argument v-font-size:small here small is argument which is given after colon) -->
    <!-- <div v-font-size:default1>default font size</div>
    <div v-font-size:small>small font size</div>
    <div v-font-size:medium>medium font size</div>
    <div v-font-size:large>large font size</div> -->

<!-- 5) passing modifier to custom directive (modifier v-font-size.samll here small is modifiers) -->
    <!-- <div v-font-size.default1>default font size</div>
    <div v-font-size.small>small font size</div>
    <div v-font-size.medium>medium font size</div>
    <div v-font-size.large>large font size</div>
    <div v-font-size.blue >blue modifiers</div>
    <div v-font-size.large.blue >blue and large modifiers</div> -->


<!-- 6) function shortHand  execute on  onmounted and onUpdated -->
<!-- <div v-font-size>function short Hand</div> -->


<!-- 7) using global function directive in main  js added -->
<div v-font-size>global funtion directive</div>

</template>
 
 
<script setup>
 
import { ref, reactive, computed  } from 'vue'
 
//1)  custom directive 

// const vFontSize = {
//     mounted : (el,binding)=>{
//         console.log("el",el)
//         console.log("binding",binding)
//         el.style.fontSize = "30px";
//     },
// }

//2) passing value to custom directive  get into 
// binding.value

// const vFontSize = {
//     mounted : (el,binding)=>{
//         console.log("el",el)
//         console.log("binding value",binding.value)
//         el.style.fontSize = binding.value + "px";
//     },
// }

//3) passing ref to custom directive get into 
// binding.value

// const fontSize = ref(10);
// const vFontSize = {
//     mounted: (el,binding)=>{
//         el.style.fontSize = binding.value + 'px'; 
//         console.log('mounted binding value',binding.value);
//     },
//     updated: (el,binding)=>{
//         el.style.fontSize = binding.value + 'px'; 
//         console.log('updated binding value',binding.value);
//     }
// } 


// 4) passing argument to custom directive (argument v-font-size:small here small is argument which is given after colon)
// get into binding.arg
// const vFontSize = {
//     mounted : (el,binding)=>{
//             console.log("args : ",binding.arg)
//             let size = 0;

//             switch(binding.arg){
//                 case "small" : 
//                 size = 10 
//                 break;  
//                 case "medium" : 
//                 size = 20
//                 break;  
//                 case "large" : 
//                 size = 30
//                 break;                
//                 default :
//                 size = 12
//                 }

//                  el.style.fontSize = size + "px"; 
//     }
// }

//  5) passing modifier to custom directive 
// get into binding.modifiers

// const vFontSize = {
//     mounted : (el,binding)=>{
//             console.log("binding modifiers : ",binding.modifiers)
//             let size = 0;

//             if(binding.modifiers.small){
//                 size = 10
//             }
//             else if(binding.modifiers.medium ){
//                 size = 20
//             }
//             else if(binding.modifiers.large){
//                 size = 30
//             }
//             else{
//                 size = 12
//             }

//             el.style.fontSize = size + "px"; 

//             if(binding.modifiers.blue){
//                 el.style.color= "blue"
//             }
//     }
// }

// 6) function shortHand  execute on  onmounted and onUpdated
// const vFontSize = (el,binding) =>{
//             el.style.color = "red";
//             el.style.fontSize = "20px"    

// }



</script>
 
<style scoped>
 
</style>