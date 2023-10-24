var username=document.getElementById("username")
var npassword=document.getElementById("npassword")
var cpassword=document.getElementById("cpassword")

var user=localStorage.getItem("username")

function sumbit(){
    var flag=1

    if(username.value!==user){
        alert("Invalid Username")
        flag=0
    }
    else{
        if(npassword.value==cpassword.value){
            localStorage.removeItem("password")
            console.log(localStorage.getItem("password"))
            localStorage.setItem("password",cpassword.value)
            console.log(localStorage.getItem("password"))
        }
        else{
        alert("New Password and Confirm Password should be same")
        flag=0
        }
    }

    if(flag==1){
        alert("Password Change Sucessfully")
    }
}

var eye=document.querySelector(".fa-regular")
            // console.log(eye)
           eye.addEventListener("click",()=>{
            if(npassword.type=="password"){
                npassword.type="text"
            }
            else{
                npassword.type="password"
            }
            
           })