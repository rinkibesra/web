let arr=[1,4,6,8,3,9,7];
let num=5;
function getElement(arr,num){
    for(let i=0;i<=arr.length;i++){
        if(num<arr[i]){
            console.log(arr[i]);
        }

    }
}
getElement(arr,num);