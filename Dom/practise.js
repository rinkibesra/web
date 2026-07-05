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
