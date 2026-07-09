let inp=document.querySelector("#task");
let btn=document.querySelector("#btn");
let ul=document.querySelector("ul");

btn.addEventListener("click",function(e){
    let item=document.createElement("li");
    item.innerText=inp.value;
    

    let delBtn=document.createElement("button");
    delBtn.innerText="Delete";
    delBtn.classList.add("delete");
     
    item.appendChild(delBtn);
    ul.appendChild(item);
   console.log(inp.value);
    inp.value="";
});
ul.addEventListener("click",function(e){
    console.dir(e.target.nodeName);
    if(e.target.nodeName=="BUTTON"){
        let listItem=e.target.parentElement;
        listItem.remove();
    }


});
// let delBtns = document.querySelectorAll(".delete");
// for (delBtn of delBtns) {
//     delBtn.addEventListener("click", function () {
//         console.dir("clicked the delete button");
//         let para = this.parentElement;
//         para.remove();
//     });
// }