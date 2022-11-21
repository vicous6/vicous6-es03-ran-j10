let form1=document.getElementById("form1");
let form2=document.getElementById("form2");
let form3=document.getElementById("form3");
let h2=document.getElementsByClassName("h2-1")


let bt1=document.getElementById("bt1");
let bt2=document.getElementById("bt2");
let bt3=document.getElementById("bt3");

let inputs = document.querySelectorAll("#form1 input")
let inputs2 = document.querySelectorAll("#form2 input")
let inputs3 = document.querySelectorAll("#form3 input")



console.log(inputs3)
console.log(h2)



form1.addEventListener("click", function(){
    form1.classList.replace("passive","active")
    h2[0].classList.replace("passive","active")
    
    
    form2.classList.replace("active","passive")
    h2[1].classList.replace("active","passive")
    form3.classList.replace("active","passive")
    h2[2].classList.replace("active","passive")
});
form2.addEventListener("click", function(){
    form2.classList.replace("passive","active")
     h2[1].classList.replace("passive","active")
     
     
    form1.classList.replace("active","passive")
     h2[0].classList.replace("active","passive")
    form3.classList.replace("active","passive")
     h2[2].classList.replace("active","passive")
});
form3.addEventListener("click", function(){
    form3.classList.replace("passive","active")
     h2[2].classList.replace("passive","active")
     
     
    form2.classList.replace("active","passive")
     h2[1].classList.replace("active","passive")
    form1.classList.replace("active","passive")
     h2[0].classList.replace("active","passive")
});

bt1.addEventListener("click", function(){

 form2.classList.replace("passive","active")
     h2[1].classList.replace("passive","active")
     
     
    form1.classList.replace("active","passive")
     h2[0].classList.replace("active","passive")
    form3.classList.replace("active","passive")
     h2[2].classList.replace("active","passive")
     
     for(let i=0;i<4;i++){
     inputs[i].setAttribute("readonly","readonly")
}
});

bt2.addEventListener("click", function(){
    form3.classList.replace("passive","active")
     h2[2].classList.replace("passive","active")
     
     
    form2.classList.replace("active","passive")
     h2[1].classList.replace("active","passive")
    form1.classList.replace("active","passive")
     h2[0].classList.replace("active","passive")
     
       
     for(let i=0;i<12;i++){
     inputs2[i].setAttribute("disabled","true")
}
   
});

bt3.addEventListener("click", function(){
    form1.classList.replace("passive","active")
     h2[0].classList.replace("passive","active")
     
     
    form2.classList.replace("active","passive")
     h2[1].classList.replace("active","passive")
    form3.classList.replace("active","passive")
     h2[2].classList.replace("active","passive")
     
       for(let i=0;i<9;i++){
     inputs3[i].setAttribute("disabled","true")
}
   
});