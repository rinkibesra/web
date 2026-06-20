// let student=["Rinki","Pinki","Babita","Eshaan"];
// console.log(student[0][2]);
// console.log(student.length);
// console.log(typeof student);
// let info=[1,"Rinki","Besra",22,"MCA"];
// console.log(info.length);
// console.log(info[0]);
// console.log(info[info.length-1]);
// let fruits=["Apple","Banana","Mango","Grapes","Orange","Watermelon"];
// fruits[0]="Pineapple";
// console.log(fruits);
// console.log(fruits.push("Papaya"));
// console.log(fruits);
// console.log(fruits.unshift("Strawberry"));
// console.log(fruits);
// console.log(fruits.pop());
// console.log(fruits);
// console.log(fruits.shift());
// console.log(fruits);
// console.log(fruits.indexOf("Mango"));
// console.log(fruits.includes("Grapes"));
// console.log(fruits.concat(student));
// console.log(fruits.reverse());
// console.log(fruits);
// console.log(fruits.slice(2,5));
// let colors=["Red","Green","Blue","Yellow","Orange","Purple","Pink","Black"];

// console.log(colors.splice(-3));
// console.log(colors);


// console.log(colors.splice(0,1,"Purple"));
// console.log(colors);

// console.log(colors.splice(1,0,"Red","Pink"));
// console.log(colors);
// let start=["january","july","march","august"];
// //array references
// let arr=['a','b','c'];
// let arr2=arr;
// arr2.push('d');
// console.log(arr);
// console.log(arr2);
// //const array
// const arr3=['x','y','z'];
// arr3.push('w');
// console.log(arr3);
// //nested array
// let nestedArr=[[1,2],[3,4],5];
// console.log(nestedArr);
// //tic-tac-toe board
// let game=[['X','null','O'],['null','X','null'],['O','null','X']]
// console.log(game);
// let fruits=["apple","grapes","banana","pine apple"];
// for(let i=0;i<fruits.length;i++){
//     console.log(fruits[i]);
// }
// let colors=[["red","blue","pink"],["green","yellow","white"]];
// for(let i=0;i<colors.length;i++){
//     for(let j=0;j<colors[i].length;j++){
//         console.log(colors[i][j]);
//     }
// }
let fruits=["apple","banana","grapes","kiwi","mango"];
for(fruit of fruits)
{
    console.log(fruit);
}
let str="rinki";
for(alphabet of str){
    console.log(alphabet);
}
let colors=[["red","blue","pink"],["green","yellow","white"]];
for(list1 of colors)
{
    for(list2 of list1){
        console.log(list2);
    }
}