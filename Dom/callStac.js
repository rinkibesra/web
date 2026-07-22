// function one() {
//     return 1;

// }
// function two() {
//     return one() + one();

// }
// function three() {
//     let ans = two() + one();
//     console.log(ans);


// }
// three();
function saveToDB(){
    return new Promise((resolve,reject)=>{
        let internetSpeed=Math.floor(Math.random()*10)+1;
        if(internetSpeed>4){
            resolve("sucess:data is saved");
        }else{
            reject("failure:weak connection");
        }

    })

}
saveToDB("rinki").then(()=>{
    console.log("promise was resolved");
})
.catch(()=>{
    console.log("Promises was rejected");
})