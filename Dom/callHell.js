let h1=document.querySelector("h1");
function changeColor(color,delay,nextchangeColor){
    setTimeout(()=>{
        h1.style.color=color;
        if(nextchangeColor)nextchangeColor();
    },delay);

}
changeColor("red",1000,()=>{
    changeColor("orange",1000,()=>{
          changeColor("green",1000,()=>{
              changeColor("blue",1000,()=>{

});

});

});
});