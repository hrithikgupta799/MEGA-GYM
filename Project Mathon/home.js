var img=document.getElementById("imggallery")
var next=document.getElementById("next")
var back=document.getElementById("back")
// var ans=document.querySelector(".ans")
var que=document.querySelectorAll(".que")
var input=document.getElementById("input")
var pname=document.getElementById("name")
 

var index=0
console.log(input)
var image=[
"./gallery-3.avif",
"./gallery-1.jpg",
"./gallery-4.png",
"./gallery-5.jpeg",
"./gallery-2.jpg",
"./gallery-6.avif",
"./gallery-7.jpg",
"./gallery-8.jpg"]

function auto(){
    index=index+1
    if(index==image.length){
        index=0
    }
    // console.log(index)
    img.src=`${image[index]}`
}
next.addEventListener("click",auto)
back.addEventListener("click",()=>{
    index=(index+1)%image.length
    // console.log(index)
    img.src=`${image[index]}`
})
setInterval(auto,3000)

que.forEach((e)=>{
    e.addEventListener("click",()=>{
      var parent=e.parentElement
      var child=parent.querySelector(".visible")
        
        if(child.classList.contains("ans")){
    child.classList.remove("ans")}
    else{
        child.classList.add("ans")
    }
    })
})

function first(){
    input.innerHTML="It's a very nice gym with world top class equipment of Life fitness and Hammer Strength, and people surrounding is also good, and staff of this branch is very kind, they help members very well and all the trainers are certified with good knowledge of teaching as well. Good place to achieve your goals."
    pname.innerHTML="- Mayur Abnave"
}
function second(){
    input.innerHTML="Hands down, best choice I’ve made training at Gold's Gym. VERY friendly team who make me actually want to go train. I look forward to walking through the doors and always feel amazing when I leave. Their trainers are exceptional, the overall vibe is great and I have had nothing but good experiences. I definitely recommend them to my friends and family."
    pname.innerHTML="- Pradip Andhale"
}
function third(){
    input.innerHTML="Amazing staff.!!! Hygiene is always a priority here. There are lockers to keep our bags. The personal trainers are extremely helpful. I have been training under Pranay Bane and sir has been most motivating."
    pname.innerHTML="- Natasha Mondegari"
}
function four(){
    input.innerHTML="Hands down, best choice I’ve made training at Gold's Gym. VERY friendly team who make me actually want to go train. I look forward to walking through the doors and always feel amazing when I leave. Their trainers are exceptional, the overall vibe is great and I have had nothing but good experiences. I definitely recommend them to my friends and family."
    pname.innerHTML="- Pradip Andhale"
}
function five(){
    input.innerHTML="One of the best gyms to start your workout journey with. A very well managed Gym. Good staff. Good knowledge trainers. One of the special thing about the gym is positive energy, none of the gym have this kind of energy as compared to any other Gyms in this area. You will always feel energetic whenever you step in the Gym. Place doesn't matter at all it’s just the name its self-enough."
    pname.innerHTML="- Tejas Pardeshi"
}

var form=document.querySelector("form")
var sumbit=document.getElementById("sumbit-feed")
var nspan=document.getElementById("nspan")
var nin=document.getElementById("nin")
var mspan=document.getElementById("mspan")
var min=document.getElementById("min")
var espan=document.getElementById("espan")
var ein=document.getElementById("ein")
    

function feedback(){ 
    var regx=/^[a-zA-Z]{2,15}$/
    var regx1=/^[6-9][0-9]{9}$/
    var regx2=/^[0-9a-zA-Z!@.]{0,30}$/
    var flag=1
    
     if(nin.value==""){
        alert("Please Enter Your Name")
        flag=0
    } 
    
    else if(regx.test(nin.value)){
        nspan.innerHTML=""
    }
    else{
        alert("Invalid Name")
        flag=0
    }

    if(nin.value==""){
        alert("Please Enter Mobile Number")
        flag=0
    }
    else if(regx1.test(nin.value)){
        mspan.innerHTML=""
    }
    // else{
    //     alert("Invalid Mobile")
    //     flag=flase
    //     e.preventDefault()
    // }

    if(ein.value==""){
        alert("Please Enter Email ID")
        flag=0
    }
    else if(regx2.test(ein.value)){
        espan.innerHTML=""
    }
    else{
        alert("Invalid Email Id")
        flag=0
    }

    if(flag==1){
        alert(`You Request has been sumbitted
        We will response`)
    }
}

// form.addEventListener("sumbit",(e)=>{
//     var regx=/^[a-zA-Z]{2,15}$/
//     var regx1=/^[6-9][0-9]{9}$/
//     var regx2=/^[0-9a-zA-Z!@.]{0,30}$/
    
//      if(nin.value==""){
//         nspan.innerHTML=" Name is Required <br>"
//         e.preventDefault()
//     } 
    
//     else if(regx.test(nin.value)){
//         nspan.innerHTML=""
//     }
//     else{
//         nspan.innerHTML=" Invalid Name<br>"
//         e.preventDefault()
//     }

//     if(nin.value==""){
//         mspan.innerHTML=" Mobile Number is Required<br>"
//         e.preventDefault()
//     }
//     else if(regx1.test(nin.value)){
//         mspan.innerHTML=""
//     }
//     else{
//         mspan.innerHTML=" Invalid Mobile Number<br>"
//         e.preventDefault()
//     }

//     if(ein.value==""){
//         espan.innerHTML=" Email Id is Required<br>"
//         e.preventDefault()
//     }
//     else if(regx2.test(ein.value)){
//         espan.innerHTML=""
//     }
//     else{
//         espan.innerHTML=" Email Id is Required<br>"
//         e.preventDefault()
//     }

//     // if( espan=="" &&  mspan=="" && nspan==""){
//     //     alert(`You Request has been sumbitted
//     //     We will response`)
//     // }
// })

