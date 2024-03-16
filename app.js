let Boxes = document.querySelectorAll(".Box");
let resetbtn = document.querySelector("#Reset-btn");
let newgamebtn = document.querySelector("#newbtn");
let message = document.querySelector(".message");
let msg = document.querySelector("#msg");


let turnO=true;

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
const resetGame = () => {
    turnO =true;
    enableBoxes();
    message.classList.add("hide");
};
Boxes.forEach((Box) => {
    Box.addEventListener("click", () =>{
        if(turnO){
            Box.innerText="O";
            turnO=false;
        }else {
            Box.innerText="X";
            turnO=true;
        }
        Box.disabled=true;

        checkWinner();
    });
});
const disableBoxes =() => {
    for(let Box of Boxes){
        Box.disabled = true;
    }
};

const enableBoxes =() => {
    for(let Box of Boxes){
        Box.disabled = false;
        Box.innerHTML="";
    }
};


const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    message.classList.remove("hide");
    disableBoxes();
};


const checkWinner = ()=> {
    for(let patterns of winPatterns){
        let pos1Val = Boxes[patterns[0]].innerText;
        let pos2Val = Boxes[patterns[1]].innerText;
        let pos3Val = Boxes[patterns[2]].innerText;

        if(pos1Val !="" && pos2Val !="" && pos3Val !="" ){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                console.log("winner",pos1Val);
                showWinner(pos1Val);
            }
        }
    }
};
newgamebtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);
