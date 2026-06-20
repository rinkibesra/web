function dice(){
    let random=Math.floor(Math.random()*6)+1;
    console.log(random);

}
dice();
dice();
dice();
dice();
dice();
dice();
function average(a,b,c){
    let avg=a+b+c/3;
    console.log(avg);

}
average(20,40,60);
function table(n){
    for(let i=1;i<=10;i++){
        console.log(`${n} x ${i}=${n*i}`);
    }
}
table(7);
function sum(n){
    let sum=0;
    for(let i=1;i<=n;i++){
      sum+=i;  
    
     
    }   return sum;
}
console.log(sum(5));