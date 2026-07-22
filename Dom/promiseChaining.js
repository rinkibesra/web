let h1=document.querySelector('h1');
function colorChange(color,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            h1.style.color=color;
            resolve("color changed");
        },delay);

    });
}
colorChange("red",1000)
    .then(()=>{
        console.log("red color is changes");
        return colorChange("orange",1000);
    })
      .then(()=>{
        console.log("orange color is changes");
        return colorChange("green",1000);
    })
     .then(()=>{
        console.log("green color is changes");
        return colorChange("blue",1000);
    })
         .then(()=>{
        console.log("blue color is changes");
        return colorChange("pink",1000);
    })
         .then(()=>{
        console.log("pink color is changes");
        return colorChange("brown",1000);
    })