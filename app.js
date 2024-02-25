let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg")

let turn_O = true; //Player 0 player x

const winning_patterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetGame=()=>{
    turn_O=true;
    enableboxes();
    msgContainer.classList.add("hide")
}

let count=0;
boxes.forEach((box)=>{
  
    box.addEventListener("click",()=>{
       
            if(turn_O ){
                box.innerText="O";
                box.classList.add("circle");
                turn_O=false;
            }else{
                box.innerText="X";
                box.classList.add("cross");
                turn_O=true;
            }
            box.disabled=true;
            count++;
            let winner=checkWinner();
            if (count===9 && !winner){
                console.log("Draw");
                showDraw();
            }
        
      
    })

})

const checkWinner=()=>{
    for (let pattern of winning_patterns){
          console.log(boxes[pattern[0]],boxes[pattern[1]],boxes[pattern[2]]);
          console.log(
            boxes[pattern[0]].innerText,
            boxes[pattern[1]].innerText,
            boxes[pattern[2]].innerText
            );

            let pos1val= boxes[pattern[0]].innerText;
            let pos2val = boxes[pattern[1]].innerText;
            let pos3val = boxes[pattern[2]].innerText;

            if(pos1val != "" &&  pos2val != "" && pos3val !=""){
                if(pos1val === pos2val && pos2val === pos3val ){
                    console.log("winner", pos1val)
                    showWinner(pos1val)
                    return pos1val;
                }
            }
    }
}

const disableboxes=()=>{
    for (let box of boxes){
        box.disabled=true;
    }
}

const enableboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const showWinner=(winner)=>{
    msg.innerText=`Congratulations winner is ${winner}`;
    msgContainer.classList.remove("hide")
    disableboxes();
}

newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);

const showDraw=()=>{
    msg.innerText="The Game is Draw";
    msgContainer.classList.remove("hide")
}