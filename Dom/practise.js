//practise 1
let p=document.createElement('p');
p.innerText="Hey i'm red";
document.querySelector("body").appendChild(p);
p.classList.add("red");
//2
let h3=document.createElement('h3');
h3.innerText="Hey i'm blue h3";
document.querySelector("body").appendChild(h3);
h3.classList.add("blue");
//3
let div=document.createElement('div');
let h1=document.createElement('h1');
h1.innerText="I'm in a div";
let p1=document.createElement('p');
p1.innerText="I'm also in a div";
div.style.border="1px solid black";
div.style.backgroundColor="pink";
div.appendChild(h1);
div.appendChild(p1);
document.querySelector("body").appendChild(div);
//practise exercise
//1
let input=document.createElement('input');
input.setAttribute("type","text");
input.setAttribute("placeholder","username");
document.querySelector("body").appendChild(input);
let btn=document.createElement("button");
btn.innerText="clickme";
//2
btn.setAttribute("id","btn");
document.querySelector("body").appendChild(btn);
//3

let button=document.querySelector("#btn");
button.classList.add("btn");
//4
let text=document.createElement("h1");
h1.innerText="DOM Practise";
document.querySelector("body").appendChild(h1);
h1.classList.add("text");
//5
let para=document.createElement("p");
para.innerHTML="Apna College <b>Delta</b> Practise";
document.querySelector("body").appendChild(para);

let p2=document.querySelector("p");
p2.addEventListener("click",function(){
    console.log("u clicked the paragraph");});
    let box=document.querySelector(".box");
    box.addEventListener("mouseover",function(){
        console.log("u hovered the box");
    });

    //this in dom event
    btn=document.querySelector("button");
    h1=document.querySelector("h1");
    h3=document.querySelector("h3");
  div=document.querySelector(".para");
function changeColor(){
    console.dir(this.innerText);
    this.style.backgroundColor="red";}
btn.addEventListener("click",changeColor);
h1.addEventListener("click",changeColor);
h3.addEventListener("click",changeColor);
div.addEventListener("click",changeColor);
//KEYBOARD EVENTS
let input1=document.querySelector("input");
input1.addEventListener("keydown",function(e){
    console.dir(e);
    console.dir(e.key);
    console.dir(e.code);
    console.log(`the key was  pressed`);
});
input1.addEventListener("keyup",function(e){
    console.log(`the key was released`);
});
let inp=document.querySelector("#input");
inp.addEventListener("keydown",function(e){
    console.log("code=" , e.code);
    if(e.code=="KeyU"){
        console.log("character moved up");
    }else if(e.code=="KeyD"){
        console.log("character moved down");
    }else if(e.code=="KeyL"){
        console.log("character moved left");
    }  else if(e.code=="KeyR"){
        console.log("character moved right");
    }
});
let form=document.querySelector("form");
form.addEventListener("submit",function(e){
    e.preventDefault();
    console.dir(form);
    let user=this.elements[0];
    let password=this.elements[1];
    alert(`the username is ${user} and the password is ${password}`);
    
});
