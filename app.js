let boxes = document.querySelectorAll(".box");
let resetButton = document.querySelector("#reset-btn");


let newGame = document.querySelector("#new-btn");

let msgContainer = document.querySelector(".msg-cont");

let msg = document.querySelector("#msg");


let turn = true; // PlayerX if true, PlayerY if false;

const winPatterns = [
     
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]




boxes.forEach((b) => {
    b.addEventListener("click", () => {
        console.log("box was clicked");
        
        if (turn === true) {  //player1
            b.innerText = "X";
            turn = false;
        } else {  //player2
            
            b.innerText= "O";
            turn = true;
        }
        b.disabled = true;
        checkWinner();

    });
});

const checkWinner = () => {
    for (const pattern of winPatterns) {

      console.log(pattern[0], pattern[1], pattern[2]);

      console.log(boxes[pattern[0]].innerText, boxes[pattern[1]].innerText, boxes[pattern[2]].innerText);
        

        let pos1 = boxes[pattern[0]].innerText;

        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if(pos1!=""  && pos2!="" && pos3!=""){
            if (pos1 === pos2 && pos2 === pos3) {

                console.log("We have a winner", pos1);
               showWinner(pos1);
 
            }
        }
    }
}


const showWinner = (winner) => {
    
    msg.innerText = `Congratulations, we have a winner ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes(boxes);
}


resetButton.addEventListener("click", 
() => {
    boxes.forEach((b) => {
    b.innerText ="";
    msgContainer.classList.add("hide");
    b.disabled = false;
    });
}

);

const disableBoxes = (boxes) => {
    boxes.forEach((bc) => {
        bc.disabled = true;
    })
}

newGame.addEventListener("click", 
() => {
    boxes.forEach((b) => {
    b.innerText ="";
    msgContainer.classList.add("hide");
    b.disabled = false;
    });
} );