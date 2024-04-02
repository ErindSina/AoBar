
console.log("hi")
// 
var firstname="erind"
let age=24
const lastname="sina"
// let emri=window.prompt("vendos emrin")
// console.log(emri)
// document.getElementById("java").textContent="pershendetje "+emri+"."
var numer1=24
var numer2="24"
console.log(numer1==numer2) 
function changetext(){document.getElementById("jss").textContent="rgwrfwekfkifiwe"}
document.getElementById("viti").textContent=new Date().getFullYear()


let nr1 = 1
let nr2 =5
if(nr1<nr2){
    console.log(nr1+" me i vogel se "+nr2)
}else if(nr1==nr2){
    console.log(nr1+" e barabarte me "+nr2)
}
else{
    console.log(nr1+" me i madh se "+nr2)
}


var navbar=document.getElementById("navbar")
window.onscroll=function(){
    let windowlength=window.pageYOffset
    console.log(windowlength)
    if(windowlength>200){
        navbar.style.backgroundColor='red'
    }else{navbar.style.backgroundColor="transparent"}
}