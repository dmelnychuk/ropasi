
//function should return random value (plays on behalf of computer)

//first define an array of variable
const randomItems = ["Rock", "Paper", "Scissors"];
//create object for numbers of scores
let roundNo = 0;
let userScore = 0;
let pcScore = 0;

//created an object that has all values needed for game.
let roundResult = {
    pcPick: 'no', 
    userPick: 'no', 
    winner: 'no', 
    userScore: userScore, 
    pcScore: pcScore, 
    roundNo: roundNo}

//randomly choose element from an array of variables
function getComputerChoice()
{
   let randomOne = randomItems[Math.floor(Math.random()*randomItems.length)];
   roundResult.pcPick = randomOne
   //return console.log(randomOne)
}


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
console.log("weapon pick error");

console.log("winner is: "+ roundResult.winner )
}
//set +1 counter for each value

function winnerCount()
{
if (roundResult.winner == "User") {
    roundResult.userScore = userScore+=1
    roundResult.roundNo = roundNo+=1;
}
else if (roundResult.winner == "PC") {
    roundResult.pcScore = pcScore+=1
    roundResult.roundNo = roundNo+=1;
}
else if (roundResult.winner == "Tie") {
    roundResult.roundNo = roundNo+=1;
}

else
console.log("counter error");


}


//create game fucntion that will initiate Game itself?? 
//Maybe set all other functions inside this one 
//to invoke from button with one simple fucntion

