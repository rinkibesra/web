let a=[2,4,6,8,10];
let newArray=a.map((el)=>{
    return el+5;

})
console.log(a);
console.log(newArray);
//q3
let s=["rinki","pinki","babita"];
let nstring=s.map((string)=>{
     return string.toUpperCase();

})

console.log(nstring);
//q4
let b=[1,3,5,7,9];
let dOubleAndReturnArgs=b.map((el)=>{
     return el*el;

})

console.log(dOubleAndReturnArgs);
let mergeObject=((obj1,obj2)=>({...obj1,...obj2}))
console.log(mergeObject({a:1,b:2},{c:3,d:4}));