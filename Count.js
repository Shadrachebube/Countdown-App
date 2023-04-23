console.log("am a good boy")

let me = document.querySelector(".container")
let ke = document.querySelector(".ebuse")

let gee = 0
 function Man() {
    gee++

if(gee > 14){
    clearInterval(he)
            } 
 ke.innerText = `${gee}%`
 ke.style.opacity = scale(gee, 0, 15, 1, 0)
 me.style.filter = `blur(${scale(gee, 0, 15, 30, 0)}px)`


 }

 let he = setInterval(Man , 1000);






     const scale = (number, inMin, inMax, outMin, outMax) => {
     return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
     }