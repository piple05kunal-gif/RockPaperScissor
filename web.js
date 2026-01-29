let userScore = 0;
let comScore = 0;
let reset = document.querySelector("#reset");
let gesture = document.querySelectorAll(".gesture");
let rock = document.querySelector(".rock");
let paper = document.querySelector(".paper");
let scissor = document.querySelector(".scissor");
let counterUser = document.querySelector("#counter1");
let counterComp = document.querySelector("#counter2");
let status = document.querySelector(".status");
let compTurn = document.querySelector(".compTurn");

const randomComp = () => {
    let nu = Math.floor(Math.random()*3);
    let arr = ["rocks", "papers", "scissors"];
    return arr[nu];
}
const checkWinner = (user) => {
    let computer = randomComp();
    if(user == "rocks"){
        if(computer == "scissors"){
            userScore++;
            status.innerText = "You";
            compTurn.innerText = "Computer Chooses Scissor";
        }else if(computer == "paper"){
            comScore++;
            status.innerText = "Computer";
            compTurn.innerText = "Computer Chooses Paper";
        }else{
            status.innerText = "Draw";
            compTurn.innerText = "Computer Chooses Rock";
        }
    }else if(user == "papers"){
        if(computer == "rocks"){
            userScore++;
            status.innerText = "You";
            compTurn.innerText = "Computer Chooses Rock";
        }else if(computer == "scissors"){
            comScore++;
            status.innerText = "Computer";
            compTurn.innerText = "Computer Chooses Scissor";
        }else{
            status.innerText = "Draw";
            compTurn.innerText = "Computer Chooses Paper";
        }
    }else if(user == "scissors"){
        if(computer == "rocks"){
            comScore++;
            status.innerText = "Computer";
            compTurn.innerText = "Computer Chooses Rock";
        }else if(computer == "paper"){
            userScore++;
            status.innerText = "You";
            compTurn.innerText = "Computer Chooses Paper";
        }else{
            status.innerText = "Draw";
            compTurn.innerText = "Computer Chooses Scissor";
        }
    }
}
rock.addEventListener("click", () => {
    checkWinner("rocks");
    counterComp.innerText = comScore;
    counterUser.innerText = userScore;
})
paper.addEventListener("click", () => {
    checkWinner("papers");
    counterComp.innerText = comScore;
    counterUser.innerText = userScore;
})
scissor.addEventListener("click", () => {
    checkWinner("scissors");
    counterComp.innerText = comScore;
    counterUser.innerText = userScore;
})


reset.addEventListener("click",() => {
    window.location.reload();
});