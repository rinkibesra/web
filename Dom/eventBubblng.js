let div=document.querySelector("div");
let ul=document.querySelector("ul");
let li=document.querySelectorAll("li");
div.style.backgroundColor="red";
div.style.height="100px";
div.style.width="400px";
ul.style.backgroundColor="green";
li.forEach(function(li){
    li.style.backgroundColor="yellow";
});
div.addEventListener("click",function(e){
    console.log("u clicked the div");
});
ul.addEventListener("click",function(e){
    console.log("u clicked the ul");
    e.stopPropagation();
});
for(lis of li){
    lis.addEventListener("click",function(e){
        console.log("u clicked the li");
        e.stopPropagation();
    }); }