let smallImg=document.getElementsByClassName("oldImg");
for(let i=0;i<=smallImg.length;i++){
    console.dir(smallImg[i]);
}
// let newImg=document.getElementsByClassName("oldImg");
// for(let i=0;i<=newImg.length;i++){
//     newImg[i].src="spiderman_img.png";
// console.log(`the image on ${i} is changed`);
// }
// let change=document.getElementsByTagName("p")[0].innerText="abc";
console.dir(document.querySelector("p"));
console.dir(document.querySelectorAll("P"));
console.dir(document.querySelectorAll("div a"));
let para=document.querySelector("p");
console.dir(para.innerHTML);
console.dir(para.textContent);
console.dir(para.innerText);
// para.innerText="I am Peter Parker";
para.innerHTML="<b>I am peter parker</b>";
let heading=document.querySelector("h1");
heading.innerHTML=`<u> ${heading.innerText} </ul>`
//getter setter
let img=document.querySelector("img");
img.getAttribute("id");
// img.setAttribute("src","creation_3.jpeg" );
//classList

console.dir(heading.classList);
heading.classList.add("green");
heading.classList.add("underline");
heading.classList.remove("green");
heading.classList.toggle("green");
//Navigation
let h4=document.querySelector("h4");

console.dir(h4.parentElement);
console.dir(h4.children);
let ul=document.querySelector("ul");

console.dir(ul.children[0].nextElementSibling);
console.dir(ul.children[1].nextElementSibling);
img.previousElementSibling.style.backgroundColor="pink";
let p=document.querySelector("p");
let btn=document.createElement('button');
btn.innerText="clickme";
console.dir(p.insertAdjacentElement('beforebegin',btn));
console.dir(box.insertAdjacentElement('afterend',btn));
console.dir(box.insertAdjacentElement('beforeend',btn));
console.dir(box.insertAdjacentElement('beforebegin',btn));



