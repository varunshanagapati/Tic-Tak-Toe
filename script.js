let boxes=document.querySelectorAll(".box")
let msg=document.querySelector("#msg")
let turn=true;
let count=0;

let reset_btn=document.querySelector("#reset-btn");
let newgame_btn=document.querySelector("#newgame-btn");



const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
  ];



  boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn){
            box.innerText="X";
            turn=false;
        }else{
            box.innerText="O";
            turn=true;
        }
        box.disabled=true;
        count++;
        console.log("button clicked");
        checkWinner();
        if(count===9 && !checkWinner()){
            gameDraw();
        }

    })
    
  })

  const gameDraw=()=>{
    msg.innerText="Game was Draw!";
    disableBoxes();
  }

  const checkWinner=()=>{
    for(let pattern of winPatterns){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;

        if(pos1!="" && pos2!="" && pos3!=""){
            if(pos1==pos2 && pos2==pos3){
                showWinner(pos1);
                return true;
            }
        }
        
    }

  }

  const showWinner=(winner)=>{
    msg.innerText=`Congratulations! Winner is ${winner}`;
    disableBoxes();
  }

  const disableBoxes=()=>{

    boxes.forEach((box)=>{
        box.disabled=true;
    })
  }
  const enableBoxes=()=>{
    boxes.forEach((box)=>{
        box.disabled=false;
        box.innerText="";
    })
    turn=true;
  }

  reset_btn.addEventListener("click",()=>{
    enableBoxes();
    msg.innerText="";
    count=0
  });

  newgame_btn.addEventListener("click",()=>{
    enableBoxes();
    msg.innerText="";
    count=0
  });
  