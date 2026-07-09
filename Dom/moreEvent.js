
let form=document.querySelector("form");
form.addEventListener("change",function(e){
     e.preventDefault();
    let user=document.querySelector("#user");
let password=document.querySelector("#password");
   
    console.dir(user.value);
    console.dir(password.value);
});
//input
form.addEventListener("input",function(e){
     e.preventDefault();
    let user=document.querySelector("#user");
let password=document.querySelector("#password");
   
    console.dir(user.value);
    console.dir(password.value);
});

    let p=document.querySelector("p");
let text=document.querySelector("#text");

text.addEventListener("input",function(e){
    console.dir(text.value);

    e.preventDefault();
    p.innerText=text.value;
});
