
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
    roundNo: roundNo,
    ultimateWinner: 'no',
}

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

///create a function that will display score and other things in html
function addDisplay(){
    const userScore = document.getElementById("userScore");
    userScore.innerHTML = "User Score: " + roundResult.userScore;

    const roundNumber = document.getElementById("roundNumber")
    roundNumber.innerHTML = "Round No: " + roundResult.roundNo;

    const roundWinner = document.getElementById('roundWinner')
    roundWinner.innerHTML = "Round Winner: " + roundResult.winner;

    const machineScore = document.getElementById('machineScore')
    machineScore.innerHTML = "PC Score: " + roundResult.pcScore;

    const userPickStr = document.getElementById('userPickStr')
    userPickStr.innerHTML = "Users pick: " + roundResult.userPick;

    const pcPickStr = document.getElementById('pcPickStr')
    pcPickStr.innerHTML = "Computers pick: " + roundResult.pcPick;

}

//fucntion to invoke all fucntions
function playGame(){

getComputerChoice(); 
judge(); 
winnerCount();
addDisplay();
pickuWinner();
}

//fucntion to pick ultimate winner

function pickuWinner(){
    if (roundNo >= 5 && roundResult.pcScore !== roundResult.userScore && roundResult.userScore > roundResult.pcScore){
        roundResult.ultimateWinner = "User! Congratulations 🎉🎉🎉!"
    const pickWinner = document.getElementById('pickWinner')
    pickWinner.innerHTML = "Ultimate Winner is: " + roundResult.ultimateWinner;
    setStartover();
    btnclick();
    disableWeapon();
    }
    else if (roundNo >= 5 && roundResult.pcScore !== roundResult.userScore && roundResult.userScore < roundResult.pcScore){
        roundResult.ultimateWinner = "Computer. Try again later"
    const pickWinner = document.getElementById('pickWinner')
    pickWinner.innerHTML = "Ultimate Winner is: " + roundResult.ultimateWinner;
    setStartover();
    btnclick();
    disableWeapon();
    }
    else 
    console.log("no ultimate winner yet")
}


//startover function

let btn

function setStartover(){
btn = document.createElement('button')
btn.innerText = "I'm ready to try again!";
btn.style.cssText = 'color:red;background-color:yellow';
btn.style.position = "absolute";
btn.style.left = "50%";
btn.style.transform = "translateX(-50%)";
btn.id = "startover"
document.body.appendChild(btn);
}

function btnclick(){
let btn1 = document.getElementById("startover")
btn1.onclick = function(){
    console.log("clicked");
    location.reload();
}
};


function disableWeapon(){
    document.getElementById("Rock").disabled = true;
    document.getElementById("Paper").disabled = true;
    document.getElementById("Scissors").disabled = true;
};