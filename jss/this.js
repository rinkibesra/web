// let student={
//     name:"rinki",
//     eng:98,
//     maths:88,
//     sci:94,
//     getAvg(){
//     let avg=(this.eng+this.maths+this.sci)/3;
//     console.log(avg);
//     console.log(`${this.name} got avg marks=${avg}`);
// }
// }
// console.log(student);
// console.log(student.getAvg());
// //TRY...CATCH
// console.log("hello");
// console.log("hello2");
// let a=5;
// try{
//     console.log(a);

// }
// catch(err){console.log("there is an error");
// console.log(err);
// }

// console.log("hey there");
// console.log("hey there");
// //arrow function
// const sum=(a,b)=>{
//     console.log(a+b);

// }
// console.log(sum(4,5));
// const cube=(a)=>{
//     console.log(a*a*a);

// }
// console.log(cube(4));

// const pow=(a,b)=>{
//     return(a**b);

// }
// console.log(pow(4,2));

// const mul=(a,b)=>(a*b);


// console.log(mul(4,4));
//setTime
// console.log("hii there..");
// setTimeout(() => {console.log("Apna College");}, 4000);
// console.log("welcome to");
//setInterval
// const id=setInterval(() => {console.log("Apna College");}, 2000);
// console.log("welcome to");
// console.log(id);
// //practise question
// const square=(a)=>{
//     return (a*a);
// }
// console.log(square(4));

let id=setInterval(()=>{
    console.log("Hii there...");
},2000);
setTimeout(()=>{
    clearInterval(id);
    console.log("setTimmer ran");
},10000)

