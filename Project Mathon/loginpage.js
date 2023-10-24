var form=document.querySelector("form")
            var username=document.getElementById("username")
            var password=document.getElementById("password")

            
    // var sub=user.find((e)=>{
    //     if(e.mobile==mid){
    //         return e
    //     }
    // })
    // console.log(sub);

   
    // pname.innerHTML=sub.name
    // contact.innerHTML=sub.mobile
    // Email.innerHTML=sub.email
    // Amount.innerHTML=sub.amount

    var user=JSON.parse(localStorage.getItem("local"))
            var matching=user.find((e)=>{
               return e
            })
            console.log(matching)

            form.addEventListener("submit",(a)=>{
                var flag=0

                if(username.value==""){
                alert("Invalid Username")
                a.preventDefault()
                flag=1
                }
                else if(password.value==""){
                 alert("Invalid Password")
                a.preventDefault()
                flag=1
                }
                else if(username.value==matching.email && password.value==matching.mobile){
                    alert("Login Suscessfully")
                }
                else{
                    alert("Invalid Input")
                a.preventDefault()
                }

            })

//             form.addEventListener("submit",(e)=>{
//                 var flag=false
// for(var i=0;i<3;i++){     
//     console.log(pass[i],user[i])

//                 if(username.value!==user[i]){
//                     alert("Invalid Username")
//                     e.preventDefault()
//                     break;
//                 }
//                 else if(password.value!==pass[i]){
//                     alert("Invalid Password")
//                     e.preventDefault()
//                     break;
//                 }
//                 else(username.value==user[i] && password.value==pass[i])
//                 {
        
//                 }
                
             
//         }
//             })

            var eye=document.querySelector(".fa-regular")
            // console.log(eye)
           eye.addEventListener("click",()=>{
            if(password.type=="password"){
                password.type="text"
            }
            else{
                password.type="password"
            }
            
           })