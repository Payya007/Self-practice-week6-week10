//16272936
//027
const Dombackground = document.getElementById("bgColor")
const fontColor = document.getElementById("fontColor")
const fontSize = document.getElementById("fontSize")
const submit =document.getElementById("saveBtn")
const reset = document.getElementById("resetBtn")
submit.addEventListener("click", ()=>{
     document.body.style.backgroundColor=Dombackground.value
     document.body.style.color =fontColor.value
     document.body.style.fontSize = fontSize.value
    localStorage.setItem("bgColor", Dombackground.value);
    localStorage.setItem("fontColor", fontColor.value);
    localStorage.setItem("fontSize", fontSize.value);
})
reset.addEventListener("click", ()=>{
     localStorage.clear();
     location.reload();
})
window.addEventListener("DOMContentLoaded", () => {
    const saveBgcolor =  localStorage.getItem("bgColor")
    const savefontColor = localStorage.getItem("fontColor")
    const savefontSize = localStorage.getItem("fontSize")

    if(saveBgcolor){
         document.body.style.backgroundColor = saveBgcolor
        
    }
    if(savefontColor){
        document.body.style.color = savefontColor
      
    }
    if(savefontSize){
        document.body.style.fontSize = savefontSize
        
    }
})