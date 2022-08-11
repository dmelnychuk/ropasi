
//function should return random value (plays on behalf of computer)

//first define an array of variable
const randomItems = ["Rock", "Paper", "Scissors"];

//created an object that has all values needed for game.
let roundResult = {
    pcPick: 'no', 
    userPick: 'no', 
    winner: 'no', 
    userScore: 'no', 
    pcScore: 'no', 
    roundNo: 'no'}

//randomly choose element from an array of variables
function getComputerChoice()
{
   let randomOne = randomItems[Math.floor(Math.random()*randomItems.length)];
   roundResult.pcPick = randomOne
   //return console.log(randomOne)
}
//invoke function. No need to invoke it from here
//getComputerChoice();

//variable that stands for user Pick

function userRock()
{
    roundResult.userPick = "Rock"
};

function userPaper()
{
    roundResult.userPick = "Paper"
};

function userScissors()
{
    roundResult.userPick = "Scissors"
};
// set logic for the game output

//logic of game itself

function judge()
{
//Rock
if (roundResult.pcPick == "Rock" && roundResult.userPick == "Rock")
    roundResult.winner = "Tie";
else if (roundResult.pcPick == "Rock" && roundResult.userPick == "Scissors")
    roundResult.winner = "PC";
else if (roundResult.pcPick == "Rock" && roundResult.userPick == "Paper")
    roundResult.winner = "User";
//Paper
else if (roundResult.pcPick == "Paper" && roundResult.userPick == "Rock")
    roundResult.winner = "PC";
else if (roundResult.pcPick == "Paper" && roundResult.userPick == "Scissors")
    roundResult.winner = "User";
else if (roundResult.pcPick == "Paper" && roundResult.userPick == "Paper")
    roundResult.winner = "Tie";
//Scissors
else if (roundResult.pcPick == "Scissors" && roundResult.userPick == "Rock")
    roundResult.winner = "User";
else if (roundResult.pcPick == "Scissors" && roundResult.userPick == "Scissors")
    roundResult.winner = "Tie";
else if (roundResult.pcPick == "Scissors" && roundResult.userPick == "Paper")
    roundResult.winner = "PC";
/////Else
else
console.log("you've made an error");

console.log("winner is: "+ roundResult.winner )
}
