let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn"); 
let gameBtn = document.querySelector("#game-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");


let turn = true;

const winPattern = [
                [0,1,2],
                [3,4,5],
                [6,7,8],
                [0,3,6],
                [1,4,7],
                [2,5,8],
                [0,4,8],
                [2,4,6],
];

/////////////////////////////////////

const resetGame = ()=>{
    turn = true;
    enableboxs();
    msgContainer.classList.add("hide");
};

////////////////////////////////

boxes.forEach((box) =>{
    box.addEventListener("click",()=>{
        // console.log("clock");
        box.innerText="A";

        if(turn==true){
            box.innerText = "X";
            turn = false;
        }

        else{
            box.innerText = "O";
            turn = true;
        }

        box.disabled = true;

        checkWinner();
    }

    );
});

const disableboxs = ( ) => {
    for(let box of boxes){
        box.disabled =  true;
    }
};

const enableboxs = ( ) => {
    for(let box of boxes){
        box.disabled =  false;
        box.innerText="";
    }
};

const showWinner = (winner) =>{
    msg.innerText=`CONGRATS  ${winner}`;
    msgContainer.classList.remove("hide");
    disableboxs();
};  



checkWinner = () =>{
    for(let pattern of winPattern){
        // // console.log(pattern);
        // console.log(pattern[0],pattern[1],pattern[2]);
        let position1v = boxes[pattern[0]].innerText;
        let position2v = boxes[pattern[1]].innerText;
        let position3v = boxes[pattern[2]].innerText;  

        if(position1v!="" && position2v!="" & position3v!=""){
            if(position1v==position2v && position2v==position3v){
                console.log("winner" , position1v);
                showWinner(position1v);
            }
        }


    };
}

resetBtn.addEventListener("click",(resetGame));
gameBtn.addEventListener("click",(resetGame));