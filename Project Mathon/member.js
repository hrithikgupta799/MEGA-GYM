var sumbit=document.getElementById("sumbit-feed")
var pname=document.getElementById("name")
var contact=document.getElementById("contact")
var Email=document.getElementById("Email")
var Age=document.getElementById("Age")
var Gender=document.getElementById("Gender")
var Height=document.getElementById("Height")
var Weight=document.getElementById("Weight")
var Plan=document.getElementById("Plan")
var Amount=document.getElementById("Amount")
var Vaild=document.getElementById("Vaild")

// function display(){
//     var mid=prompt("Enter Your Mobile Number")
//     console.log(mid)
//     if(mid==7020823933){
//     var user=JSON.parse(localStorage.getItem("7020823933"))
//     var i=0
//     if(i<11){
//     pname.innerHTML=user[i]
//     i++
//     contact.innerHTML=user[i]
//     i++
//     Email.innerHTML=user[i]
//     i++
//     Age.innerHTML=user[i]
//     i++
//     Gender.innerHTML=user[i]
//     i++
//     Height.innerHTML=user[i]
//     i++
//     Weight.innerHTML=user[i]
//     i++
//     Plan.innerHTML=user[i]
//     i++
//     Amount.innerHTML=user[i]
//     i++
//     Vaild.innerHTML=user[i]
//     i++
// }}
// else if(mid==8451858173){
//     var user=JSON.parse(localStorage.getItem("8451858173"))
//     var i=0
//     if(i<11){
//     pname.innerHTML=user[i]
//     i++
//     contact.innerHTML=user[i]
//     i++
//     Email.innerHTML=user[i]
//     i++
//     Age.innerHTML=user[i]
//     i++
//     Gender.innerHTML=user[i]
//     i++
//     Height.innerHTML=user[i]
//     i++
//     Weight.innerHTML=user[i]
//     i++
//     Plan.innerHTML=user[i]
//     i++
//     Amount.innerHTML=user[i]
//     i++
//     Vaild.innerHTML=user[i]
//     i++
// }
// }
// else{
//     alert("Invalid Mobile Number")
// }
// }


function display(){
    var mid=prompt("Enter Your Mobile Number")
    console.log(mid)
    var user=JSON.parse(localStorage.getItem("local"))
   
    var sub=user.find((e)=>{
        if(e.mobile==mid){
            return e
        }
        else{
            alert(`Invaild Mobile Number`)
        }
    })
    console.log(sub);

   
    pname.innerHTML=sub.name
    contact.innerHTML=sub.mobile
    Email.innerHTML=sub.email
    Amount.innerHTML=sub.amount
    
    
}



function feedback(){ 
    alert(`You Request has been sumbitted
        We will response you soon`)
}