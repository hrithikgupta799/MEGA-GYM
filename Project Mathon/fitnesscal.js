function BMI(){
    var weight=document.getElementById("weight").value
    var height=document.getElementById("height").value
    var result=document.getElementById("result")
    var bmi
    if(weight=="" && height==""){
        alert("Please Enter Valid Weight and Height.")
    }
    else{
        bmi=weight/(height*height)
        result.innerHTML=`${bmi.toFixed(1)}`
    }

    if(bmi<18.5){
        react.innerHTML="You are Underweight"
    }
    else if(bmi>18.5 && bmi<24.9){
        react.innerHTML=" You are Healthy Weight"
    }
    else if(bmi>25.0 && bmi<29.9){
        react.innerHTML=" You are OverWeight"
    }
    else{
        react.innerHTML=" You are Obesity"
    }
        
}