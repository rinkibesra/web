const max=prompt("enter maximum no");
const random=Math.floor(Math.random()*max)+1;
let guess=prompt("guess the no");
while(true){
if(guess=="quit")
{
    console.log("quitting the game");
    break;
}
if(guess==random){
    console.log("Congratulation you guess it correct......!!!!!...The no was",random);
    break;

}else if(guess<random){
    guess=prompt("you guess a small no..Try again");
}else{
    guess=prompt("you guess a large no...try again");
}
}