let form1=document.getElementById("form1");
let form2=document.getElementById("form2");
let form3=document.getElementById("form3");
let h2=document.getElementsByClassName("h2-1")


bt1=document.getElementById("bt1");
bt2=document.getElementById("bt2");
bt3=document.getElementById("bt2");
console.log(h2)



form1.addEventListener("click", function(){
    form1.style.opacity= 1
    h2[0].style.opacity= 1
    
    
    form2.style.opacity= 0.35;
    h2[1].style.opacity= 0.35;
    form3.style.opacity= 0.35;
    h2[2].style.opacity= 0.35;
});
form2.addEventListener("click", function(){
    form2.style.opacity= 1
     h2[1].style.opacity= 1;
     
    form1.style.opacity= 0.35;
     h2[0].style.opacity= 0.35;
    form3.style.opacity= 0.35;
     h2[2].style.opacity= 0.35;
});
form3.addEventListener("click", function(){
    form3.style.opacity= 1
     h2[2].style.opacity= 1;
     
     
    form2.style.opacity= 0.35;
     h2[1].style.opacity= 0.35;
    form1.style.opacity= 0.35;
     h2[0].style.opacity= 0.35;
});

bt1.addEventListener("click", function(){
form2.style.opacity= 1
     h2[1].style.opacity= 1;
     
    form1.style.opacity= 0.35;
     h2[0].style.opacity= 0.35;
    form3.style.opacity= 0.35;
     h2[2].style.opacity= 0.35;
});

bt2.addEventListener("click", function(){
       form3.style.opacity= 1
     h2[2].style.opacity= 1;
     
     
    form2.style.opacity= 0.35;
     h2[1].style.opacity= 0.35;
    form1.style.opacity= 0.35;
     h2[0].style.opacity= 0.35;
});