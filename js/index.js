
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
function changetext(){document.getElementById("jss").textContent="The seeds of the Coffea plant's fruits are separated to produce unroasted green coffee beans. The beans are roasted and then ground into fine particles typically steeped in hot water before being filtered out, producing a cup of coffee. It is usually served hot, although chilled or iced coffee is common. Coffee can be prepared and presented in a variety of ways (e.g., espresso, French press, caffè latte, or already-brewed canned coffee). Sugar, sugar substitutes, milk, and cream are often added to mask the bitter taste or enhance the flavor.e"}
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
        navbar.style.backgroundColor='#0e191dbd'
    }else{navbar.style.backgroundColor="transparent"}
}

function contact(event){
    event.preventDefault()
    const fullname=document.getElementById('FullName').value
    const email=document.getElementById('email').value
    const date=document.getElementById('date').value
    const phonenumber=document.getElementById('tel').value
    const time=document.getElementById('time').value
    console.log(fullname)
    console.log(email)
    console.log(date)
    console.log(phonenumber)
    console.log(time)
    if(fullname== ''&& email==''&& date==''&& time==''&& phonenumber==''){
        document.getElementById("sms").textContent="Ploteso fushat"
        document.getElementById("sms").style.backgroundColor="#8a1c1e57"
    }else{
        document.getElementById("sms").textContent="Mesazhi u derguar"
        document.getElementById("sms").style.backgroundColor="#1c8a4457"
    }
}


$(
    document
).ready(function(){
$('.fa-equals').on('click',function(){
    $('.nav').toggle()
})
})