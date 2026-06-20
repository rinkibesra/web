//q1
let array=[1,2,3,4,5,6,2,3];
let num=prompt("enter num :");
console.log(array);
for(let i=0;i<array.length;i++){
    if(num==array[i]){
        array.splice(i,1);
     
    }

}console.log(array);
//q2
let no=1234567;
let count=0;
while(no>0){   
   no = Math.floor(no / 10);
        count++;
    

}console.log(count);
//q3
let n=123;
let sum=0;

while(n>0){ 
    let ld=n%10;
    sum+=ld;  
   n =Math.floor(n/10);
        
    

}console.log(sum);
//q4
let m=7;
let fact=1;

for(let i=1;i<=m;i++){
 fact*=i;

}console.log(`factorial of ${m}=${fact}`);
//q5
let arr=[2,6,1,8,3,7];
let largest=arr[0];
for(let i=0;i<arr.length;i++){
if(largest<arr[i]){
    largest=arr[i];
}
}console.log(largest);