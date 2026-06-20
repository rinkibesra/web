
let avg=(arr)=>{
    let sum=0;
    for(let i of arr){
  sum+=i;
  
}return sum/arr.length;
}
let arr=[2,3,4,1,6,8];
console.log(avg(arr));
let even=(n)=>{
    if(n%2==0){
        return "even";
    }else{
        return "odd";
    }
};
console.log(even(7));