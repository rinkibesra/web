let resjson='{"fact":"The cat\'s tail is used to maintain balance.","length":43}';
let res=JSON.parse(resjson);
let student={
    name:"Rinki",
    age:20
};
let studentjson=JSON.stringify(student);
console.log("the json string is:",studentjson);
 let url="https://catfact.ninja/fact";
 fetch(url).then((res)=>{
    return res.json();
 })
 .then((data1)=>{
    console.log("data 1 :",data1);
    return fetch(url);
 })
 .then((res)=>{
    return res.json();
 })
 .then((data2)=>{
    console.log("data 2 :",data2);
 })
 .catch((err)=>{
    console.log("ERROR-",err);
 });
 console.log("hii,this is rinki");
 let url2="https://catfact.ninja/fact2";
 async function response(){
  try{
      let res=await fetch(url2);
    let data=await res.json();
    console.log(data.fact);
  }
  catch(e){
    console.log("Error-",e);
  };

 }