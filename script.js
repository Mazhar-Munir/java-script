  /* create tic tac toe  */
 
  let boxes=document.querySelectorAll(".box");
  let resetBtn = document.querySelector("#reset");
  let newGameBtn = document.querySelector("#new-btn");
  let msgcontainer = document.querySelector(".msg-container");
  let msg = document.querySelector("#msg");
  

  let res = document.querySelector("#reset");
  res.onclick = (e) => {
    console.log("Game Reset");
  }
  let turnO = true //PlayerX, PlayerO 

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
      turnO = true;
      enableBoxes();
      msgcontainer.classList.add("hide");
    };

  boxes.forEach((box) => {
    box.addEventListener("click", () =>{
      if(turnO){
           box.innerText ="O";
           turnO=false;
      } else{
           box.innerText ="X";
           turnO= true;
      }
      box.disabled= true;
      checkwinner();
    });
  });
   const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    };
   }
    const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText ="";
    };
   }
   const showwinner =(winner) =>{
    msg.innerText = `congratulation, Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableBoxes();
   }
  const checkwinner =() =>{
    for( let pattern of winPatterns){
         
        let pos1value =  boxes[pattern[0]].innerText;
        let pos2value =  boxes[pattern[1]].innerText;
        let pos3value =  boxes[pattern[2]].innerText;

        if(pos1value !="" && pos2value!="" && pos3value!=""){
         if(pos1value === pos3value && pos2value === pos3value){
            showwinner(pos1value);
            }
        }
    }
  };

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
  