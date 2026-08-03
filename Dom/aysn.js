async function greet(){
    // throw "404 page not found";
    return "helllo";
}
greet().then((res)=>{
    console.log("the promise was resolved");
    console.log("the result:",res);

})
.catch((err)=>{
    console.log("the promise was rejected:",err);

});