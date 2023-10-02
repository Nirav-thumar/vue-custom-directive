
import { createApp } from 'vue'
import App from './App.vue'

// const app = createApp(App)
// global custom directive
// app.directive('font-size',{
//     mounted:(el,binding)=>{
//         console.log("binding : " ,binding);
//         el.style.fontSize = "20px"
//         console.log("el : ",el)
//     },
// })

// using function

const app = createApp(App);
app.directive('font-size',(el,binding)=>{
    console.log("using function method : ",el)
    el.style.fontSize = "40px";
})
app.mount("#app")
