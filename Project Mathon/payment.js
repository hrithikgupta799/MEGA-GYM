
var form=document.querySelector("form")
var namespan=document.getElementById("namespan")
var namein=document.getElementById("namein")
var mobspan=document.getElementById("mobspan")
var mobin=document.getElementById("mobin")
var idspan=document.getElementById("idspan")
var idin=document.getElementById("idin")
var idspan=document.getElementById("cnamespan")
var cnamein=document.getElementById("cnamein")
var cnamespan=document.getElementById("cnamespan")
var numspan=document.getElementById("numspan")
var numin=document.getElementById("numin")
var cvvspan=document.getElementById("cvvspan")
var cvvin=document.getElementById("cvvin")
var expriyin=document.getElementById("expriyin")
var expriyspan=document.getElementById("expriyspan")
var amountin=document.getElementById("amountin")
var amountspan=document.getElementById("amountspan")
var select=document.getElementById("select")
var planspan=document.getElementById("planspan")
var storage=[]
var local=JSON.parse(localStorage.getItem("local"))
var app=(Math.floor(Math.random()*131258528)+9)
console.log(`Your Application:${app} has been Sumbitted 
You will get a Mail Confirm`)
console.log(amountin)

if(local){
    storage=local
}
function sumbit(){
    var regx=/^[a-zA-Z]{2,15}$/
    var regx1=/^[6-9][0-9]{9}$/
    var regx2=/^[0-9]{12}$/
    var regx3=/^[0-9a-zA-Z!@.]{0,30}$/
    var regx4=/^[0-9]{3}$/
    var flag=1

    if(namein.value==""){
        namespan.innerHTML="Please Enter Your Name"
        flag=0
        console.log(flag)
    } 
    else if(regx.test(namein.value)){
    }
    else{
        namespan.innerHTML="Invalid Name"
        flag=0
    }

    if(mobin.value==""){
        mobspan.innerHTML="Please Enter Mobile Number"
        flag=0
    }
    else if(regx1.test(mobin.value)){
    }
    else{
        mobspan.innerHTML="Invalid Mobile"
        flag=0
    }

    if(idin.value==""){
        idspan.innerHTML="Please Enter Email ID"
        flag=0
    }
    else if(regx3.test(idin.value)){
    }
    else{
        idspan.innerHTML="Invalid Email Id"
        flag=0
    }
    if(select.value==""){
        planspan.innerHTML="Please Select Some Plan"
        flag=0
    }
    if(cnamein.value==""){
        cnamespan.innerHTML="Please Enter Card Holder Name"
        flag=0
    } 
    else if(regx.test(cnamein.value)){
    }
    else{
        cnamespan.innerHTML="Invalid Card Holder Name"
        flag=0
    }

    if(numin.value==""){
        numspan.innerHTML="Please Enter Card Number"
        flag=0
    }
    else if(regx2.test(numin.value)){
    }
    else{
        numspan.innerHTML="Invalid Card Number"
    flag=0
    }

    if(cvvin.value==""){
        cvvspan.innerHTML="Please Enter Cvv Number "
     flag=0
    }
    else if(regx4.test(cvvin.value)){
    }
    else{
        cvvspan.innerHTML="Invalid Cvv Number"
       flag=0
    }
    if(amountin.value==""){
        amountspan.innerHTML="Please Enter Amount"
        flag=0
    }
  
    if(flag==1){
        alert(`Your Application:${app} has been Sumbitted 
               You will get a Mail Confirm`)

        var obj={
            name:namein.value,
            mobile:mobin.value,
            email:idin.value,
            amount:amountin.value
        }

        storage.push(obj)
        localStorage.setItem("local",JSON.stringify(storage))
    }
   
}