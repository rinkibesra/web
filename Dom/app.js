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
