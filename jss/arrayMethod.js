let arr=[1,2,3,4,5];
let print=function(el){
    console.log(el);
}
arr.forEach(print);
let student=[
    {name:"rinki",
     age:22,
     city:"bhopal",
     marks:78

    },{
        name:"usha",
     age:27,
     city:"assam",
      marks:89
     

    },{
        name:"trisha",
     age:25,
     city:"mumbai",
      marks:93
    }
];
//for each
student.forEach((el)=>{
    console.log(el);

});
student.forEach((el)=>{
    console.log(el.city);

});
let num=[2,5,7,2,9,1,9];
//map
let gpa=student.map((el)=>{
    return (el.marks)/10;

})
let double=num.map((el)=>{
    return el*2;
})
//filter
let even=num.filter((el)=>{
  return el%2==0;

});
//every and some 
let no1=[2,4,6,8,10];
let no2=[1,2,3,4,5,];
let div_2=no1.every((el)=>{return el%2==0});
let contain_even=no2.some((el)=>{return el%2==0});
//reduce
let sum=no1.reduce((res,el)=>{
    console.log(res);
    return res+el});
//reduce  max of array
let max=num.reduce((max,el)=>{
    if(el>max){
        return el;
    }else{
        return max;
    }
});
console.log("maximum:",max);
//practise question 1
let array=[ 2,10,20,30,40,50,60,70];
let mul_10=array.every((el)=>{
    return el%10==0;
})
console.log(mul_10);
//practise q2
let min=array.reduce((min,el)=>{
    if(el<min){
        return el;
    }else{
        return min;
    }
})
console.log("minimum:",min);
//spreads
let a=[1,2,3,5,2,7,4,9,2,8];
console.log(a);
console.log(...a);
console.log(Math.min(...a));
console.log(Math.max(...a));
let s="RINKI BESRA";
console.log(...s);
//spread literals
let b=[1,2,3,4,5];
let newb=[...b];
console.log(newb);
let e=[2,4,6,8,10];
let o=[1,3,5,7,9];
let number=[...o,...e];
console.log(number);
//object literal
let obj={
    name:"rinki",
    email:"abc@gmail.com"
};
let info={...obj};
console.log(info);
let info1={...obj,password:"abcd",course:"MCA"};
console.log(info);
let obj1={...a};
console.log(obj1);
//rest
function prints(...args){
    for(let i=0;i<args.length;i++){
        console.log("you gave us:",args[i]);
    }
}
console.log(prints(1,2,3,4,5));
//deconstructer
let n=["rinki","pinki","eshaan","babita","anjali","babulal"];
let[winner,f_runnerup,...others]=n;
console.log(winner,f_runnerup,others);
let details={
    name:"rinki",
    course:"MCA",
    age:22,
    city:"bhopal",
    username:"rinki_b",
    password:"rin"
};
let {name,age,city:place,coll:college="MANIT"}=details;
console.log(name);
console.log(college);
console.log(place);
