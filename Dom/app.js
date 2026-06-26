let smallImg=document.getElementsByClassName("oldImg");
for(let i=0;i<=smallImg.length;i++){
    console.dir(smallImg[i]);
}
let newImg=document.getElementsByClassName("oldImg");
for(let i=0;i<=newImg.length;i++){
    newImg[i].src="spiderman_img.png";
console.log(`the image on ${i} is changed`);
}
let text=document.getElementsByTagName("p")[0].innerText;