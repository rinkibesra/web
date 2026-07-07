let btn=document.querySelectorAll("button");
console.dir(btn);
for(b of btn){
b.addEventListener("click",fun);
b.addEventListener("click",fun1);
}
function fun(){
    alert("u clicked the button")};

function fun1(){
    alert("u clicked the button 1")}    

