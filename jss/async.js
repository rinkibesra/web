async function greet(){
   // throw "random error";
    return "hello";
}
greet().then((result)=>{
    console.log("the promise was resolved");
    console.log("the result was:",result);
})
.catch((error)=>{
    console.log("the promise was rejected");
    console.log("the error was:",error);
});

let demo=async()=>{
    console.log("inside demo function");
};