console.log("helloWorld")


//function should return random value (plays on behalf of computer)

//first define an array of variable
const randomItems = ["rock", "paper", "scissors"];

//randomly choose element from an array of variables
function getComputerChoice()
{
   let randomOne = randomItems[Math.floor(Math.random()*randomItems.length)];
   return console.log(randomOne)
}
//invoke function
getComputerChoice();

//connecting buttons from html
const userRock = document.getElementById("userRock");

window.onload=function(){
userRock.addEventListener('click', () =>{
    alert('Rock Picked');
});
};