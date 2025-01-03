let boxes = document.querySelectorAll(".box")
let resetBtn = document.querySelector("#reset-btn")
let msg = document.querySelector("#msg");
let msgContainer = document.querySelector(".msg-container");
let newGamebtn = document.querySelector("#new-btn");


let turnO = true  //player X , Player Y

const winPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [3,4,5],
    [6,7,8],
    [2,4,6]
]
const resetGame = () =>{
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide")
}

boxes.forEach((box) => {
    box.addEventListener("click" , () => {
       if(turnO) { //player O
        box.innerText = "O"
        turnO = false;
       }else { //player X
        box.innerText = "X"
        turnO = true
       }
       box.disabled = true;

       checkWinner();
    })
})

const showWinner = (winner) => {
msg.innerText = `Congratulation , Winner is ${winner}`;
msgContainer.classList.remove("hide");
box.disabled();
}

const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}

const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const checkWinner = () => {
    for( let pattern of winPattern) {
     let pos1Val = boxes[pattern[0]].innerText;
     let pos2Val = boxes[pattern[1]].innerText;
     let pos3Val = boxes[pattern[2]].innerText;

     if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
        if(pos1Val === pos2Val && pos2Val === pos3Val){
            showWinner(pos1Val);
        }
     }
    }
} 

newGamebtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);